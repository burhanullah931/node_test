const Book = require('./../Models/Book');
const { ObjectId } = require('mongodb');

exports.index = async (req, res) => {
    const books = await Book.find();
    return res.json(books)
    
}

exports.store = async (req, res) => {
    data = req.body; 
    try {
        const createBook = await Book.create(data);
        
        return res.json('book created successfully');

    } catch (error) {
        return res.json(error.errors)
    } 
}

exports.show = async(req, res) => {
    const _id = new ObjectId(req.params.id);
    const book = await Book.find({_id}) 
    return res.json(book);
}

exports.update = async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const book = await Book.updateOne({_id}, {$set:req.body})
    return res.json('book updated')
}

exports.destroy = async(req, res) => {
    const _id = new ObjectId(req.params.id);
    const book = await Book.deleteOne({_id})
    return res.json('book deleted')
}