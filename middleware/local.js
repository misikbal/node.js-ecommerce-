module.exports=(req,res,next)=>{

    // req.locals.token=req.csrfToken();

    // req.locals.isAuthenticated=req.session.isAuthenticated;
    next()
}