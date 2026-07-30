from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from extensions import db
from models.property import Property
from schemas.property_schema import property_schema, properties_schema

property_bp = Blueprint("property_bp", __name__)


@property_bp.route("/properties", methods=["GET"])
def get_properties():
    properties = Property.query.all()
    return jsonify(properties_schema.dump(properties)), 200


@property_bp.route("/properties/<int:property_id>", methods=["GET"])
def get_property(property_id):
    property_obj = Property.query.get(property_id)

    if not property_obj:
        return jsonify({"error": "Property not found"}), 404

    return jsonify(property_schema.dump(property_obj)), 200


@property_bp.route("/properties", methods=["POST"])
@jwt_required()
def create_property():
    data = request.get_json()

    errors = property_schema.validate(data)
    if errors:
        return jsonify(errors), 400

    current_user_id = get_jwt_identity()

    new_property = Property(
        title=data["title"],
        description=data["description"],
        price=data["price"],
        location=data["location"],
        bedrooms=data["bedrooms"],
        bathrooms=data["bathrooms"],
        image_url=data.get("image_url"),
        owner_id=current_user_id,
    )

    db.session.add(new_property)
    db.session.commit()

    return jsonify(property_schema.dump(new_property)), 201


@property_bp.route("/properties/<int:property_id>", methods=["PUT"])
@jwt_required()
def update_property(property_id):
    property_obj = Property.query.get(property_id)

    if not property_obj:
        return jsonify({"error": "Property not found"}), 404

    data = request.get_json()

    errors = property_schema.validate(data, partial=True)
    if errors:
        return jsonify(errors), 400

    for field in [
        "title",
        "description",
        "price",
        "location",
        "bedrooms",
        "bathrooms",
        "image_url",
    ]:
        if field in data:
            setattr(property_obj, field, data[field])

    db.session.commit()

    return jsonify(property_schema.dump(property_obj)), 200


@property_bp.route("/properties/<int:property_id>", methods=["DELETE"])
@jwt_required()
def delete_property(property_id):
    property_obj = Property.query.get(property_id)

    if not property_obj:
        return jsonify({"error": "Property not found"}), 404

    db.session.delete(property_obj)
    db.session.commit()

    return jsonify({"message": "Property deleted"}), 200