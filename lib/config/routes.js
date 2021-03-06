'use strict';
var path = require('path'),
	auth = require('../config/auth');

module.exports = function(app) {
	var users = require('../controllers/users');
	app.post('/auth/users', users.create);
	app.get('/auth/users/:userId', users.show);

	app.get('/auth/check_username/:username', users.exists);

	var session = require('../controllers/session');
	app.get('/auth/session', auth.ensureAuthenticated, session.session);
	app.post('/auth/session', session.login);
	app.del('/auth/session', session.logout);

	var articles = require('../controllers/articles');
	app.get('/api/articles', articles.all);
	app.post('/api/articles', auth.ensureAuthenticated, articles.create);
	app.get('/api/articles/:articleId', auth.ensureAuthenticated);
	app.put('/api/articles/:articleId', auth.ensureAuthenticated, auth.article.hasAuthorization, articles.update);
	app.del('/api/articles/:articleId', auth.ensureAuthenticated, auth.article.hasAuthorization, articles.destroy);

	app.param('articleId', articles.article);

	app.get('/partials/*', function(req, res){
		var requestedView = path.join('./', req.url);
		res.render(requestedView);
	});

	app.get('/*', function(req, res){
		if(req.user){
			res.cookie('user', JSON.stringify(req.user.user_info));
		}

		res.render('index.html');
	});
}