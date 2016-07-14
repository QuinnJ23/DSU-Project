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

<<<<<<< HEAD
module.exports = mongoose.model('Todo', TodoSchema)
=======
module.exports = mongoose.model('Todo', PostSchema)
>>>>>>> b661c66e6f11361c0f74a85e7067d40c94b40804
