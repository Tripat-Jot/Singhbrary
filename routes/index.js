const express = require ('express') ; // import Express
const router = express.Router() ;     // router portion of that express variable 

router.get ('/', (req, res) => {
    // res.send("Hello World") ;
    res.render ('index') ;
})

module.exports= router ;  // exporting router