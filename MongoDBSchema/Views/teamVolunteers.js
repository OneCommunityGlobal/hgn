use hgnData

db.teamVolunteers.drop();


db.createView('teamVolunteers', 'userProfiles',

[
{$match : {role : "Volunteer"}},
{$project : {_id:1, teamId:1}},
{$unwind: "$teamId"},
{$group : {_id: "$teamId", volunteers : {$addToSet :  "$_id"}}}

])