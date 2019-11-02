Getting Started

Clone the repo:

git clone git@github.com:kunalkapadia/nodejs-api-kit.git
cd nodejs-api-kit

Install yarn:

npm install -g yarn

Install dependencies:

yarn

Set environment (vars):

cp .env.example .env

Start server:

# Start server
yarn start

# Selectively set DEBUG env var to get logs
DEBUG=nodejs-api-kit:* yarn start

Refer debug to know how to selectively turn on logs.

Tests:

# Run tests written in ES6 
yarn test

# Run test along with code coverage
yarn test:coverage

# Run tests on file change
yarn test:watch

# Run tests enforcing code coverage (configured via .istanbul.yml)
yarn test:check-coverage

Lint:

# Lint code with ESLint
yarn lint

# Run lint on any file change
yarn lint:watch


Docker
Using Docker Compose for Development

# service restarts on file change
bash bin/development.sh

Building and running without Docker Compose

# To use this option you need to make sure mongodb is listening on port 27017

# Build docker 
docker build -t nodejs-api-kit .

# Run docker
docker run -p 4040:4040 nodejs-api-kit
