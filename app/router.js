import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo');
  this.route('template');

  this.route('photos', function() {
    this.route('edit', { path: '/:photo_id'});
  });
  this.route('single-post');
});

export default Router;
