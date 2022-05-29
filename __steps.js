/**
 **---------Installing process for server side-----------
 * 0. mkdir (project name)
 * 1. npm init -y
 * 2. npm i express cors mongodb dotenv jsonwebtoken
 * 3. create index.js file
 * 4. write down two script into the package.json for heroku deploy
 ** "start": "node index.js",
 ** "start-dev": "nodemon index.js",
 *---------git init for git ignore---------
 * git init
 * 
 *---------Create .git ignore file----------
 * .gitignore
 * 
 * 
 **----------Connect server side with Database---------
 * Go to mongodb atlas and create a new project
 * 
 **-------Use this command server side for Run-------------
 * npm run start-dev
 * 
 * 
 * ----------------------------------------------
 **Heroku deploy one time for your computer
 * --------------------------------------------
 * 1. Create heroku account
 * 2. Verify email
 * 3. Install heroku CLi
 * 4. heroku login
 * 
 * -----------------------------------
 **For each project one time
 * ----------------------------------
 * 1. heroku create (make sure you locally ok or not)
 * 2.make sure you: git add. , git commit -m "message", git push
 * 3. git push heroku main
 * 4. Go to heroku dashboard > current project > reveal config verse
 * 5. copy paste config verse from .env file
 * 6. after completing copy paste config verse then copy heroku apps root url and replace localhost:3000
 * 
 * 6.Select localhost:3000 link and press the command for all select ctrl+shift+f (command for select localhost link)
*/