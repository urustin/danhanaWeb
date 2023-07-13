# app.py

from flask import Flask, request
from flask_cors import CORS
from mail_handler import send_email  # Assume that send_email is in the mail_handler.py

app = Flask(__name__)
CORS(app)

@app.route('/send_email', methods=['POST'])
def send_email_route():
    data = request.get_json()
    response = send_email(data['con_fname'], data['con_lname'], data['con_email'], data['con_phone'], data['con_message'], data['service_name'])
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
