import Bar from './bar.vue';

// Dummy code just to demonstrate types. Normally would access through eg `@vue/test-utils` mount()
const component: Bar = null;

component.message;
// @ts-expect-error
component.badProp;
