db.userProfiles.insert(
{
userName: "SowHa",
password: "hashcode",
isActive: true,
role:"Volunteer",
firstName: "Sowmya",
lastName: "Hari",
phoneNumber : [{"Home":"+14256786766"}, {"Cell":'+1234567888'}],
Bio : "this is some bio which can be really large",
email:"someemail@domain.com",
weeklyComittedHours:"20",
professionalLinks:[{"LinkedinProfile": " www.something.com"}],
personalLinks:[{"facebook":""}],
otherLinks:[{gDoc:"googledocs.com"},{dropBox:""}],
createdDate : new Date(),
lastModifiedDate: new Date(),
teamId: [123,23],
Badges:[{BadgeName:"2x",noOfTimesEarned:"2",lastUpdatedTime:""}]
}
)


