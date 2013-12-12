var union = require('union');
var ecstatic = require('ecstatic');
var director = require('director');

exports.start = function(options) {
  options = options || {};
  var basePath = options.basePath || __dirname;
  var publicPath = options.publicPath || 'public';
  var port = options.port || process.env.PORT || 3000;
  var name = options.name || 'static server';
  var router = new director.http.Router();

  var server = union.createServer({
    before: [
      ecstatic({
        root       : basePath + '/' + publicPath,
        baseDir    : '/',
        cache      : 3600,
        showDir    : false,
        autoIndex  : true,
        defaultExt : 'html',
        gzip       : false
      }),
      function (req, res) {
        var found = router.dispatch(req, res);
        if (!found) {
          res.emit('next');
        }
      }
    ]
  });

  server.listen(port);

  console.log(name + ' listening on ' + port);
};
