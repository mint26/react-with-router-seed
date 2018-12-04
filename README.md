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
## HTML5 
### Media Elements
- HTML5 supports basic multimedia playback with a new set of media element supporting cross browser. 
    - Supports multiple sources for your multimedia so each browser can play the file that it natively supports. 
    - Can also style the media player using CSS to fit your design needs. 
    - Can control which aspects of the media player are available using attributes such as controls.
    - Sources will be attempted in order from top to the bottom
    ```
    <video height="500" controls="controls" poster="screenshot.png">
        <source src="advertisement.webm" type="audio/webm" />
        <source src="advertisement.ogg" type="audio/ogg" />
        <source src="advertisement.mp4" type="audio/mp4" />
    </video>
    ```
    ```
    <audio autoplay="autoplay" controls="controls" loop="loop">
        <source src="popopen.wav" type="audio/wav" />
        <source src="popopen.ogg" type="audio/ogg" />
        <source src="popopen.mp3" type="audio/mpeg" />
    </audio>
    ```
    Or, handling unsupported browsers
    ```
    <audio controls="controls">
        <source src="audio/music.ogg" type="audio/ogg" />
        Sorry, your browser does not support the OGG format.
    </audio>
    ```

## CSS 
A language that controls and allows one to define the look of an HTML document. It permits the separation between the content of the HTML document from the style of the HTML file. 

### CSS style rules 
- inline
- internal style sheet
- external style sheet

### CSS syntax 
- CSS Selectors 
- CSS declaration

```
background-color : black; 
border : 1px solid red; 
```

### Child style selectors
- Indirect Descendant selector 
    - Any p element within the section element's tag will have this style applied
    ```
        section p{
            font-family: monospace; 
        }
    ```
- Direct descendant selector 
    - Only elements that are a direct descendant of the first element applied. 
    ```
        section > p {
            font-weight : bold;
        }
    ```
    - Only article elements that are a direct descendant of the first element applied but p can be any descendant of the article 
    ```
        section > article p {
            font-style : italic; 
        }
    ```

### CSS style inheritance 
- Css style can come from different places. The ordering represents the precedence based on its importance according to the css origins. 
    1. Browser (User Agent)
        - All browsers have a default stylesheet and this style is used when no other CSS styles are specified. 
    2. User Option
        - Browsers such as Apple Safari, Mozilla Firefox, Opera and Windows Internet Explorer allows user to set their own user style sheet in the browsers setting. 
    3. Author Option
        - The CSS that we create for a html page
        
**!important** keyword can be used to override existing CSS declarations and skip to the front of the order of inheritance. 

### CSS Media queries 
- Allows CSS to be applied in specific scenarios based on the properties of the user current browser. 
- There are various types of media including monitors(display screens), screen readers and even printers. 
- Media queries can discern between these media types and apply appropriate css style of each type. 

    - If user is looking at the browser through screen (Desktop, Laptop, Tablet, Phone,etc)
    ```
    @media screen {
        body {
            background-color: red;
        }
    }
    ```
    - If user is attempting to print the page 
    ```
    @media print{
        body {
            background-color: blue; 
        }
    }
    ```
    - If user is using screen reader
    ```
    @media speech { 
        aside {
            display: none; 
        }
    }
    ```
    
- CSS can make the design adaptive to the screen width and height 
    - Media width 
        - If the browser is at least 500 pixels wide
        ```
        @media (min-width: 500px) {
            nav {
                width: 100px;
            }
        }
        ```
        - If the browser is at least 500 pixels tall 
        ```
        @media (min-height: 500px) {
            nav {
                height: 300px; 
            }
        }
        ```
        - If the browser is less than or equal to 500 pixels wide
        ```
        @media (max-width: 500px) {
            nav {
                height: 300px; 
            }
        }
        ```
    - AND and OR expression 
        - Width of browser is between 500 and 1000 pixels wide
        ```
        @media (min-width: 500px) and (max-width: 1000px) {
            header {
                font-size: larger;
            }
        }       
        ```
        - Width of browser is less than 500 pixels wide or more than 1000 pixels wide
        ```
        @media (min-width: 1000px), (max-width: 500px) {
            footer {
                font-weight: bold;
            }
        }
        ```
- Media query can be used with *LINK* elements which allow you to separate your stylesheets for each platform and modularise your CSS
    - Mobile stylesheet is only retrieved if we are using a device screen and the browser width is less than or equal to 1000 pixels. The print stylesheet is only retrieved if we are attempting to print the web page. 
    ```
    <head>
      <link rel="stylesheet" href="base.css" />
      <link rel="stylesheet" href="mobile.css" media="screen and (max-width: 1000px)" />
      <link rel="stylesheet" href="print.css" media="print" />
    </head>
    ```
- Additional keywords
    - All
        - Specifies that a media query should be used with all device types
        ```
        @media all {
            body > article {
                font-family: serif; 
            }
        }
        ```
     - Not 
        - Inverse the logic in a media query 
        ```
        @media not speech {
            body > section.screenReaderOverview {
                display: none; 
            }
        }
        ```
    - Only 
        - Special case keyword used for legacy browser support
        - Using this keyword forces the older browsers to ignore the rest of the media query
        ```
        <head>
          <link rel="stylesheet" href="base.css" />
          <link rel="stylesheet" href="print.css" media="only print" />
        </head>
        ```
        
Note : Media queries don't add any importance or specificity to our selectors.
        
### CSS Fonts 
Able to support multiple fonts including external font files. If unsure which fonts are installed on the user browser, multiple fonts can be specified with higher precedence on the fonts from the left and right until the browser finds a font that exists. 

```
header {
    font-family: "Times New Roman", Times, serif;
}
```

External font files can be linked in CSS to define your own font families using **@font-face** keyword and can use a wide variety of file formats to create fonts. 

|Font Type                           |    Browser Support                     |
|------------------------------------|:--------------------------------------:|
|OpenType Font (OTF)                 |  Most browsers                         |
|TrueType Font (TTF)                 |  Most browsers                         |
|Web Open Font Format (WOFF)         |  Most browsers                         |
|Web Open Font Format 2.0 (WOFF 2.0) |  Not supported in IE                   |
|Embedded OpenType Fonts (EOT)       |  Supported only in IE                  |
|SVG Fonts (SVG)                     |  Supported only in Chrome and Opera    |


### Specificity 

### Pseudo Elements and Pseduo Classes

## SASS

Sass is a CSS preprocessor, an extension of CSS that adds a lot of power and elegance to the basic language.
Sass provides reusability by having a same set of variables, mixins and operators to be used by different components. 

### Variables

```
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

```

### Nesting 
```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

```

### Partials 
A partial is a Sass file named with a leading underscore. You might name it something like *_variables.scss*. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the *@import* directives.

### Import
CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The only drawback is that each time you use **@import** in CSS. It creates another HTTP request. Sass builds on top of the current CSS @import but instead of requiring an HTTP request, Sass will take the file that you want to import and combine it with the file you are importing into so you can serve a single CSS file to the web browser.

### Mixins
A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. 

```
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

.box { @include transform(rotate(30deg)); }
```
### Extends 
Using **@extend** lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY(Don't Repeat Yourself). 

```
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

### Operators 

Sass has a handful standard math operators like +, -, / and %. 

```
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

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
