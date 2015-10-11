/**
 * Register the link
 */
Tracker.autorun(function() {
  orion.links.add({
    index: 9130,
    identifier: 'orion-abtest',
    title: 'A/B Tests',
    routeName: 'jorisroling.orionABtest',
    activeRouteRegex: 'jorisroling.orionABtest',
    permission: 'jorisroling.orionABtest'
  });
});
