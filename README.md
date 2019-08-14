# News API Client

A simple client PWA for the News API, based on react ([Next.js](https://nextjs.org/)) and the context API, and easily deployable to [ZEIT Now](https://zeit.co/now).

You can take a look at the project running here: https://newsapiclient.paulmdorr.now.sh/

## Features

- Show a list of the last 20 news from the News API
- Filter news by category
- Toggle page theme between light and dark
- Images are lazily loaded using [react-lazy-load](https://www.npmjs.com/package/react-lazy-load)
- Code is typed using TypeScript
- Easily deployable to ZEIT Now as lambdas
- Client cache with service worker and localstorage
- E2E tests with [Cypress](https://www.cypress.io/)

## Future improvements

- Local cache invalidation
- Pagination in order to load more than 20 articles
- Better UI (dropdown improvements)
- Better Unit testing coverage
- Better E2E testing

## Installation

After cloning the project, simply run this in its root folder:

```bash
yarn install
```

## Running

I'm using ZEIT Now as a deployment server, so in order to have a matching development server, I use `now dev` to run it locally.

Before running the project, you should add a .env file to set your News API key:

```bash
NEWS_API_KEY=<your API key>
```

Where you should replace `<your API key>` with they key from the News API site.

Once you've created your .env file, you should be able to run the server like this:

```bash
yarn start
```

Go to localhost:3000 and you should see something like this:

![Example unit testing](https://user-images.githubusercontent.com/86697/63045042-e4dbc480-bea5-11e9-989f-f55db2c81d48.png)

## Building for production use

This could be useful if you want to deploy the project anywhere other than ZEIT Now.

```bash
yarn build
```

## Deploying to ZEIT now

In order to deploy the project to your own ZEIT Now account, you must first login to now from the terminal, and then probably change the alias in the `now.json` file, since right now is related to my account: `"alias": ["newsapiclient.paulmdorr.now.sh"]`.

After that, simply running the following commands to execute the deploy process.

```bash
now secret add newsapikey <your API key>
yarn deploy
```

## Running Unit tests

Unit tests are written with Jest and Enzyme, and you could run them with this command:

```bash
yarn test
```

This should be the last part of the result:

![Example unit testing](https://user-images.githubusercontent.com/86697/63043596-ed7ecb80-bea2-11e9-99d0-48d39f694baa.png)

## Running e2e tests with Cypress

In order to run the e2e tests you need to install Cypress globally, since having it as a dev dependency caused the deploy to ZEIT Now to fail.

```bash
yarn global add cypress
```

Once you have Cypress installed, you should first have the server running:

```bash
yarn start
```

With the server up, you can run:

```bash
yarn e2e
```

And it should show something like this:

![Example e2e testing](https://user-images.githubusercontent.com/86697/63041377-1baddc80-be9e-11e9-9fec-57ef38bcdf59.png)