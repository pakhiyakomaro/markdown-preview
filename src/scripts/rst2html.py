import docutils.core 
from io import StringIO
# import time

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        text = str(request.json["text"])
        return jsonify(docutils.core.publish_parts(text, writer_name='html')['html_body'])

app.run()