var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sio = require('socket.io');
var debug = require('debug')('pds:server');
var {Product} = require('./model/models.js');

//let session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var server = app.listen(3000);
server.on('listening', onListening);
var io = sio.listen(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
io.sockets.on('connection', function (socket) {
   console.log("hello");
    socket.on('loadMore', function(value){
            socket.emit('isLoading', 'visible');
            //just for test
            //loading more data
            console.log("avant :"+value);
            value = JSON.parse(value);
            console.log(value);
            Product.getProduct(value.start,value.number,function (err, rows) {
                if(err==null) {
                    retour = "";
                    for (row of rows) {
                        retour += Product.getProductView(row.Name, row.Description, row.img);
                    }
                    socket.emit('newObject', retour);
                    socket.emit('isLoading', "hidden");
                }else
                {
                    console.log(rows);
                    socket.emit('newObject', "ERROR !!!");
                    socket.emit('isLoading', "hidden");
                }
            });
        })
    }
);
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
module.exports = {app : app,
    sockets : io.sockets,
    };
