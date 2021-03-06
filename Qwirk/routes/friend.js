var express = require('express');
var router = express.Router();
var frie = require('../controllers/friends.js');

/*
router.get(/^\/findFriend\/^(.*)$/, function(req, res){
        frie.getFriendList(req, res);
        return res;
});
*/

router.post('/addFriend', function(req, res){

    frie.AddAFriend(req, res).then(function(result){
        if(result){
            console.log(true);
            return res.json({success : "Updated Successfully", status : 200});
        }else{
            console.log(false);
            return res.json({success : "Failure", status : 404});
        }
    })
});


router.get('/del/:name', function(req, res){

    frie.DelAFriend(req, res).then(function(result){
        if(result){
            console.log(true);
            return res.json({success : "Updated Successfully", status : 200});
        }else{
            console.log(false);
            return res.json({success : "Failure", status : 404});
        }
    })
});


router.get(/^(.*)$/, function(req, res){
    frie.getFriendList(req, res);
    return res;
});

module.exports = router;
