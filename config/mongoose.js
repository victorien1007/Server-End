/**
 * Created by wangyi on 2018/03/08.
 */
var mongoose=require('mongoose');
var config=require('./db_url.js');
var options = { 
  server: { 
    socketOptions: { 
      keepAlive: 300000, connectTimeoutMS: 30000 
    } 
  }, 
  replset: { 
    socketOptions: { 
      keepAlive: 300000, 
      connectTimeoutMS : 30000 
    } 
  } 
};
module.exports=function(){
      var db=mongoose.connect(config.mongodb);

    require('../model/user.js');
    require('../model/holiday.js');
    require('../model/signin.js');
    return db;
}
