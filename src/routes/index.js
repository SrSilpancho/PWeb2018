const express = require('express');
const router = express.Router();

const model = require('../model/task')();

router.get('/', (req, res) => {
    model.find({}, (err, tasks) => {
        if(err) throw err;
        res.render('map', {
            title: 'River water parameter register'            
        });
    });
});

router.get('/index', (req, res) => {
    model.find({}, (err, tasks) => {
        if(err) throw err;
        res.render('index', {
            title: 'River water parameter register',
            tasks: tasks
        });
    });
});

router.post('/add',(req,res)=>{
    let body = req.body;
   body.status= false;
   console.log(body);
   model.create(body,(err,task)=>{
       if (err) throw err;
       res.redirect('/')
   });

});

module.exports = router;