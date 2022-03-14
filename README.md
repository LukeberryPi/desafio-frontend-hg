# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this app.

You'll need an IDE for better use of this app. My recommendation is to [download VS Code](https://code.visualstudio.com/download)

You should also [download Node.js](https://nodejs.org/en/download/)

After cloning this repository, you'll have to execute:

### `npm install`

This is to assure that you have all node_modules necessary to run this project on your machine.

Finally, in the project directory, you can run:

### `npm start`

This will run the app in development mode.

You can access it through your browser on the URL [http://localhost:3000](http://localhost:3000)

The page will reload whenever you make changes.

Additionally, you'll have access to your browser's console.

## Useful Resources

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Styled-Components Documentation](https://styled-components.com/docs)

## Extras used

- The main extra I used was Styled Components. It showed to be efficient, compared to naming classes for every component in my project
- In hindsight, using TypeScript from the start would've been a smarter option than plain JavaScript. I tried implementing it mid-project, but there was a bug envolving SVG rendering that made me abandon the idea
- Similarly, I tried migrating into Next.js for the Server-Side Rendering advantages, but fell short on how to implement it and make it work together with styled-components
- The last extra I tried using was Storybook, for a safe-environment to practice fetching API data through GET Requests. But, in the interest of time, as soon as I solved the API calls, I implemented it straight into the project itself

