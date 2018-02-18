use hgnData

db.teamMembers.drop();


db.createView('teamMembers', 'userProfiles',

[
//{$match : {role : {$in : ["Volunteer", "Manager"]}}},
{$project : {_id:1, teamId:1, role:1, firstName:1, lastName:1}},
{$unwind: "$teamId"},
{$group : {_id: "$teamId", members : {$addToSet : {userid : "$_id", role : "$role" , fullName : {$concat : ["$firstName", " ", "$lastName"]  }}}}}

])

