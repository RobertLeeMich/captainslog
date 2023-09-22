const express = require('express');
const router = express.Router();
const Log = require('../models/logs');

//Index
router.get('/', async (req, res) => {
    const logs = await Log.find({});
    res.render('Index', { logs });
  })
  
  
  //New
  router.get('/new', (req, res) => {
    res.render('New');
  })
  
  //Delete
  router.delete('/:id', async (req, res) => {
    await Log.findByIdAndRemove(req.params.id);
    res.redirect('/');
  })
  
  //Update
  router.put('/:id', async (req, res) => {
    if (req.body.hasOwnProperty('shipIsBroken')) {
        req.body.shipIsBroken = req.body.shipIsBroken === 'on';
      }
    const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`${updatedLog._id}`);
  })
  
  //Create
  router.post('/', async (req, res) => {
    if (req.body.hasOwnProperty('shipIsBroken')) {
        req.body.shipIsBroken = req.body.shipIsBroken === 'on';
      }
    const newLog = await Log.create(req.body);
    res.redirect(`/logs/${newLog._id}`);
  })
  
  
  //Edit
  router.get('/:id/edit', async (req, res) => {
    const log = await Log.findById(req.params.id);
    res.render('Edit', { log });
  })
  
  
  
  //Show
  router.get('/:id', async (req, res) => {
    const log = await Log.findById(req.params.id);
    res.render('Show', { log });
  })

  module.exports = router;