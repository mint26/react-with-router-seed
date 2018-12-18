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

### Responsive Images 

#### Art Direction 
The browser will render the first source if the width is less than 600px and render the second source (default source) if the width is more than 600px.

```
<picture class="footer__logo">
    <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
            media="(max-width:37.5em)">
    <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo">
</picture>
```

#### Density Switching 

Source set defines a series of images that can be switched according to the screen density by stating the density descriptor after the image source path. 
```
    <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo">
```

#### Resolution Switching 
Instead of using density descriptor, you can inform browser the size of the images by its width (eg: 300w = 300px) in the source set. The sizes attribute informs the browser the width of the image required for screens that fulfilled the particular media query condition. Based on the required width for different screens and the indicated width available for the images in the set, the browser will be able to render the best matched images according. To prevent cases when the browser does not support srcset (HTML5), thus src attribute is required as the fallback plan. 

```
    <img srcset="img/logo-green-1x.png 300w, img/logo-green-2x.png 1000w" 
        sizes="(max-width: 900px) 20vw, (max-width:600px) 30vw, 300px"
        src="img/logo-green-1x.png"
        alt="Full logo">
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

### CSS Assets - Scalable Vector Group (SVG)
- Can generate SVG via https://icomoon.io/
    - Download the zip file
    - Copy the svg folder and the symbol-defs.svg file into the img folder 
    - Rename the symbol-defs.svg to sprite.svg
    - The icon can be accessible using the defined name preceding with a '#'

```
<svg class="search__icon">
    <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use>
</svg>
```

### CSS @supports
This css at-rule, **@suppports** lets you specify declarations that depend on a browser's support for one or more specific CSS features.

```
@supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)){
    -webkit-clip-path: circle(50% at 50% 50%); 
    clip-path: circle(50% at 50% 50%); 
}
```
* Can I Use [https://caniuse.com/] allows you to check if this property is supported in the various browsers. 

### CSS3

#### Flexbox 
- Flexbox is a new module in CSS3 that makes it easy to align elements to one another, in different directions and orders
- The main idea behind flexbox is to give the container the ability to expand and to shrink elements to best use all the available space
- Flexbox replaces float layouts, using less and more readable and logical code 
- Flexbox completely changes the way that we build one-dimensional layout

##### Flexbox container 
- flex-direction : Direction of the items on the x axis
- flex-wrap : Indicate to move the items to next row if overflow
- justify-content : Indicate horizontal alignment on the x axis
- align-items : Indicate vertical alignment on the x axis
- align-content : Indicate the spread out of row on the y axis

##### Flexbox item 
- align-self : Simiar to align items but on the item level 
- order 
- flex-grow : Define how much item width can grow
- flex-shrink : Define how much item width can shrink
- flex-basis : Define the base of item width

#### Grid
- CSS Grid layout is a brand new module that brings a two-dimensional grid system to CSS for the first time 
- It replaces float layouts, using less, and more readable and logical CSS and HTML
- It works perfectly togerther with Flexbox, which is best to handle one-dimensional components and layouts
- It completely changes the way that we envision and build two-dimensional layouts. 

##### Grid container 
- grid-template-rows
- grid-template-columns
- grid-template-areas

- grid-row-gap
- grid-column-gap 

- justify-items
- align-items
- justify-content
- align-content

- grid-auto-rows
- grid-auto-columns
- grid-auto-flow

#### Grid item 
- grid-row-start
- grid-row-end
- grid-column-start
- grid-column-end 

- justify-self
- align-self

- order

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

### Testing Using Jest
#### Testing Setup

By default, create-react-app command line included Jest as the tool for testing. However, in order to use Snapshot in Jest, you need to install additional dependency, *react-test-renderer* , to render the snapshot for comparison. If your project is not created via the *create-react-app* command line, you can also use the snapshot testing features by adding the required dependencies. Please refer to [this link](https://jestjs.io/docs/en/tutorial-react) for more setup information. 

Run the following command line to get the tests running. 

```
npm test
```

#### Matchers
The so called 'matchers' in Jest are used to test the output values of the particular functions. Below are the commonly used matchers method and more methods could be found via [this link] (https://jestjs.io/docs/en/expect). 

- Comparing numbers
```
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

For floating point number, use *toBeCloseTo* instead of *toEqual* because the test shouldn't be too reliance to tiny rounding error. 

```
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
```



- Comparing objects
```
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```

- Comparing boolean
```
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```

- Comparing string 
Regular Expression can be used to test string 

```
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

- Comparing Array 

```
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
})
```

- Comparing Exception 

```
function compileAndroidCode() {
  throw new ConfigError('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(ConfigError);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});
```

#### Testing Asynchronous Code 

- Callbacks
**DON'T** do the following as the test will finish once fetchData is being invoked and the test will finish before the callback is being executed. 

```
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});
``` 

To fix the above solution, the *done()* method can be included in the callback function so the test runner will wait till the *done()* method to be called before declaring it to be finished. 

```
test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});
```

- Promises

Note to add the *return* keyword to pass the control back to the outer function at the end. 
```
test('the data is peanut butter', () => {
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch('error'));
});
```

You can also use the *resolve/reject* function. 

```
test('the data is peanut butter', () => {
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return expect(fetchData()).rejects.toMatch('error');
});
```

Alternatively, you can use *async/await* instead of a promise in the testing. 

```
test('the data is peanut butter', async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
```

#### Setup and Teardown 

##### Methods 

- BeforeEach / AfterEach
    - Method invokes before/after each test 
    - Can used to support promises by adding *return* keyword when invoking the function

```
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

- BeforeAll / AfterAll
    - Method invokes before/after all tests

```
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

##### Scoping 
By default, the before and after blocks apply to every test in a file. You can also group tests together using a describe block. When they are inside a describe block, the before and after blocks only apply to the tests within that describe block

The describe blocks will be first executed before the test blocks. 

```
describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
```

#### Mocking
Mock functions make it easy to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.

There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a manual mock to override a module dependency.

##### Mock Function

```
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);
```

- All mock functions have this special .mock property, which is where data about how the function has been called and what the function returned is kept. The .mock property also tracks the value of this for each call, so it is possible to inspect this as well

```
// The function was called exactly once
expect(someMockFunction.mock.calls.length).toBe(1);

// The first arg of the first call to the function was 'first arg'
expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

// The second arg of the first call to the function was 'second arg'
expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

// The return value of the first call to the function was 'return value'
expect(someMockFunction.mock.results[0].value).toBe('return value');

// This function was instantiated exactly twice
expect(someMockFunction.mock.instances.length).toBe(2);

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
expect(someMockFunction.mock.instances[0].name).toEqual('test');
```

- Return values of a function can be mocked 

```
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);
```

- Mocking Modules

Suppose we have a module dependency using axios in the function, we can mock the axios module to test the method without actually hitting the API.

```
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
  const resp = {data: [{name: 'Bob'}]};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(users => expect(users).toEqual(resp.data));
});
```

