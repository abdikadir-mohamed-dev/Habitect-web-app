from models import Appointment, SavedProperty 
from flask import Blueprint, request, jsonify
from extensions import db
from models.property import Property
from schemas.property_schema import property_schema, properties_schema

property_bp = Blueprint("property_bp", __name__)


# ----------------------------
# GET ALL PROPERTIES
# ----------------------------
@property_bp.route("/properties", methods=["GET"])
def get_properties():
    properties = Property.query.all()
    return jsonify(properties_schema.dump(properties)), 200


# ----------------------------
# GET ONE PROPERTY
# ----------------------------
@property_bp.route("/properties/<int:property_id>", methods=["GET"])
def get_property(property_id):
    property_obj = Property.query.get(property_id)

    if not property_obj:
        return jsonify({"error": "Property not found"}), 404

    return jsonify(property_schema.dump(property_obj)), 200


# ----------------------------
# CREATE PROPERTY
# ----------------------------
@property_bp.route("/properties", methods=["POST"])
def create_property():
    data = request.get_json()

    new_property = Property(
        title=data.get("title"),
        description=data.get("description"),
        price=float(data.get("price", 0)),
        location=data.get("location", ""),          # Fixed to match React form
        bedrooms=int(data.get("bedrooms", 0)),      # Fixed to match React form
        bathrooms=int(data.get("bathrooms", 0)),    # Fixed to match React form
        image_url=data.get("image_url") or data.get("image"), # Supports both keys
        owner_id=1
    )

    db.session.add(new_property)
    db.session.commit()

    return jsonify(property_schema.dump(new_property)), 201


# ----------------------------
# UPDATE PROPERTY
# ----------------------------
@property_bp.route("/properties/<int:property_id>", methods=["PUT"])
def update_property(property_id):
    property_obj = Property.query.get(property_id)

    if not property_obj:
        return jsonify({"error": "Property not found"}), 404

    data = request.get_json()

    property_obj.title = data.get("title", property_obj.title)
    property_obj.description = data.get("description", property_obj.description)
    property_obj.price = float(data.get("price", property_obj.price))
    property_obj.location = data.get("location", property_obj.location)       # Fixed
    property_obj.bedrooms = int(data.get("bedrooms", property_obj.bedrooms)) # Fixed
    property_obj.bathrooms = int(data.get("bathrooms", property_obj.bathrooms)) # Fixed
    property_obj.image_url = data.get("image_url", data.get("image", property_obj.image_url))

    db.session.commit()

    return jsonify(property_schema.dump(property_obj)), 200


# ----------------------------
# DELETE PROPERTY
# ----------------------------
@property_bp.route('/properties/<int:id>', methods=['DELETE'])
def delete_property(id):
    property_item = Property.query.get_or_404(id)
    try:
        Appointment.query.filter_by(property_id=id).delete()
        SavedProperty.query.filter_by(property_id=id).delete()

        db.session.delete(property_item)
        db.session.commit()
        return {"message": "Property deleted successfully"}, 200
    except Exception as e:
        db.session.rollback()
        print("CRITICAL DELETE ERROR:", str(e))
        return {"error": str(e)}, 500