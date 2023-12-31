## ChatGPT generated project idea for myself
## Made with some snippets from Codeium AI's suggestion
Name: QuotableWeb

Concept: QuotableWeb is a web server that displays a new inspiring or thought-provoking quote every day. It's a simple project with a positive impact.

##  Installation
Clone this repository(using the ssh option is safer)  into where you want to save.

```bash
git clone git@github.com:victoraster2010/quotablewebapi.git
```
Enter the folder and use npm install to install all the project dependencies
```bash
 cd quotablewebapi && npm install
```
Common commands for this project:

```bash
# Run the project without TS compilling for development purposes only!
 npm run start:dev
```
```bash
# build the project to deploy
 npm run build
```
```bash
# Run the project after building in deploy environment
 npm run start
 ```

Features:

    Quote Display: Each day, the web server presents a different quote on the homepage. Users can simply visit the site to read the latest quote.

    Random Quotes: If you prefer, you can add a feature to display a random quote every time the page is refreshed or visited.

    Archives: You could include an archive section where users can access previous quotes. This way, they can revisit quotes that resonated with them.

    Sharing: Allow users to easily share the quote of the day on social media platforms like Twitter, Facebook, or Instagram.

    Subscribe Option: Offer users the option to subscribe to receive the daily quote via email. This can help build a small community around your project.

Endpoints implemented:
GET /last retrieves last quote submited
GET /random retrives random quote and author
post /    if submited a author with name lenght > 3 and quote bigger than 5 creates a quote
Technology Stack:

    Frontend: HTML5, CSS3, JavaScript
    Backend: Node.js, Express.js
    Data Storage: You can store the quotes in a simple JSON file or a lightweight database like SQLite.
Getting started:
    Setup: Set up your development environment with Node.js and Express.js.

    Quote Data: Create a simple JSON file with an array of quotes and their authors.

    Random Quote Logic: Implement logic to randomly select a quote from the JSON file and display it on the webpage.

    Frontend: Create a basic HTML page to display the quote and add some CSS for styling.

    Archives and Sharing: Once you have the basic functionality working, you can gradually add features like an archives section and social sharing buttons.

This project should be relatively straightforward to implement, and it can be a great way for you to get started with web development while keeping things manageable given your ADHD. Remember, simplicity can often lead to great user experiences!