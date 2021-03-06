const express = require('express');
// express route handles incoming requests and directs them where they need to go
// like a traffic cop
const router = express.Router();


// think of route handlers like PHP functions
router.get("/", (req, res) => {
    // res.json = echo json_encode(...) in PHP
    res.json({message: "you hit the api route"});
});

// this is the /api/users route handler
router.get("/users", (req, res) => {
     // run a SQL query here
     // res.json(query result here)
     
     // echo a message ->just like PHP
     res.json({message: "all users route"});
})

module.exports = router;