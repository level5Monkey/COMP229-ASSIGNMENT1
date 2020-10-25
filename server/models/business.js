/*businesscontacts.js; Jiaxing Li; 301135949; Oct 25, 2020*/
let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    email: String,
    number: Number
},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel);