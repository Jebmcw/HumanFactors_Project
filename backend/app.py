from flask import Flask
from flask_cors import CORS
from db import db  # Import db from db.py
from routes import init_routes

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Set up SQLite database path
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)  # Initialize the database object

# Create database tables if they don't exist
with app.app_context():
    db.create_all()

# Initialize routes
init_routes(app)

if __name__ == "__main__":
    app.run(debug=True)
