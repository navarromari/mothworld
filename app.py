from flask import Flask, redirect, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route("/about")
def about():
  return render_template('about.html')

@app.route("/brazil")
def brazil():
  return render_template('brazil.html')

@app.route("/lamp")
def lamp():
  return render_template('light.html')

if __name__ == "__main__":
  app.run(debug=True)
