export function initialize( application ) {
   application.inject('route', 'userProfileService', 'service:user-profile-service');
   application.inject('controller', 'userProfileService', 'service:user-profile-service');
   application.inject('component', 'userProfileService', 'service:user-profile-service');
}

export default { initialize,

  name: "userProfileService"
};
