var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: {
		type: String,
		default: '',
		trim: true
	},
	subtitle: String,
	content: String,
	category: String,
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

articleSchema.statics.load = function(id, cb) {
	this.findOne({
		_id: id
	}).populate('user', 'name username').exec(cb);
};

mongoose.model('Article', articleSchema);