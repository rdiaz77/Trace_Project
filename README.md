# Project SVTrace 

SVTrace stands for Sale Visit Tracer. The app will help sale staff to track on site visits, so the sales manager will have a handy tool to understand how well, or bad, the sale force is covering their territory.

## The app has x main menus:

Dashboard: shows the las 5 visits and the last 5 contacts as well as the next 5 programmed visits
Visits: allows to add new visits, see a list of all visits, see a  particular visit, edit and delete
Users: allows to add new users, see a list of all users, see a  particular user, edit and delete users
Map: Allows to get the location of the app user and show the distance of the next clients if  they are within a certain range
Contacts:allows to add new contacts, see a list of all contacts, see a  particular contact, edit and delete contacts
Contact us: takes you to a form to contact the programming team to improve the app and catch inconsistencies



## Routes
Method	 Path	                        Purpose
GET	     /	                Show the dashboard with the last 5 visits

GET	    /users	            Index page listing all users, an allows selection of a particular user, edit it and delete it from the db
GET	    /users/new	        Form to create a new user
POST	/users	            Create a new user
GET	    /users/:id	        Show page containing details for a specific user 
GET	    /users/:id/edit	    Edit form for a user
PUT	    /users/:id        	Make changes to an existing user
DELETE	/users/:id	        Delete an existing user


GET	    /visits	            Index page listing all visits, an allows selection of a particular visit, edit it and delete it from the db
GET	    /visits/new	        Form to create a new visit
POST	/visits	            Create a new visit
GET	    /visits/:id	        Show page containing details for a specific visit 
GET	    /visits/:id/edit	Edit form for a visit
PUT	    /visits/:id        	Make changes to an existing visit
DELETE	/visits/:id	        Delete an existing visit

GET	    /contacts	        Index page listing all contacts, an allows selection of a particular contact, edit it and delete it from the db
GET	    /contacts/new	    Form to create a new contact
POST	/contacts	        Create a new contact
GET	    /contacts/:id	    Show page containing details for a specific contact 
GET	    /contacts/:id/edit	    Edit form for a contact
PUT	    /contacts/:id       Make changes to an existing contact
DELETE	/contacts/:id	    Delete an existing contact

GET	    /map	            Page shows dynamically a map from google map js. Get the users geolocation and show clients within a range
GET	    /contactus	        Form to contact the IT team
POST	/contactus	        Send the contact form

GET	    *	                404 page (matches any route not defined above)

## BACKEND
### DATABASE(db)

the db is postgressql and it is managed with pgAdmin and tables are created with sequelize

## Server
the app use node js and express to handle the routes. The entry file is index,js and the server can be started with nodemon and listen in localhost:3000

## FRONTEND

It uses React for dynamically creating the view. The entry file is index.js and the server can be started with npm start. It usually listen in localhost:3001

REACT has the standard format with pages and components. The styling is performed with material UI




