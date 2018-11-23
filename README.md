# React With React Router Template
Created this project as the seed project for any React project using React-Router for the navigation. Its structured to support the basic architecture often required in a new project. 

## Pre-requisite 
Make sure you have install NodeJS and NPM. 

## Project structure 
```bash
├── public 
├── src
|   └── assets                  #folders to store custom fonts needed to compile sass
|   └── components              #where all the react components are located
|   └── pages                   #where all the individual pages/screens are located
|   └── styles                  #where all the sass are stored and compiled into a single css
|       └── sass                #where all the sass are stored and compiled into a single css
|           └── abstracts       #contains sass files that are used by the other sass files
|           └── base            #contains style that can be applied throughout the entire application
|           └── components      #contains style for the particular react components
|           └── layouts         #contains layout such as grid or header for the pages
|           └── pages           #contains style for the particular screen/page
|   └── App.js                  #The first component to be loaded with route defined in it
|   └── index.js                #The entry point of this application
├── .env                        #Contains the default environment variables
├── .env.prod                   #Contains the production environment variables
├── .env.uat                    #Contains the uat environment variables
├── .gitignore                  #Define the files to be ignored by the git repository
├── package.json                #Configuration file defining the dependencies required by this project
├── README.md                   #This is it!

```

## Styling Guide 

### SASS
Sass is a CSS preprocessor, an extension of CSS that adds a lot of power and elegance to the basic language.
Sass provides reusability by having a same set of variables, mixins and operators to be used by different components. 

#### Variables

```
$breakpoint-small: 600px;

```
#### Mixins, Extends

### Specificity 

### BEM 

### Reset and Normalize 

The following is done to reset and normalize the default gap defined by the different browsers thus causing CSS to be inconsistent between different browsers
```
*{
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
}
```

### Live-Reload

Any changes to the sass file will trigger a re-compiled of sass to css file and reload the web application by itself. This is done by the following script by passing *--watch --recursive* to continuously monitor for changes. 

```
"watch-css": "npm run build-css && node-sass src/styles/sass -o src/styles/css --watch --recursive"
```
