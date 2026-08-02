from extensions import db
from datetime import datetime

class Appointment(db.Model):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    time = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(20), default='Pending') # Pending, Confirmed, Cancelled
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    user = db.relationship('User', backref='appointments')
    property = db.relationship('Property', backref='appointments')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'client_name': self.user.username if self.user else f"User ID: {self.user_id}",
            'property_id': self.property_id,
            'property_title': self.property.title if self.property else f"Property ID: {self.property_id}",
            'date': self.date,
            'time': self.time,
            'status': self.status,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }