from db import db  # Import db from db.py

class User(db.Model):  # Define the User model
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)

class Budget(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    food = db.Column(db.Float, nullable=False)
    rent = db.Column(db.Float, nullable=False)
    entertainment = db.Column(db.Float, nullable=False)
    savings = db.Column(db.Float, nullable=False)
    other = db.Column(db.Float, nullable=False)
