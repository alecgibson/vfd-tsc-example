import Foo from './foo.vue';

// Dummy code just to demonstrate types. Normally would access through eg `@vue/test-utils` mount()
const component: Foo = null;

component.message;
// @ts-expect-error
component.badProp;
