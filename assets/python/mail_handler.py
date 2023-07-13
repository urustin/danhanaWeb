# mail_handler.py

import smtplib
from flask import jsonify
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email(name, lname, email, phone, message, service_name):
    if service_name == 'danhanacare':
        service_mail = "info@danhanacare.com.au"
    else:
        service_mail = "admin@flaresolution.com"

    msg = MIMEMultipart()
    msg['From'] = 'urustin@naver.com'
    # service_name에 따라 to를 변경해준다.
    msg['To'] = service_mail
    msg['Subject'] = f'[{service_name.upper()}] Someone sent a message from the website'
    
    body = f"""
    First Name : {name} <br />
    Last Name : {lname} <br />
    Email : {email} <br />
    Phone : {phone} <br />
    Message : {message} <br />
    """
    
    msg.attach(MIMEText(body, 'html'))

    try:
        server = smtplib.SMTP('smtp.naver.com', 587) 
        server.starttls()  
        server.login('urustin', 'spDlfdlf24!@$') 
        text = msg.as_string()
        server.sendmail('urustin@naver.com', service_mail, text)
        server.quit()
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to send email: {e}"}), 500
    finally:
        try:
            server.close()
        except Exception as e:
            return jsonify({"error": f"Failed to close server: {e}"}), 500




