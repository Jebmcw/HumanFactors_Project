from flask import Flask
from flask_cors import CORS
from flask_mail import Mail
from db import db
from routes import init_routes
import os
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# === Database Configuration ===
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

# === Email Configuration ===
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')

mail = Mail(app)

# === Initialize routes ===
init_routes(app, mail)

# === Create tables if not exist ===
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)

