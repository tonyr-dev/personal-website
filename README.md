Personal Website
============

Description
-----------

This personal project utilizes a tech stack including React, Vite, TypeScript, ESLint, Prettier, and Husky. The main purpose of this project is to build highly efficient, scalable, and maintainable application to showcase my portfoilo.

No one should be contributing to this project besides myself but in the vein of having a good README I've decided to include the following as if someone would.


Getting Started
---------------

### Prerequisites

To run this project, you need to have the following installed:

-   Node.js (v14 or above)
-   npm (v6 or above)

### Installation

1.  Clone the repo

    `git clone https://github.com/your_username_/Project-Name.git`

2.  Install NPM packages

    `npm install`

Usage
-----

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode. Open [http://localhost:5000](http://localhost:5000) to view it in the browser. The page will reload if you make edits.

### `npm run build`

First, this command runs TypeScript compiler (`tsc`) to check for type errors. Then, it builds the app for production to the `dist` folder using Vite. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run test`

Launches the test runner (Vitest) in the interactive watch mode. Vitest is a fast and scalable test runner with focus on DX and simplicity, ideal for Vite projects.

### `npm run lint`

Runs ESLint to check for linting issues across the TypeScript files in the `src` directory. It checks for both TypeScript-related issues and issues in JSX syntax. `--report-unused-disable-directives` and `--max-warnings 0` options ensure that the linting process is strict, making sure there are no suppressions that aren't suppressing anything and no warnings are allo
d.

### `npm run preview`

This runs a local server for previewing the production-built app. Note that this should be run after `npm run build`.


Tech Stack
----------

-   React: JavaScript library for building user interfaces.
-   Vite: Modern front-end build tool, faster and leaner development.
-   TypeScript: JavaScript superset, adding static types.
-   ESLint: Static code analysis tool for identifying problematic patterns.
-   Prettier: Code formatter for enforcing a consistent code style.
-   Husky: Git hooks to streamline running tasks before commits.

Code Quality
------------

I use ESLint with the Airbnb JavaScript Style Guide for linting, and Prettier for code formatting. Husky is set up to run these checks before each commit.

To check your code, you can run:

`npm run lint`

This will run both ESLint and Prettier on your code.

Contributing
------------

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated (although odd for a personal portfolio site).

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request


Contact
-------

Tony Robertson - <info@tonyrobertson.dev>

Project Link: <https://github.com/tonyr-dev/personal-website>

Please feel free to contact me if you have any questions or concerns.
