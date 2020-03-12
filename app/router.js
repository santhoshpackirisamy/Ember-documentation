import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo');
  this.route('posts', function() {
    this.route('index', { path: '/'});  
    this.route('new');
  });
});

export default Router;
