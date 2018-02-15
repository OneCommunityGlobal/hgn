use hgnData

db.userProjects.drop()

db.createView('userProjects', 
'userProfiles',
[
{$unwind : "$teamId"},
{$project : {_id:1 , teamId:1}},
{$lookup : { from: "teams", localField: "teamId", foreignField: "_id", as: "project" } },
{$project : {_id:1, projectId : {$arrayElemAt: ["$project.projectId", 0]}}},
{$lookup : {from: "allProjects", localField: "projectId", foreignField : "_id", as :"projectdata"}},
{$project : {_id:1, projectId :1, projectName :{$arrayElemAt: ["$projectdata.projectName", 0]}, tasks : {$arrayElemAt: ["$projectdata.tasks", 0]}}},
{$group : {_id : "$_id", projects : {$addToSet :{projectId : "$projectId", projectName : "$projectName", tasks : "$tasks"} }}}


])
