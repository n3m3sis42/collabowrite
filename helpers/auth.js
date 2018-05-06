module.exports = {
  ensureAuthenticated: function(req, res, next) {
    // unauthenticated user should not be able to browse to protected routes
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  },
  ensureGuest: function(req, res, next) {
    // authenticated user should not be able to browse to the welcome page
    if (req.isAuthenticated()) {
      res.redirect('/dashboard');
    } else {
      return next();
    }
  }
};
