const ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/MobileLookFree/mobilelookfree.github.io.git',
}, () => console.log('Published'));
