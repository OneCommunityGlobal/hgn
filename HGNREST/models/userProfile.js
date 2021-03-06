var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');
var bcrypt = require('bcryptjs');

const SALT_Rounds = 10;

var userProfileSchema = new Schema({
  
  password: {type: String, required: true},
  isActive : {type: Boolean, required: true, default : true},
  role : {type: String, required: true, enum : ['Volunteer', 'Manager', 'Administrator', 'Core Team']},
  firstName: {type: String, required: true, trim: true, minlength: 2},
  lastName: {type: String, required: true, minlength: 2},
  phoneNumber : [{type: String, phoneNumber : String}],
  bio: {type: String},
  email: { type: String, required: true, unique: true, validate: [validate({validator: 'isEmail', message: 'Email address is invalid'})] },
  weeklyComittedHours : {type: Number, default: 10},
  createdDate: {type: Date, required: true},
  lastModifiedDate: {type: Date, required: true, default : Date.now()},
  personalLinks : [{Name :String, Link: {type: String}}],
  adminLinks : [{Name :String, Link: String}],
  teamId : [{type: mongoose.SchemaTypes.ObjectId, ref: 'team'}],
  badgeCollection: [{badgeName: String, quantity: Number, lastModifiedDate: Date}],
  profilePic : { type: String }
  
});

userProfileSchema.pre('save', function(next){

  var user = this;
  if (!user.isModified('password')) return next();

   bcrypt.genSalt(SALT_Rounds)
  .then(function(result){
    return bcrypt.hash(user.password, result);
    })
    .then(function(hash){
      user.password = hash;
      next();
    })
  .catch(function(error){
    next(error);
  });  

});

userProfileSchema.virtual('fullName')
.get(function(){
  let fullname = this.firstName + ' ' + this.lastName;
  return fullname.trim();
}
)

module.exports = mongoose.model('userProfile', userProfileSchema, 'userProfiles');
