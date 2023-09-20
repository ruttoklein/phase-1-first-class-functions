function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback();
    }
  }
  
  function returnsANamedFunction() {

    function namedFunction() {
      console.log("Named function is called.");
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Anonymous function is called.");
    }
  }
  

  