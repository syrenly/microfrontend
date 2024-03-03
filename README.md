# Microfrontend

👋 Hi! This is a demo for an Angular 17 application with dynamic microfrontends: based on the package **@angular-architects/module-federation** an **@nx**, the microfrontend applications will be dynamically loaded in two ways through the router and using dynamic rendering of exposed components.

## Structure
**Application Shell**: loads dynamically two microfrontend aplication using both routes and single standalone components;

**mfe1** and **mfe2**: applications that expose routes (with included dynamic rendering of a lazy component) and a standalone component to be loaded by the shell;

**mfe-common**: library that allow to share components and classes;

## Start

-   Install dependencies with npm
-   Run Micro Frontend 1 with the following command `ng serve mfe1 -o`
-   Run Micro Frontend 2 with the following command `ng serve mfe2 -o`
-   Run the shell (the application that hosts the microfrontend applications. Be sure to run the shell last) with the following command `ng serve shell -o`

