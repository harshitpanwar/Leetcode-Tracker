import pymongo
from pymongo import MongoClient

from selenium.webdriver import Chrome
import time
from selenium.webdriver import ChromeOptions

options = ChromeOptions()
options.headless = True

PATH = "chromedriver.exe"

driver = Chrome(PATH, 4000, options)

# cluster = MongoClient(
#     "mongodb://localhost:27017/testdb")
# db = cluster["local"]
# collection = db["test"]
MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DB_NAME = 'testdb'
COLLECTION_NAME = 'postmessages'

connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
collection = connection[DB_NAME][COLLECTION_NAME]


def getUserInfo(user):
    try:

        driver.get('https://leetcode.com/' + user)

        time.sleep(20)

        element = driver.find_element_by_class_name("total-solved-count__2El1")

        info = driver.find_element_by_class_name("total-solved-container__1WZP")

        information = info.text

        splited_info = information.split('\n')

        c = 0
        easy = ""
        medium = ""
        hard = ""

        for i in splited_info:
            c = c + 1
            if c % 2 == 0:
                if c == 2:
                    easy = i[0:-3]
                if c == 4:
                    medium = i[0:-4]
                if c == 6:
                    hard = i[0:-3]

        acceptance = driver.find_element_by_class_name("css-1b3bb7o-PercentNumber")
        submissions = driver.find_element_by_xpath("(//div[@class='ant-card-head-title'])[4]").text

        sub = ""

        for i in submissions:
            if i == ' ':
                break
            else:
                sub = sub + i

        print(element.text)
        print(easy)
        print(medium)
        print(hard)
        # print(hard.text)
        print(acceptance.text)
        print(sub)

        # updating the database here

        collection.update_one({"username": user}, {
            "$set": {"easy": easy, "medium": medium, "hard": hard, "acceptance": acceptance.text, "submissions": sub}})

    except Exception as e:
        print(str(e))


def Reverse(lst):
    new_lst = lst[::-1]
    return new_lst

while True:

    try:

        dictr = []

        results = collection.find({"Medium": {"$exists": False}})
        for result in results:
            dictr.append(str(result['username']))


        dictr = Reverse(dictr)
        print(dictr)

        for data in dictr:
            print(data)
            getUserInfo(data)

    except Exception as e:
        print(str(e))
