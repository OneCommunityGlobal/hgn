use hgnData

db.teamManagers.drop();


db.createView('teamManagers', 'userProfiles',

[
{$match : {role : "Manager"}},
{$project : {_id:1, teamId:1}},
{$unwind: "$teamId"},
{$group : {_id: "$teamId", managers : {$addToSet :  "$_id"}}}



])