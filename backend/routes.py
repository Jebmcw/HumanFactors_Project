from flask import Blueprint, jsonify
from models import User
from db import db

routes = Blueprint("routes", __name__)

@routes.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([{"id": user.id, "username": user.username, "email": user.email} for user in users])

def init_routes(app):
    app.register_blueprint(routes)


