const express = require('express');
const Router = express.Router();
const fs = require('fs')

Router.get('/menus', (request, response) => {
    fs.readFile(__dirname + '/store/menu.json', (error, data) => {
        if (error)
            throw error;
        else {
            try {
                const result = JSON.parse(data);
                response.send(result);
            } catch (error) {
                throw error;
            }
        }
    });
});

Router.get('/cards', (request, response) => {
    fs.readFile(__dirname + '/store/card.json', (error, data) => {
        if (error)
            throw error;
        else {
            try {
                const result = JSON.parse(data);
                response.send(result);
            } catch (error) {
                throw error;
            }
        }
    });
});

module.exports = Router;
