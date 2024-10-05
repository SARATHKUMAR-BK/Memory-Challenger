from flask import Flask,render_template

app = Flask(__name__)

gameList = ["numbers" , "alphabets" , "alphanumeric"]

@app.route("/")
def hello_world():
  return render_template('home.html', gameList=gameList)

if __name__ == "__main__":
  app.run(host='0.0.0.0',debug=True)
