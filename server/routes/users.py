from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from extensions import db
from models.user import User
from schemas.user_schema import user_schema, users_schema # Make sure users_schema is imported or defined for lists

users_bp = Blueprint("users", __name__)


# NEW: Route for Admin to get all users
@users_bp.route("/users", methods=["GET"])
@jwt_required()
def get_all_users():
    users = User.query.all()
    return users_schema.jsonify(users), 200


@users_bp.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        return {"error": "User not found"}, 404

    return user_schema.jsonify(user)


@users_bp.route("/profile", methods=["PUT"])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        return {"error": "User not found"}, 404

    data = request.get_json()

    user.username = data.get("username", user.username)
    user.email = data.get("email", user.email)

    db.session.commit()

    return user_schema.jsonify(user)