var express = require('express');
var router = express.Router();

const manageModel = require("../db/manageModel")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/createContact', function(req, res, next) {
  res.render('create')
});

router.post('/createContact',async function(req, res, next) {
  const newContact = await manageModel.create({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    address: req.body.address
  })
  res.redirect('/readall')
});

router.get('/edit/:contactId',async function(req, res, next) {
  const contactId  = req.params.contactId

  const currentContact = await manageModel.findOne({
    _id: contactId
  })

  res.render('edit', { currentContact })
});

router.post('/update/:contactId', async function(req, res, next) {
  const contactId  = req.params.contactId

  const currentContact = await manageModel.findOne({
    _id: contactId
  })

  currentContact.name= req.body.name
  currentContact.email= req.body.email
  currentContact.contact= req.body.contact
  currentContact.address= req.body.address

  await currentContact.save()

  res.redirect('/readall')
});

router.get('/delete/:contactId',async function(req, res, next) {
  const contactId = req.params.contactId
  await manageModel.findOneAndDelete()

  res.redirect('/readall')


});

router.get('/readall',async function(req, res, next) {
  try {
    const contacts = await manageModel.find();
    res.render("contacts", { contacts : contacts });
  } catch (error) {
    res.send(error)
  }

});

module.exports = router;
