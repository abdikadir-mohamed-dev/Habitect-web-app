from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions import db
from models.saved_property import SavedProperty

saved_properties_bp = Blueprint("saved_properties", __name__)

@saved_properties_bp.route('', methods=['GET'])
@jwt_required()
def get_saved_properties():
    current_user_id = get_jwt_identity()
    saved = SavedProperty.query.filter_by(user_id=current_user_id).all()
    return jsonify([s.to_dict() for s in saved]), 200

@saved_properties_bp.route('', methods=['POST'])
@jwt_required()
def save_property():
    current_user_id = get_jwt_identity()
    data = request.get_json()
    
    if not data or not data.get('property_id'):
        return jsonify({'error': 'property_id required'}), 400

    existing = SavedProperty.query.filter_by(
        user_id=current_user_id, 
        property_id=data['property_id']
    ).first()
    
    if existing:
        return jsonify({'message': 'Property already saved'}), 200

    new_saved = SavedProperty(
        user_id=current_user_id,
        property_id=data['property_id']
    )
    db.session.add(new_saved)
    db.session.commit()
    return jsonify(new_saved.to_dict()), 201

@saved_properties_bp.route('/<int:id>', methods=['DELETE'])
@jwt_required()
def remove_saved_property(id):
    current_user_id = get_jwt_identity()
    saved = SavedProperty.query.filter_by(id=id, user_id=current_user_id).first_or_404()
    
    db.session.delete(saved)
    db.session.commit()
    return jsonify({'message': 'Removed from saved properties'}), 200