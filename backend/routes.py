from flask import Blueprint, request, jsonify
from models import User, Budget
from db import db
from flask_mail import Message

routes = Blueprint("routes", __name__)

# === User Routes ===
@routes.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([
        {"id": user.id, "username": user.username, "email": user.email}
        for user in users
    ])

# === Budget Routes ===
@routes.route("/api/budget", methods=["POST"])
def save_budget():
    data = request.json
    new_budget = Budget(
        food=data.get("food", 0),
        rent=data.get("rent", 0),
        entertainment=data.get("entertainment", 0),
        savings=data.get("savings", 0),
        other=data.get("other", 0)
    )
    db.session.add(new_budget)
    db.session.commit()
    return jsonify({"message": "Budget saved"}), 201

@routes.route("/api/budget/latest", methods=["GET"])
def get_latest_budget():
    budget = Budget.query.order_by(Budget.id.desc()).first()
    if budget:
        return jsonify({
            "food": budget.food,
            "rent": budget.rent,
            "entertainment": budget.entertainment,
            "savings": budget.savings,
            "other": budget.other
        })
    return jsonify({"message": "No data found"}), 404

# === Support Email Route ===
@routes.route("/api/support", methods=["POST"])
def send_support_email():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    subject = data.get("subject")
    message = data.get("message")

    msg = Message(
        subject=f"[Support] {subject}",
        sender=email,
        recipients=["your_email@gmail.com"],  # <-- Replace with your actual email
        body=f"From: {name} <{email}>\n\n{message}"
    )

    try:
        send_support_email.mail.send(msg)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# === Register Blueprint ===
def init_routes(app, mail_instance=None):
    if mail_instance:
        # Attach mail instance for sending support emails
        send_support_email.mail = mail_instance
    app.register_blueprint(routes)




