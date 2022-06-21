const get = require ('./index');
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;      

test('checks if server responds', () => {
    const app = express();
    expect(app.get('./')).not.toBeNull();
})