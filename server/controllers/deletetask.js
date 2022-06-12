const tasks=require('../models/Tasks');

module.exports.DeleteTask=async(request,reply)=>{
    try {
        
        await tasks.TasksTable.destroy({where:{id:request.payload.id}});
        reply('deleted');
    } catch (error) {
        
        console.log(error);
        reply('error')
    }
}