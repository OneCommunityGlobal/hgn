export function initialize( application ) {
  application.inject('route', 'ToastorService', 'service:toast');
  application.inject('controller', 'ToastorService', 'service:toast');
  application.inject('component', 'ToastorService', 'service:toast');
 
}

export default { 
 name : 'ToastorService',
 initialize };
