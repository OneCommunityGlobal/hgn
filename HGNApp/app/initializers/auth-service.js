export function initialize( application ) {
    application.inject('route', 'AuthService', 'service:login-service');
    application.inject('controller', 'AuthService', 'service:login-service');
}

export default { 
  name: "AuthService",
  initialize };
