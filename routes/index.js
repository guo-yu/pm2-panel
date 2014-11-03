module.exports = routes;

function routes(app) {
  app.get('/', home);
}

function home(req, res, next) {
  res.send('ok');
}