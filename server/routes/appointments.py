from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions import db
from models.appointment import Appointment
from models.user import User

appointments_bp = Blueprint(
    "appointments",
    __name__
    
)


def get_current_user():
    identity = get_jwt_identity()

    # JWT identity may be string, int, or dict
    if isinstance(identity, dict):
        user_id = identity.get("id") or identity.get("sub")
    else:
        user_id = identity

    if isinstance(user_id, str) and user_id.isdigit():
        user_id = int(user_id)

    if isinstance(user_id, int):
        return User.query.get(user_id)

    return User.query.filter_by(email=user_id).first()


@appointments_bp.route("", methods=["GET"])
@jwt_required()
def get_appointments():
    user = get_current_user()

    if not user:
        return jsonify({"error": "User not found"}), 404

    appointments = Appointment.query.filter_by(user_id=user.id).all()

    return jsonify([appointment.to_dict() for appointment in appointments]), 200


@appointments_bp.route("/admin", methods=["GET"])
@jwt_required()
def get_admin_appointments():
    user = get_current_user()

    if not user:
        return jsonify({"error": "User not found"}), 404

    role = (getattr(user, "role", "") or "").lower()

    if role != "admin":
        return jsonify({"error": "Admin access required"}), 403

    appointments = Appointment.query.all()

    return jsonify([appointment.to_dict() for appointment in appointments]), 200


@appointments_bp.route("", methods=["POST"])
@jwt_required()
def create_appointment():
    user = get_current_user()

    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.get_json()

    required = ["property_id", "date", "time"]

    for field in required:
        if field not in data:
            return jsonify({"error": f"{field} is required"}), 400

    appointment = Appointment(
        user_id=user.id,
        property_id=data["property_id"],
        date=data["date"],
        time=data["time"],
        status=data.get("status", "Pending")
    )

    db.session.add(appointment)
    db.session.commit()

    return jsonify(appointment.to_dict()), 201


@appointments_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
def update_appointment(id):
    appointment = Appointment.query.get_or_404(id)

    data = request.get_json()

    if "status" in data:
        appointment.status = data["status"]

    if "date" in data:
        appointment.date = data["date"]

    if "time" in data:
        appointment.time = data["time"]

    db.session.commit()

    return jsonify(appointment.to_dict()), 200


@appointments_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_appointment(id):
    appointment = Appointment.query.get_or_404(id)

    db.session.delete(appointment)
    db.session.commit()

    return jsonify({"message": "Appointment cancelled successfully"}), 200