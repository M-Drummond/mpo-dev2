import TheTopNavBarMenuLink from '../TheTopNavBar/TheTopNavBarMenuLink.vue';

export default {
  component: TheTopNavBarMenuLink,
  title: 'Navigation/The Top Nav Bar/Menu Link',
  // tags: ['autodocs'],
  // decorators: [() => ({ template: '<div style="min-height: 3em;"><story/></div>' })],
}

export const Default = { 
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.js.
    linkText: "Default",
    linkDestination: "/#"
  },
};