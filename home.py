from flask import Flask,render_template

app = Flask(__name__)

gameList = ["number" , "alphabet" , "alphanumeric"]

@app.route("/")
def homepage():
  return render_template('home.html', gameList=gameList)

@app.route("/<gameType>")
def play_with_numbers(gameType):
  return render_template('play.html', gameType=gameType)

@app.route("/alphabets")
def play_with_alphabets():
  return render_template('home.html', gameList=gameList)

@app.route("/alphanumeric")
def play_with_alphanumeric():
  return render_template('home.html', gameList=gameList)

if __name__ == "__main__":
  app.run(host='0.0.0.0',debug=True)
