use hgnData

db.myManagers.drop();

db.createView('myManagers', 'userProfiles',[

{$project : {_id:1, teamId:1}},
{$unwind: "$teamId"},
{$lookup : {from: "teamManagers", localField: "teamId", foreignField: "_id", as : "managers"}},
{$project : {_id :1, teamId:1 , managers : {$arrayElemAt : ["$managers.managers", 0]} }},
{$unwind : "$managers"},
{$group : {_id: "$_id", managers : {$addToSet :  "$managers"}}}



]);