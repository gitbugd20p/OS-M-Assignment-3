export default (req, res, next) => {
    console.log("I am authMiddleware");
    next();
};
