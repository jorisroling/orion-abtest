/**
 * Init the template name variable
 */
ReactiveTemplates.request('orionABtest', 'jorisroling_orionABtest_bootstrap');

/**
 * Init the role action
 */
Roles.registerAction('jorisroling.orionABtest', true);

/**
 * Register the route
 */
RouterLayer.route('/admin/abtest', {
  layout: 'layout',
  template: 'orionABtest',
  name: 'jorisroling.orionABtest',
  reactiveTemplates: true
});

/**
 * Ensure user is logged in
 */
orion.accounts.addProtectedRoute('jorisroling.orionABtest');
