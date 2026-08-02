from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions import db
from models.appointment import Appointment
from models.user import User

appointments_bp = Blueprint('appointments', __name__, url_prefix='/appointments')

@appointments_bp.route('', methods=['GET'])
@jwt_required()
def get_appointments():
    current_user_id = get_jwt_identity()
    appointments = Appointment.query.filter_by(user_id=current_user_id).all()
    return jsonify([appt.to_dict() for appt in appointments]), 200

@appointments_bp.route('/admin', methods=['GET'])
@jwt_required()
def get_admin_appointments():
    identity = get_jwt_identity()
    
    user_id = identity.get('sub') if isinstance(identity, dict) else identity
    if isinstance(identity, dict) and 'id' in identity:
        user_id = identity['id']

    if isinstance(user_id, int) or (isinstance(user_id, str) and user_id.isdigit()):
        user = User.query.get(int(user_id))
    else:
        user = User.query.filter_by(email=user_id).first()

    # Check if the role is admin (case-insensitive)
    user_role = getattr(user, 'role', '') or ''
    is_admin = user_role.lower() == 'admin' or getattr(user, 'is_admin', False)

    if not user or not is_admin:
        return jsonify({'error': 'Unauthorized: Admin access required'}), 403

    appointments = Appointment.query.all()
    return jsonify([appt.to_dict() for appt in appointments]), 200

@appointments_bp.route('', methods=['POST'])
@jwt_required()
def create_appointment():
    current_user_id = get_jwt_identity()
    data = request.get_json()
    
    if not data or not all(k in data for k in ('property_id', 'date', 'time')):
        return jsonify({'error': 'Missing required fields'}), 400

    new_appt = Appointment(
        user_id=current_user_id,
        property_id=data['property_id'],
        date=data['date'],
        time=data['time'],
        status=data.get('status', 'Pending')
    )
    db.session.add(new_appt)
    db.session.commit()
    return jsonify(new_appt.to_dict()), 201

@appointments_bp.route('/<int:id>', methods=['PUT'])
@jwt_required()
def update_appointment(id):
    appt = Appointment.query.get_or_404(id)
    data = request.get_json()
    
    if 'status' in data:
        appt.status = data['status']
    if 'date' in data:
        appt.date = data['date']
    if 'time' in data:
        appt.time = data['time']

    db.session.commit()
    return jsonify(appt.to_dict()), 200

@appointments_bp.route('/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_appointment(id):
    appt = Appointment.query.get_or_404(id)
    db.session.delete(appt)
    db.session.commit()
    return jsonify({'message': 'Appointment cancelled successfully'}), 200