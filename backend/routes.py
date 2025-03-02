from flask import Blueprint
from models import User  # Import User from models

routes = Blueprint("routes", __name__)

def init_routes(app):
    app.register_blueprint(routes)  # Register routes
