const tasks=require('../models/Tasks');

module.exports.AddTask=async(request,reply)=>{
    try {
        var currentdate = new Date(); 
        var time = currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()+"."
                +currentdate.getMilliseconds();
        
        await tasks.TasksTable.create({task:request.payload.state.task,uid:request.auth.credentials.uid,created:time});
        reply('added');
    } catch (error) {
        
        console.log(error);
        reply('error')
    }
}