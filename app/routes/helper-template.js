import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{title : 'Abc',body : 'Def'},
            {title : 'Abc',body : 'Def'},
            {title : 'Abc',body : 'Def'}];
  }
});