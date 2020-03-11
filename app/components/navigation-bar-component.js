import Component from '@ember/component';

export default Component.extend({
    tagName: 'nav',    // Customizing the Element
    classNameBindings: ['isEnabled:enabled:disabled'], // Customizing the Element's Class
    isEnabled: false,
    
    attributeBindings: ['customHref:href'], // Customizing Attributes
    customHref: 'http://emberjs.com'
});
