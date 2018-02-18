export function initialize( application ) {
  application.inject('route', 'DashboardService', 'service:dashboard-service');
  application.inject('controller', 'DashboardService', 'service:dashboard-service');
  application.inject('component', 'DashboardService', 'service:dashboard-service');
}

export default { initialize, name : "DashboardService" };