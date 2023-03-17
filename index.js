function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      // named function body
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // anonymous function body
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  