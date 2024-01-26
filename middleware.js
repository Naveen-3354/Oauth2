module.exports.passportMiddleware = (request, response, next) => {
    console.log(request.session);
    if (request.session && !request.session.regenerate) {
      request.session.regenerate = cb => {
        console.log(cb);
        cb();
      };
    }
  
    if (request.session && !request.session.save) {
      request.session.save = cb => {
        cb();
      };
    }
  
    next();
  };