from flask import Flask, request, jsonify, render_template  
from utils import get_response, predict_class

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/handle-message', methods=['POST'])
def handle_message():
    message = request.json['message']
    intents_list = predict_class(message)
    response = get_response(intents_list)

    return jsonify({'response': response})


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)