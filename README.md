# CF Sample App Node

The default Node.js app that will be pushed into the Swisscom Application cloud if no source code is provided.

Based on [Express](http://expressjs.com/).

## Run locally

1. Install [Node.js and npm](https://nodejs.org/)
1. Run `npm install`
1. Run `npm start`
1. Visit [http://localhost:3000](http://localhost:3000)

## Run in the cloud

1. Install the [cf CLI](https://github.com/cloudfoundry/cli#downloads)
1. Run `cf push my-node-app --random-route`
1. Visit the given URL
