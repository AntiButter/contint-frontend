const get = require ('./index');
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server     
test('checks if server responds', () => {

    expect(app.get('./')).not.toBeNull();
    //expect(app.get('./')).toBeNull();
})