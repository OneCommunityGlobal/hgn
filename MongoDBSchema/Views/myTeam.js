use hgnData

db.myTeam.drop()


db.createView('myTeam', "userProfiles",[

{$project : {_id:1, firstName:1, lastName:1, teamId:1}},
{$unwind : "$teamId"},
{$lookup : {from: "teamMembers", localField: "teamId", foreignField: "_id", as : "teammembers"}},
{$project : {_id:1, lastName:1, firstName:1,teamId:1, members : {$arrayElemAt: ["$teammembers.members", 0]}}},
{$unwind : "$members"},
{$group : {_id: "$_id", myteam: {$addToSet : {_id : "$members.userid", fullName :"$members.fullName", role : "$members.role"}}}}

])