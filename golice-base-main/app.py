import os
from urllib import response

from datetime import datetime
import threading
import pytz
from cs50 import SQL
import requests
from sqlalchemy import null
from flask import Flask, redirect, render_template, request

# Configure application
app = Flask(__name__)



# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True





# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///priceLog.db")



# here i want to call the api of main in each hour to store in the data base
def myApiCall():
    # here is the pure api call ...
    url = 'https://api.metals.live/v1/spot'
    response = requests.get(url)
    response.raise_for_status()
    troy_to_gram = 31.10348
    quote = float(response.json()[0]["gold"])
    #here i get the current time to use it when storing data in the db
    current_time = datetime.now(pytz.timezone('Asia/Riyadh'))
    # here is where i store the results in the data base
    db.execute('INSERT INTO historical Values(null, ?, ?, ?, ?, ?)', quote/troy_to_gram, current_time.year, current_time.month, current_time.day, current_time.hour)
    # call myApi() again in 6000 seconds/1hour
    threading.Timer(6000.01, myApiCall).start()

myApiCall()

#    my only table in the data base has this schema:

# CREATE TABLE historical(
# id INTEGER       PRIMARY KEY,
# price INTEGER   NOT NULL,
# year INTEGER     NOT NULL,
# month INTEGER    NOT NULL,
# day INTEGER      NOT NULL,
# hour INTEGER     NOT NULL    
# );

# here is where i put all the redirections and the server things

@app.route('/')
def index():
     # import from db and forward to html pages
     month = db.execute('SELECT * FROM (SELECT * FROM historical WHERE hour = 21 ORDER BY id DESC LIMIT 30) GROUP BY day ORDER BY id ASC')
     currentot = datetime.now(pytz.timezone('Asia/Riyadh'))
     daay =  db.execute('SELECT * FROM historical WHERE day = ? ORDER BY id ASC', currentot.day)
     return render_template('index.html', month=month, day=daay)

@app.route("/about")
def about():
     return render_template("about.html")


@app.route("/info")
def info():
     return render_template("info.html")