- [About project](#about-project)
- [Live site](#live-site)
- [Run project](#run-project)
  - [Clone the project](#clone-the-project)
  - [Run backend](#run-backend)
  - [Run frontend](#run-frontend)
- [Guides](#guides)
  - [Setup database](#setup-database)
  - [Setup linting/formatting](#setup-lintingformatting)
    - [Linting](#linting)
    - [Formatting](#formatting)
  - [Setup deployment](#setup-deployment)
    - [Deploy backend (Node/Express)](#deploy-backend-nodeexpress)
    - [Deploy frontend (Vite/React)](#deploy-frontend-vitereact)
    - [CORS](#cors)

# About project

https://www.iamjunior.lt/front-end-akceleratorius-javascript course task.

Frontend and backend, both have separate READMEs with more info about what has to be done.

# Live site

Frontend - https://frontend-one-mu-96.vercel.app/

Backend - https://backend-eta-sable-64.vercel.app/

# Run project

## Clone the project

```bash
git clone https://github.com/azegas/iamjunior-home-service
# choose a correct branch
cd iamjunior-home-service
```

## Run backend

To start the API server, run the following commands:

```bash
cd backend
# set the environment variables to .env file
cp .env_template .env
npm i
npm run server
```

When site has been launched:

- Index page - http://localhost:3000/
- Swagger API docs - http://localhost:3000/api-docs/
- To preview the chosen endpoint - http://localhost:3000/api/categories (or other endpoint)

Database is in MongoDB over at - https://www.mongodb.com (accessed from all ips (0.0.0.0/0) - configured on mongo atlas side)

To recreate the database, run the following command:

```bash
cd utils
node recreate-db.js
```

## Run frontend

```bash
# make sure backend server is running first
cd frontend
npm i
npm run dev
# open http://localhost:5173/ in your browser to preview the site
```

# Guides

## Setup database

MongoDB is used for the database - https://www.mongodb.com/

Register/login, etc.

Create a new project, choose a free tier.

Create a cluster.

Take the connection string, it will look something like this:

```
mongodb+srv://<username>:<password>@<cluster-address>/<dbname>?retryWrites=true&w=majority
```

Add the connection string to the `.env` file in the `backend` folder. Use .env_template as a template.

Create a DB connecting function, use it when server is starting.

Then create models, whenever (tables in the db will be created automatically when you connect to the db).

Then when you are saving data, use the models to write/edit/delete entries to the db.

## Setup linting/formatting

This step is totally optional, but recommended for development experience.

Both frontend and backend folders have their own linting/formatting rules, separate configuration files also.

`Eslint` linter **CAN** contain stylistic rules, but then it might conflict with `Prettier` (.prettierrc).

That is why we will use eslint for code **quality rules**, and Prettier for **stylistic** rules.

### Linting

Install needed dependencies (frontend/backend):

```bash
# Linting for backend
cd backend
# choose (commonjs, no react, node(not browser))
npm init @eslint/config@latest


# Linting for frontend
cd frontend
# choose (commonjs, react, browser)
npm init @eslint/config@latest
```

Install needed extensions:

```
Name: ESLint
Id: dbaeumer.vscode-eslint
Description: Integrates ESLint JavaScript into VS Code.
Version: 3.0.10
Publisher: dbaeumer
VS Marketplace Link: https://marketplace.cursorapi.com/items?itemName=dbaeumer.vscode-eslint
```

Setup needed files (frontend/backend):

`.eslint.config` or something similar file should be setup already in your chosen folder by the previous command. One for frontend and one for backend.

```json
# example rules:

rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'no-console': 'error'
    }
```

configure eslint rules (all eslint rules - https://eslint.org/docs/latest/rules/)

Setup package.json (frontend/backend):

```json
"scripts": {
    "lint": "eslint ."
}
```

Setup `user settings JSON` in vscode:

```json
"editor.codeActionsOnSave": {
  "source.fixAll": "explicit"
}
```

Run lint manually for all the files in the folder (frontend/backend):

```bash
npm run lint
```

### Formatting

`Prettier` is used for formatting().

Prettier already contains some rules, but we can add more/override existing ones by creating a configurations file. More about it later.

Install needed dependencies (frontend/backend):

```bash
npm install --save-dev prettier
```

Install needed extensions:

```
Name: Prettier - Code formatter
Id: esbenp.prettier-vscode
Description: Code formatter using prettier
Version: 11.0.0
Publisher: esbenp
VS Marketplace Link: https://marketplace.cursorapi.com/items?itemName=esbenp.prettier-vscode
```

Setup needed files (frontend/backend):

`.prettierrc` or something similar file should be setup already in your chosen folder by the previous command. One for frontend and one for backend.

Example `.prettierrc` file (try not to add rules you dont understand):

```json
{
  "singleQuote": true
}
```

Setup `user settings JSON` in vscode:

```json
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
```

Setup package.json (frontend/backend):

```json
"scripts": {
    "format": "prettier --write ."
}
```

Run formatting manually for all the files in the folder (frontend/backend):

```bash
npm run format
```

## Setup deployment

Install vercel GLOBALLY:

```bash
npm i -g vercel
vercel login
```

### Deploy backend (Node/Express)

You will notice that we don't need to "build" the backend.

Environment variables can be used in the backend code, they don't need to have any prefix, can be reached with `process.env.VARIABLE_NAME`.

Make sure you are in the main/master branch.

```bash
cd backend
```

Make sure to have:

```js
...
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "../", "public")));
```

Also have `index.html` file in the public folder.

Create `backend/vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node",
      "config": { "includeFiles": ["./**"] }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

`Package.json` add deploy commands:

```json
"scripts": {
    "deploy": "vercel --prod"
}
```

```bash
cd backend
vercel login
npm run deploy
```

### Deploy frontend (Vite/React)

You will notice that we need to "build" the frontend.

Environment variables can be used in the frontend code, but they need to be prefixed with `VITE_`, can be reached with `import.meta.env.VITE_VARIABLE_NAME`.

Make sure you are in the main/master branch.

```bash
cd frontend
vercel login
vercel
```

Make sure all the `http://localhost:3000/api/...` endpoints are changed to use backend vercel url. Don't place it directly in the code, but in `.env` file instead. The trick is to use `import.meta.env.VITE_SERVER_URL_PROD` in the frontend code instead of `process.env.SERVER_URL`.

> import.meta.env: In Vite, you use import.meta.env to access environment variables instead of process.env.
>
> Prefix with VITE*: Vite requires all environment variables to be prefixed with VITE* to expose them in the client code.

Package.json add deploy commands:

```json
"scripts": {
    "deploy": "npm run build && vercel --prod"
}
```

Create `frontend/vercel.json`:

When deploying to production with `npm run deploy`, the `VITE_PROD` environment variable will always be forced to be `true` (as a consequence backend server will be used instead of localhost). Locally we can set it to `false` by changing the value in `.env` file.

```json
{
  "build": {
    "env": {
      "VITE_PROD": "true"
    }
  }
}
```

Deploy frontend:

```bash
cd frontend
vercel login
npm run deploy
```

### CORS

Add frontend url to backend cors config.

Redeploy backend.

Database server is open to all ips (0.0.0.0/0) - configured on mongo atlas side.

Backend server is open to - ?????????

Frontend server is open to - ?????????
