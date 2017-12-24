export function initialize( application ) {
  application.inject('route', 'datastore', 'service:datastore');
}

export default {
  name: 'datastore',
  initialize
};
