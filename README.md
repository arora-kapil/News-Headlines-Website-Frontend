# News Website - Full Stack Application

This is a full-stack news website that fetches top headlines from the NewsAPI and displays them to users. The frontend is built using React, and the backend is powered by Spring Boot. Users can view news articles by category or search for specific news topics.

## Features

- Browse top news headlines by category: Trending, Business, Entertainment, Health, Science, Sports, and Technology.
- Search for news articles based on a user-provided query.
- Displays the news articles with titles, descriptions, and links to the full article.
- Responsive design for both mobile and desktop screens.
- Error handling and loading states to improve user experience.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: For responsive design and prebuilt components.
- **CSS**: For additional styling.

### Backend
- **Spring Boot**: Java-based framework for building robust backend services.
- **REST APIs**: Fetch news data by category or search query using the NewsAPI.
- **NewsAPI**: External API that provides news articles based on categories or search terms.

### Hosting & Deployment
- **Frontend**: Hosted on [AWS S3](https://aws.amazon.com/s3/).
- **Backend**: Deployed on [AWS EC2](https://aws.amazon.com/ec2/).

## How It Works

### Frontend
- **Navbar Component**: Allows users to switch between different news categories and perform searches.
- **News Component**: Fetches and displays a list of news articles based on the current category or search query.
- **Search**: Users can search for specific news articles using a search bar in the navbar.
- **Loading & Error States**: Displays loading spinners while fetching data, and error messages in case of failure.

### Backend
- **Spring Boot Controller**: Provides two main endpoints:
  - `/api/news/category?category={category}`: Fetches top headlines for the specified category.
  - `/api/news/search?query={query}`: Searches for news articles based on the query string.
- **Service Layer**: Makes HTTP requests to the NewsAPI and caches the results for better performance.
- **DTOs**: Data Transfer Objects are used to model the API responses.

## Running the Project Locally

### Prerequisites

- **Node.js** and **npm** installed on your machine for the frontend.
- **Java 8+** and **Maven** installed for the backend.
- An API key from [NewsAPI](https://newsapi.org/).

# Frontend Setup

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
