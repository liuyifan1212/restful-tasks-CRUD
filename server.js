var express = require('express');
var app = express();
var path = require('path');
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(express.static( __dirname + '/angular/dist' ));
console.log(__dirname + 'Angular/dist');
app.set('view engine', 'html');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task');
mongoose.Promise = global.Promise;

var TaskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,default:' '},
    completed:{type:Boolean,default:false}
},{timestamps:true});

var Task = mongoose.model('Task',TaskSchema);








app.post('/tasks',(req,res)=>{
    console.log(req.body);
    task = new Task(req.body);
    task.save(function(err){
        if(err){
            console.log(err);
            res.json({message:'ATTENTION! Something is wrong!',error:err});
        }            
        else{
            res.json({message:'You added a task!'});
        } 
    })
})

app.get('/tasks',(req,res)=>{
    Task.find({},(err,results)=>{
        if(err){
            console.log(err);
            res.json({message:'Error',error:err});
        }     
        else{
            res.json({message:'Here are your tasks:',data:results});
        }          
    })
})

app.get('/tasks/:id',(req,res)=>{
    Task.find({_id:req.params.id},(err,results)=>{
        if(err){
            console.log(err);
            res.json({message:'Error',error:err});
        }     
        else{
            res.json({message:'Check this task:',data:results});
        }        
    })
})

app.put('/tasks/:id',(req,res)=>{
    Task.update({_id:req.params.id},{title:req.body.title,description:req.body.description,completed:req.body.completed},(err,results)=>{
        if(err){
            console.log(err);
            res.json({message:'Error',error:err});
        }     
        else{
            res.json({message:'Task updated successfully!'});
        }        
    })
})

app.delete('/tasks/:id',(req,res)=>{
    Task.remove({_id:req.params.id},(err,results)=>{
        if(err){
            console.log(err);
            res.json({message:'Error',error:err});
        }     
        else{
            res.json({message:'You deleted the task'});
        }        
    })
})

app.listen(8000,function(){
    console.log('listening on port 8000');
})
