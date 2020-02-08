from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html', name='Kunal')

app.run(port=3000, debug=true)
