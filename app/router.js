import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo');
  this.route('helper-template', function(){
    this.route('edit', { path: '/:photo_id' });
  });
  this.route('component-template');
  this.route('yield-template');
  this.route('navigation-bar');
});

export default Router;
