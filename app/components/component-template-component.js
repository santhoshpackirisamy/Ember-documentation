import Component from '@ember/component';

export default Component.extend({
    init() // init
    {
        this._super(...arguments);
        console.log("init");
    },
    didUpdateAttrs() // during rerender
    {
        this._super(...arguments);
        console.log("didUpdateAttrs");
    },
    didReceiveAttrs() // during init and rerender
    {
        this._super(...arguments);
        console.log("didReceiveAttrs");
        
        // did render
        
        this.items.forEach((item) => {
        if (item.id === this.selectedItemId) {  
            console.log(this.selectedItemId);
            item.isSelected = true;
            console.log("selected");
        }
        });
        
        // did render
    },
    didInsertElement() // init 
    {
        this._super(...arguments); 
        let para = this.element.querySelector('p'); para.setAttribute('contenteditable', true);
        console.log("didInsertElement");
    },
    didRender() // during init and rerender
    {
        console.log("didRender");
        this._super(...arguments);
        const scrollTarget = Math.abs(this.element.getBoundingClientRect().top - this.element.querySelector('.selected-item').getBoundingClientRect().top);
        this.element.querySelector('.item-list').scrollTop = scrollTarget;
    },
    willDestroyElement() // during destroy
    {       
        this._super(...arguments);   
        console.log("willDestroyElement");
    }   
});
