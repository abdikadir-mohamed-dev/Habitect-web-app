from flask import Flask
from config import Config
from extensions import (
    db,
    migrate,
    jwt,
    bcrypt,
    ma,
    cors,
)
import models

from routes.property_routes import property_bp



def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)
    ma.init_app(app)
    cors.init_app(app)

    # Register Blueprints
    app.register_blueprint(property_bp)

    with app.app_context():
        db.create_all()

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)