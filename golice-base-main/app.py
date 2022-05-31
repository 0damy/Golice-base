import os
from urllib import response

from cs50 import SQL
from flask import Flask, redirect, render_template, request
from datetime import datetime
import threading
import requests
import pytz
from sqlalchemy import null

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True


# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///pirceLog.db")



# here i want to call the api of main in each hour to store in the data base
def myApiCall():
    # here is the pure api call ...
    url = 'https://api.metals.live/v1/spot'
    response = requests.get(url)
    response.raise_for_status()
    quote = response.json()[0]['gold']
#     here i get the current time to use it when storing data in the db
    current_time = datetime.datetime.now(pytz.timezone('Asia/Riyadh'))
    current_time.month
    # here is where i store the results in the data base
    db.execute('INSERT INTO historical Values(null, ?, ?, ?, ?, ?)', quote, current_time.year, current_time.month, current_time.day, current_time.hour)

    # simple test
    print('saex')
    # call myApi() again in 6000 seconds/1hour
    threading.Timer(6000, myApiCall).start()

myApiCall()

print('heloszzzz')

#    my only table in the data base has this schema:

# CREATE TABLE historical(
# id INTEGER       PRIMARY KEY,
# price INTEGER   NOT NULL,
# year INTEGER     NOT NULL,
# month INTEGER    NOT NULL,
# day INTEGER      NOT NULL,
# hour INTEGER     NOT NULL    
# );