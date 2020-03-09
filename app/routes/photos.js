import Route from '@ember/routing/route';

export default Route.extend({
    model()
    {
        return [{id : 1,title : 'Happy Kittens'},
                {id : 2,title : 'Puppy Running'},
                {id : 3,title : 'Mountain Landscape'}];
    }
});
