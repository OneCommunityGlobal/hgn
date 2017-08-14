# Hgnapp



![alt tag](http://s16.postimg.org/rl1gcls6d/Screen_Shot_2016_04_12_at_3_37_18_AM.png)
![alt tag](http://s23.postimg.org/b38xc18sb/Screen_Shot_2016_04_13_at_6_03_32_AM.png)
![alt tag](http://s24.postimg.org/o88ig4th1/Screen_Shot_2016_04_13_at_6_07_34_AM.png)


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [MongoDB](https://www.mongodb.com/download-center#community)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development
* start and connect to MongoDB.
   *change to the directory where MongoDB is installed
    - mongod 
    - mongo
* start node server
   *change to the directory ../hgn/HGNREST
    - noder server.js
* change into the application directory
* `ember server`
           **NOTE:** If an error like `app.import is not a function` occurs,
           then add the below lines to ember-fetch/index.js [of ember-simple-auth] in the included hook.
           
          ```
          this._super.included.apply(this, arguments);
           if (typeof app.import !== 'function' && app.app) {
              app = app.app;
              }
           ```
           
            this may look like:
        
        ```
        included: function(app) {
            this._super.included.apply(this, arguments);
              if (typeof app.import !== 'function' && app.app) {
              app = app.app;
              }
             app.import('vendor/ember-fetch.js', {
             ...
          ```
          
             then do `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

