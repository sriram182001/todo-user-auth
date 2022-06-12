const tasks=require('../models/Tasks');

module.exports.GetTask=async(request,reply)=>{
    try {
        const r=await tasks.TasksTable.findAll({attributes:['task','id'],where:{uid:request.auth.credentials.uid}});
        const rstr=JSON.stringify(r);
        const results=JSON.parse(rstr);
        console.log(results);
        reply(results);
    } catch (error) {
        console.log(error);
        reply('error');
    }
}