import BarChart from "./BarChart.vue";

// import { fireEvent, userEvent, within } from '@storybook/test';

export default {
  component: BarChart,
  title: "UI/Charts/Bar",
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
  {
    name: "Jul",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
];

const formatter = (tick, i) => {
  return typeof tick === "number"
    ? `$ ${new Intl.NumberFormat("us").format(tick).toString()}`
    : "";
};

export const Default = { 
  args: { 
    class: 'w-full',
    roundedCorners: 4,
    data,
    index: "name",
    categories: ["total", "predicted"],
    "y-formatter": formatter,
  },
};
 