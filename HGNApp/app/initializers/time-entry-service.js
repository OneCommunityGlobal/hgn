export function initialize( application ) {
  application.inject('route', 'timeEntryService', 'service:time-entry-service');
   application.inject('controller', 'timeEntryService', 'service:time-entry-service');
   application.inject('component', 'timeEntryService', 'service:time-entry-service');
}

export default { initialize,

  name : "timeEntryService"
};
