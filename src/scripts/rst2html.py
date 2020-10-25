import docutils.core 
from io import StringIO
# import time

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder="../../build", static_url_path='/')
CORS(app)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.route("/api/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        text = str(request.json["text"])
        return jsonify(docutils.core.publish_parts(text, writer_name='html')['html_body'])

app.run()