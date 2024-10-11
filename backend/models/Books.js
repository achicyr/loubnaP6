const mongoose = require  ('mongoose');

const booksSchema = mongoose.Schema({
userId : { type: String, required: true },
title : { type: String, required: true },
author : { type: String, required: true },
imageUrl : { type: String, required: true },
year: { type: Number, required: true },
genre: { type: String, required: true },
ratings : [
{
userId : { default:[],type: String, required: true },
grade : { default:0, type: Number, required: true },
}
],
averageRating : {default:0, type: Number, required: true },
});
module.exports = mongoose.model('Books', booksSchema);

