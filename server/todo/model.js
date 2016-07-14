var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
	post: { type: String, required: true, unique: true, dropDups: true },
	completed: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: Date
})

PostSchema.pre('save', function (done)
{
	this.updatedAt = new Date()
	done()
})

module.exports = mongoose.model('Todo', PostSchema)
