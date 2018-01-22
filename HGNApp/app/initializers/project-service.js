export function initialize( application ) {
   application.inject('route', 'projectService', 'service:project-service');
   application.inject('controller', 'projectService', 'service:project-service');
}

export default { initialize, name : "projectService" };
