from flask import Flask
from flask_cors import CORS  # <-- Import standard flask_cors directly
from config import Config
from extensions import (
    db,
    migrate,
    jwt,
    bcrypt,
    ma,
)
import models

from routes.property_routes import property_bp
from routes.appointments import appointments_bp
from routes.auth import auth_bp
from routes.users import users_bp
from routes.contact import contact_bp
from routes.saved_properties import saved_properties_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions properly
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)
    ma.init_app(app)
    
    # Enable CORS globally to prevent frontend blocked delete/update requests
    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

    # Register Blueprints
    app.register_blueprint(property_bp)
    app.register_blueprint(appointments_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(contact_bp)
    app.register_blueprint(saved_properties_bp)

    with app.app_context():
        db.create_all()

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)