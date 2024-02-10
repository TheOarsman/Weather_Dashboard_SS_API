# Weather_Dashboard_SS_API

Resource: Bootstrap

https://theoarsman.github.io/Weather_Dashboard_SS_API/

# 06 Server-Side APIs: Weather Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city



# MVC-Tech-Blog

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Your Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Tabel of Contents

- [MVC: Tech Blog](#mvc-tech-blog)<br>
- [Description](#description)<br>
- [Tabel of Contents](#tabel-of-contents)<br>
- [User Story](#user-story)<br>
- [Acceptance Criteria](#acceptance-criteria)<br>
- [Installation](#instllation)<br>
- [Usage](#usage)<br>
- [Technologies](Technologies)
- [License](#license)<br>
- [Contributing](#contributing)<br>
- [Tests](#tests)<br>
- [Resources](#resources)<br>
- [Questions/Contact](#questionscontact)

## User Story

**AS A** developer who writes about tech <br>

**I WANT** a CMS-style blog site <br>

**SO THAT** I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria

**GIVEN** a CMS-style blog site

**WHEN** I visit the site for the first time <br>
**THEN** I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

**WHEN** I click on the homepage option <br>
**THEN** I am taken to the homepage

**WHEN** I click on any other links in the navigation <br>
**THEN** I am prompted to either sign up or sign in

**WHEN** I choose to sign up <br>
**THEN** I am prompted to create a username and password

**WHEN** I click on the sign-up button <br>
**THEN** my user credentials are saved and I am logged into the site

**WHEN** I revisit the site at a later time and choose to sign in <br>
**THEN** I am prompted to enter my username and password

**WHEN** I am signed in to the site <br>
**THEN** I see navigation links for the homepage, the dashboard, and the option to log out

**WHEN** I click on the homepage option in the navigation <br>
**THEN** I am taken to the homepage and presented with existing blog posts that include the post title and the date created

**WHEN** I click on an existing blog post <br>
**THEN** I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

**WHEN** I enter a comment and click on the submit button while signed in <br>
**THEN** the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

**WHEN** I click on the dashboard option in the navigation <br>
**THEN** I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

**WHEN** I click on the button to add a new blog post <br>
**THEN** I am prompted to enter both a title and contents for my blog post

**WHEN** I click on the button to create a new blog post <br>
**THEN** the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

**WHEN** I click on one of my existing posts in the dashboard <br>
**THEN** I am able to delete or update my post and taken back to an updated dashboard

**WHEN** I click on the logout option in the navigation <br>
**THEN** I am signed out of the site

**WHEN** I am idle on the site for more than a set time <br>
**THEN** I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

## Installation

No installation needed. App is deplayed on Heroku.

## Usage

App can be viewed at **\*\***\_\_\_\_**\*\***.

## Technologies

![Javascript](https://img.shields.io/badge/-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)

![MySQL](https://img.shields.io/badge/-MySql-4479a1?style=for-the-badge&logo=mysql&logoColor=white)

![Insomnia](https://img.shields.io/badge/-Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)

![Heroku](https://img.shields.io/badge/-Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

The following npm packages were also used:

`express.js`<br><br>
`dotenv`<br><br>
`Sequelize`<br><br>
`bcrypt`<br><br>
`express-handlebars`<br><br>
`express-session`<br><br>
`connect-session-sequelize`

## License

PLACEHOLDER UNTIL WE DECIDE WHICH LICENSE TO WE WANT TO USE

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

MIT License

Copyright 2024 Heinz Ulrich V

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

N/A

## Tests

None currently

## Resources

[How to use Inquirer.js](https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f)

[Insomnia](https://insomnia.rest/)

## Questions/Contact

<h4>Developer: Heinz Ulrich V</h4>

![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)&emsp;[TheOarsman](https://www.github.com/TheOarsman)

&emsp;[Heinz Ulrich V](https://www.linkedin.com/in/heinz-ulrich-v-3a3486a0/)

&emsp;<heinzulrichv@gmail.com>
```
