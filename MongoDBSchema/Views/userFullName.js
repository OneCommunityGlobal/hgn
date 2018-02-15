use hgnData

db.userfullName.drop()

db.createView('userfullName', 
'userProfiles',
[{$project : {_id:1, fullName : {$concat : ["$firstName", " ", "$lastName"]}}}
]

)

