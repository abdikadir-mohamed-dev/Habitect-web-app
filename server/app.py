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


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)
    print(app.config)
    print(type(app.config))
    print(app.config["SQLALCHEMY_DATABASE_URI"])
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)
    ma.init_app(app)
    cors.init_app(app)

    return app


app = create_app()


if __name__ == "__main__":
    app.run(debug=True)