# Project Title

-Our project pertains to the Government Women's Polytechnic in Patna.
-The website we developed is a single-page web application built using React JS. In the front-end, we've designed various pages, including the home page, about page, academic section, registration, login, and contact.
-Shifting focus to the back-end, we've implemented an API that serves as the bridge between our front-end and back-end systems.
-For data storage, we opted for the MongoDB database, where we store information pertaining to registered users.

## Installation

-We employed the Visual Studio Code integrated development environment (IDE) from https://code.visualstudio.com/ for our project
-Here are the necessary tools for front-end development that should be installed using the terminal:

	1. Node.js and npm:

		Download Node.js from https://nodejs.org/. This includes npm, the package manager.
		Verify installation:
		
  		node -v
		npm -v

	2. Create React App:

		Install globally:
		npm install -g create-react-app
		
		Use it to create new projects:
		create-react-app my-react-app

	3. Other Tools (installed within projects):

		React Router:
		npm install react-router-dom

		Redux:
		npm install redux react-redux

		Axios:
		npm install axios

		React Helmet:
		npm install react-helmet
		
-Here are the tools and steps involved in setting up the development environment for React JS backend API with MongoDB, and input data validation:

	1. Install Backend Dependencies:

		Install Express.js, MongoDB driver, Mongoose, body-parser, and express-validator:
		
		npm install express mongoose body-parser express-validator
	
	4. Install MongoDB Server:

		Download and install the MongoDB server for your system from https://www.mongodb.com/try/download/community: https://www.mongodb.com/try/download/community.
		Optionally, install MongoDB Compass for visual database management.
	
	5. Set Up Backend API:

		Create a server.js file (or similar) in your React project's root directory.
		Import required modules:
		JavaScript
		const express = require('express');
		const mongoose = require('mongoose');
		const bodyParser = require('body-parser');
		const expressValidator = require('express-validator');
	
	Connect to MongoDB:
	JavaScript
		mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true })
		  .then(() => console.log('MongoDB connected'))
		  .catch(err => console.error(err));
		
		Define routes and data validation rules using Express and express-validator.
		Handle incoming requests, interact with MongoDB using Mongoose, and send responses.
	
	6. Integrate Frontend with API:

		We've Used a library "Axios" in our React components to make API calls to the backend.
	
	7. Data Validation:
	
		We've Used express-validator middleware to define validation rules for incoming request data.
		It throws errors or send appropriate responses if validation fails.


## Usage
-Here are the steps to run my website on a local server:

	1. Create a React Project:

		If you haven't already, create a React project using Create React App:
		npx create-react-app my-app
		
		Navigate to the project directory:
		cd my-app
		
	2. Install Dependencies (if needed):

		Install any additional libraries or tools required for your project using npm or yarn.
		
	3. Start the Development Server:

		Run the following command in your terminal:
		npm start
		This will usually start a local server at http://localhost:3000/ (or a different port specified in your project configuration).
		
	4. Access the Website:

		Open your web browser and visit the URL provided in the terminal output, typically http://localhost:3000/.
		You should see your React website running in the browser.
	
	5. Make Changes and See Updates:

		As you make changes to your React code, the development server will automatically reload the website in your browser, reflecting the updates in real time.
		Additional Notes:

	Note: Stopping the Server: Press Ctrl+C in the terminal to stop the development server.

## License
- This project is licensed under the MIT License. 

## Contributing
Thank you for considering contributing to this project! Here are the basic steps:
1. **Fork** the repository.
2. Create a new branch (`git checkout -b feature/issue-name`).
3. Make your changes and **commit** them (`git commit -am 'Add new feature'`).
4. **Push** to the branch (`git push origin feature/issue-name`).
5. Create a new **Pull Request**.

## Contact
- Email: [pikuraj9798440@gmail.com](mailto:your@mail.com) | LinkedIn: [Priyanka Raj]https://www.linkedin.com/in/priyanka-raj-0276202a2/
- Email: [lusibharti72@gmail.com](mailto:your1@mail.com)
- Email: [ranikumari06six@gmail.com](mailto:your1@mail.com)
- Email: [salonik0991@gmail.com](mailto:your1@mail.com) 
