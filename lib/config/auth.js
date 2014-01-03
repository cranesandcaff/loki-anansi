'use strict';

exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) { return next(); }
	res.send(401);
}

exports.blog = {
	hasAuthorization: function(req, res, next){
		if (req.blog.creator._id.toString() !== req.user._id.toString()) {
			return res.send(403);
		}
		next();
	}
};

exports.article = {
	hasAuthorization: function(req, res, next){
		if (req.article.user.id != req.user.id){
			return res.send(401, 'User not authorized');
		}
		next();
	}
};