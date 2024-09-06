import TheTopNavBarDropDown from '../TheTopNavBar/TheTopNavBarDropDown.vue';

import { fireEvent, userEvent, within } from '@storybook/test';

export default {
  component: TheTopNavBarDropDown,
  title: 'Navigation/The Top Nav Bar/Buttons/Dropdown',
  // tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="margin-left: 3em;"><story/></div>' })],
}
 


export const Default = { 
    args: {
      // Shaping the stories through args composition.
      // The data was inherited from the Default story in Task.stories.js.
   
    },
  };
   
   

export const Open  = {
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
   
      // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
      await userEvent.click(canvas.getByRole('button'));
    },
  };
   
  
