# Sequelize_RESTfulAPI_organizeRoutes
An express app connecting to mySQL database and implementing RESTful API and organizing routes. 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on Desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RESTfulAPI_organizeRoutes: 

    express --view=hbs express_Sequelize_RESTfulAPI_organizeRoutes

(6) Once the process is complete, navigate into the express_Sequelize_RESTfulAPI_organizeRoutes directory: 

    cd express_Sequelize_RESTfulAPI_organizeRoutes
    
(7) Now in the express_Sequelize_RESTfulAPI_organizeRoutes directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RESTfulAPI_organizeRoutes directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file and require mysql2 in routes/index.js file.: ![Require mysql2 in routes-index js file (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71501644-a681e900-2839-11ea-8d37-0f9f7f0e800d.JPG)

COMMAND PROMPT

(14) Create necessary sequelize folders and files in project.:

    sequelize init

(15)  Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t film,actor,film_actor
    
VS CODE

(16) Create a new folder in your "models" folder called rel. Create a file in your rel folder called associations.js and define the relationships between the "film" and "actor" models in this file.: ![In models folder create rel folder and an associations js file in the rel folder (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71501686-cca78900-2839-11ea-900b-1cf7da63f6d9.JPG)

![In models rel folder update associations js file (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71501708-e8129400-2839-11ea-8b41-33e3911b40f6.JPG)

(17) In the models/index.js file add associations constant and at the bottom of the models/index.js file add the call to associations function.: ![Call associations function in models-index js file (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71501738-0aa4ad00-283a-11ea-95b9-de32640fe037.JPG)

(18) Open config/config.json file and change settings to connect to the database.: ![Update database connection info in config-config json file (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71501755-2445f480-283a-11ea-91f0-502bcf947b21.JPG)

(19) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application.: ![Add models in app js file (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71501770-450e4a00-283a-11ea-9c62-1e5cee7f0f50.JPG)

(20) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: Add models sequelize sync in app js file: ![Add models sequelize sync in app js file (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71501776-57888380-283a-11ea-8f11-db9a317adcba.JPG)

(21) In the routes/index.js file require the models.: ![Require models in routes-index js file (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71501805-8868b880-283a-11ea-8905-3d110b4f0d7d.JPG)

(22) In the routes folder create and actors.js file add actors routes : ![create routes-actors js file and add actor routes (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71535181-1774df80-28d2-11ea-9ed3-90402532847e.JPG)

![in routes-actors js file add actor routes (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71535194-2e1b3680-28d2-11ea-8f5c-d3e2f7b426cd.JPG)

(23) Add actors route in app.js file: ![Add actors route in app js file (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71535222-64f14c80-28d2-11ea-8859-2e6401a0e26c.JPG)

(24) Specify actors router module in app.js file: ![Specify actors router module in app js file (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71535246-8fdba080-28d2-11ea-998a-2805d868f9ee.JPG)

(25) Update paths in routes-actors.js file: ![Update paths in routes-actors js file (Sequelized_RESTfulAPI_organizeRoutes)](https://user-images.githubusercontent.com/35668707/71535276-b6014080-28d2-11ea-930e-6d08c4a83a18.JPG)

COMMAND PROMPT

(2) Run nodemon in terminal to see DB sync'd up: 

    nodemon

POSTMAN

(2) Navigate to localhost3000/actors/[insert specific id #] in Postman and perform a DELETE request to add data. 

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
