const catchAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
    // catch ( ( (req, res, next) => { proccess } ) => { # express hace su trabajo interno sobre next } )
  };
};

module.exports = { catchAsync };
