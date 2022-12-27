import pymongo
from pymongo import MongoClient

from selenium.webdriver import Chrome
import time
from selenium.webdriver import ChromeOptions
from selenium.webdriver.common.by import By

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

        time.sleep(5)

        total = driver.find_element(By.XPATH, "/html/body/div[1]/div/div/div/div[2]/div[1]/div[1]/div/div[2]/div[1]/div/div/div/div[1]").text
        # print(element.text)
        # info = driver.find_element_by_class_name("total-solved-container__1WZP")

        # information = info.text

        # splited_info = information.split('\n')

        easy = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div[2]/div[1]/div[1]/div/div[2]/div[2]/div[1]/div[1]/div[2]/span[1]").text

        medium = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div[2]/div[1]/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/span[1]").text

        hard = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div[2]/div[1]/div[1]/div/div[2]/div[2]/div[3]/div[1]/div[2]/span[1]").text

        # for i in splited_info:
        #     c = c + 1
        #     if c % 2 == 0:
        #         if c == 2:
        #             easy = i[0:-3]
        #         if c == 4:
        #             medium = i[0:-4]
        #         if c == 6:
        #             hard = i[0:-3]

        submissions = driver.find_element(By.XPATH,"/html/body/div/div/div/div/div[2]/div[2]/div/div[1]/div[1]/span[1]").text

        # sub = ""
        #
        # for i in submissions:
        #     if i == ' ':
        #         break
        #     else:
        #         sub = sub + i

        print(total)
        print(easy)
        print(medium)
        print(hard)
        print(submissions)
        acceptance = "100%"

        # updating the database here

        collection.update_one({"username": user}, {
            "$set": {"easy": easy, "medium": medium, "hard": hard, "acceptance": acceptance, "submissions": submissions}})

    except Exception as e:
        print(str(e))
        total = driver.find_element(By.XPATH, "/html/body/div[1]/div/div/div/div[2]/div[3]/div[1]/div/div[2]/div[1]/div/div/div/div[1]").text
        easy = driver.find_element(By.XPATH,
                                   "/html/body/div[1]/div/div/div/div[2]/div[3]/div[1]/div/div[2]/div[2]/div[1]/div[1]/div[2]/span[1]").text

        medium = driver.find_element(By.XPATH,
                                   "/html/body/div[1]/div/div/div/div[2]/div[3]/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/span[1]").text
        hard = driver.find_element(By.XPATH,"/html/body/div[1]/div/div/div/div[2]/div[3]/div[1]/div/div[2]/div[2]/div[3]/div[1]/div[2]/span[1]").text
        submissions = driver.find_element(By.XPATH,"/html/body/div[1]/div/div/div/div[2]/div[4]/div/div[1]/div[1]/span[1]").text
        acceptance = "100%"
        print(total)
        print(easy)
        print(medium)
        print(hard)
        print(submissions)
        collection.update_one({"username": user}, {
            "$set": {"easy": easy, "medium": medium, "hard": hard, "acceptance": acceptance,
                     "submissions": submissions}})



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