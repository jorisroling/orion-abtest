Package.describe({
  name: 'jorisroling:orion-abtest',
  summary: 'A/B Test in Orion',
  version: '0.0.6',
  git: 'https://github.com/jorisroling/orion-abtest'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['meteor-platform', 'orionjs:base@1.8.0','nicolaslopezj:roles@1.5.3 || 2.0.0', 'manuel:abtest@1.0.7']);

  api.use(['orionjs:bootstrap@1.5.0'], 'client', { weak: true });

  api.addFiles('abtest.js');
  api.addFiles('abtest_server.js', 'server');
  api.addFiles(['abtest_bootstrap.html','abtest_client.js'], 'client');

  api.export('ABTest');
  api.export('ABTestServer');  
});
