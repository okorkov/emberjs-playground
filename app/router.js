import EmberRouter from '@ember/routing/router';
import config from 'playground/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('movies');
  this.route('characters');
  this.route('movie-details', {path: '/:movie_id/movie-details'});
  this.route('character-details', {path: '/:character_id/character-details'});
});
