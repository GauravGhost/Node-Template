
/**
 * Return a function that catches and forwards any error a function throws to the next middleware 
 * 
 * @param {Function} fn - input function that catchAsync wraps around
 */

function AsyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  }
}

module.exports = AsyncHandler;