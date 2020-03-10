import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {    
                title : 'Abc',
                didrender : 
                [{id : 1,isSelected : false},
                 {id : 2,isSelected : false},
                 {id : 3,isSelected : false},],
                willDestroyElement : true
           };
  },
    actions :
    {
        terminate()
        {
            console.log(this.model.willDestroyElement);
            this.model.willDestroyElement = false;
        }
    }
});
