from flask import Flask
from flask_cors import CORS
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
    
    # Enable CORS for localhost and your live Vercel frontend deployment
   # Enable CORS for localhost and all Vercel preview/production deployments
    CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:5173", 
            "http://127.0.0.1:5173",
            r"https://habitect-web-app-.*\.vercel\.app"
        ]
    }
 }, supports_credentials=True)
    # Register Blueprints with a common /api prefix
    app.register_blueprint(property_bp, url_prefix='/api')
    app.register_blueprint(appointments_bp, url_prefix='/api/appointments')
    app.register_blueprint(auth_bp, url_prefix='/api')
    app.register_blueprint(users_bp, url_prefix='/api')
    app.register_blueprint(contact_bp, url_prefix='/api')
    app.register_blueprint(saved_properties_bp, url_prefix='/api/saved-properties')

    with app.app_context():
        db.create_all()

    return app

app = create_app()

if __name__ == "__main__":
    app.run(port=5555, debug=True)