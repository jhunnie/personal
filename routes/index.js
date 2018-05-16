var express = require('express');
var app = express();
var router = express.Router();
//var isLoggedIn = require('../middleware/isLoggedIn');

var Project = require('../models/Project');

/* GET home page. */

//display data from database on this page in json format 
router.get('/render-data', function (req, res, next) {
  Project.find(function (err, projects) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('projects', projects);
      res.send(projects);
    }
  });
  //res.send('Nothing at the root route yet...');
});

//functions to get, post, etc.

//Route to Add Projects 
router.post('/post', function (req, res, next) {
  //res.send('Nothing at the root route yet...');
  console.log('post', req.body);
  var project = new Project(req.body);
  project.save()
    .then(project => {
      res.json('Item added successfully');
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

//Route for Editing Projects
router.get('/edit/:id', function (req, res, next) {
  console.log('edit ', req.body);
  var id = req.params.id;
  Project.findById(id, function (err, data) {
    if (err) console.log('error in /edit/:id: ', err);
    res.json(data);
  });
});

//route to update projects 
//requires all data to be resent
router.post('/update/:id', function (req, res, next) {
  console.log('update ', req.body);
  var id = req.params.id;
  Project.findById(id, function (err, data) {
    if (!data) {
      return next(new Error('Could not load document'));
    }
    else {
      data.name = req.body.name;
      data.description = req.body.description;
      data.language = req.body.language;

      data.save()
        .then(data => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});


//route for deleting project
router.get('/delete/:id', function (req, res, next) {
  console.log('delete ', req.body);
  var id = req.params.id;
  Project.findByIdAndRemove(id, function (err, data) {
    if (err) console.log('error in /delete/:id: ', err);
    else res.send('successfully removed');
  });
});

module.exports = router;
