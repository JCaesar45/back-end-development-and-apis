function inputCleaner(req, res, next) {
  if (req.body && typeof req.body.username === 'string') {
    req.body.username = req.body.username.toLowerCase();
  }
  if (req.body && typeof req.body.comment === 'string') {
    req.body.comment = req.body.comment.replace(/<[^>]*>/g, '');
  }
  next();
}

function inputValidator(req, res, next) {
  const username = req.body && req.body.username;
  if (typeof username === 'string' && username.length >= 3) {
    next();
  } else {
    res.redirect('/form?error=Username must be at least 3 characters.');
  }
}

module.exports = { inputCleaner, inputValidator };
