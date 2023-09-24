# app.py
from flask import Flask, render_template
import myscript  # Import your Python script

app = Flask(__name__)

@app.route('/')
def index():
    result = myscript()  # Call Python script's function
    return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run()
