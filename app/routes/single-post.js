import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    select(post) {
      alert(post.title);
    }
  },
    model()
    {
        return {title:'templet-title',
                totalDue:250}
    }
});
