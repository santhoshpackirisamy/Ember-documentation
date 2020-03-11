import Route from '@ember/routing/route';

export default Route.extend({
    model()
    {
        return {title:'title',
                author:'author',
                body:'body'}
    }
});
