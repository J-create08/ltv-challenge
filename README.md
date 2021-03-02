# ltv-challenge
LTV Jr. Front End Developer Challenge. Juan Carlos Rojas.

Webpage challenge which main porpuse is to presents users a friendly interface where they can search for email addresses and get information about that email's owner.

This project implements a responsive interface in order to make it easier for users to interact across different devices.

First, the user is presented with a landing page which has a navigation bar, search input, and general information. When the user writes the desired email to search for, the javascript file first validates the carachters looking for a "@" character and a "." character, if the input is valid and ajax request is triggered and upon success the information is displayed on a card element, otherwise the user will be presented with a "0 Results" message.

Development practices and conventions used for this project:

Adding comments and properly formating the document for better understanding of the code
Separate css, javascript and html files for file-role separation and organization.
Usage of Bootstrap 4 responsive classes and media querys to improve visualization across devices.
CSS file organization by segments: color elements, font elements, icon elements, display fixes and @media

Heroku hosted site: https://ltv-test-jcrb.herokuapp.com/
