import DonutChart from "./DonutChart.vue";

// import { fireEvent, userEvent, within } from '@storybook/test';

export default {
  component: DonutChart,
  title: "UI/Charts/Donut",
  // tags: ['autodocs'],
  // decorators: [() => ({ template: '<div style="min-height: 3em;"><story/></div>' })],
};

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
];
 
export const Default = {
  args: {
    class: "w-full",
    roundedCorners: 4,
    data,
    index: "name",
    category: "total"
  },
};
