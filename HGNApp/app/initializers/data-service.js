export function initialize( application ) {
   application.inject('route', 'DataService', 'service:datastore-service');
   application.inject('controller', 'DataService', 'service:datastore-service');
}

export default { 
  name : 'DataService',
  initialize };
