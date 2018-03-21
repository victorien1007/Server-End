/**
 * Created by wangyi on 2018/03/09.
 */
// index page
var mongoose=require('mongoose');

var User=mongoose.model('User');

/*login request*/
exports.login=function(req,res){
    var username=req.body.username;
    var password=req.body.password;

    User.findOne({username:username}, function (err, docs) {
        if(err){
            res.json({"status":"error","msg":"error_system"});
        }else if(docs==null){
            res.json({"status":"error","msg":"error_username"});/*user not exist*/
        } else {
            if(docs.password==password){
                res.json({"status":"success","msg":""});
            }
            else{
                res.json({"status":"error","msg":"error_password"});
            }
        }
    })
}
/*register request*/
exports.register=function(req,res){
    var username=req.body.username;
    var password=req.body.password;

    User.findOne({username:username}, function (err, docs) {//check the user if its already register
        if(err){
            res.json({"status":"error","msg":"error_system"});
        }else if(docs==null){
            /*�����û�*/
            var newUser=new User(
                {
                    username:username,
                    password:password
                }
            );
            newUser.save(function(err){
                if(err){
                    res.json({"status":"error","msg":"error_system"});/**/
                }else{
                    res.json({"status":"success","msg":""});/*success*/
                }
            });
        } else {
            res.json({"status":"error","msg":"user_exist"});/*username already register */
        }
    })
}
