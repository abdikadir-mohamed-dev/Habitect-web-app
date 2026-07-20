from flask import Flask
from flask_migrate import Migrate
from flassk import jsonify
from models import db   # importing the db object from models.py

app = Flask(__name__)

# Tell Flask where to save database file locally (in same directory as app.py)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///demo.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Connect database and migration tool to the app
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def home():
    return jsonify({
        "service": "Habitect Core API",
        "version": "1.0.0",
        "message": "Habitect API is up and ready.",
    }),200

if __name__ == '__main__':
    app.run(port=5000, debug=True)