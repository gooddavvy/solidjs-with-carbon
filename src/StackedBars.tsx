import { StackedBarChart } from "@carbon/charts";
import { BarChartOptions } from "@carbon/charts/interfaces";
import { Component, onMount } from "solid-js";

const data = [
  {
    group: "Dataset 1",
    key: "Qty",
    value: 65000,
  },
  {
    group: "Dataset 1",
    key: "More",
    value: 29123,
  },
  {
    group: "Dataset 1",
    key: "Sold",
    value: 35213,
  },
  {
    group: "Dataset 1",
    key: "Restocking",
    value: 51213,
  },
  {
    group: "Dataset 1",
    key: "Misc",
    value: 16932,
  },
  {
    group: "Dataset 2",
    key: "Qty",
    value: 32432,
  },
  {
    group: "Dataset 2",
    key: "More",
    value: 21312,
  },
  {
    group: "Dataset 2",
    key: "Sold",
    value: 56456,
  },
  {
    group: "Dataset 2",
    key: "Restocking",
    value: 21312,
  },
  {
    group: "Dataset 2",
    key: "Misc",
    value: 34234,
  },
  {
    group: "Dataset 3",
    key: "Qty",
    value: 12312,
  },
  {
    group: "Dataset 3",
    key: "More",
    value: 23232,
  },
  {
    group: "Dataset 3",
    key: "Sold",
    value: 34232,
  },
  {
    group: "Dataset 3",
    key: "Restocking",
    value: 12312,
  },
  {
    group: "Dataset 3",
    key: "Misc",
    value: 34234,
  },
  {
    group: "Dataset 4",
    key: "Qty",
    value: 32423,
  },
  {
    group: "Dataset 4",
    key: "More",
    value: 21313,
  },
  {
    group: "Dataset 4",
    key: "Sold",
    value: 64353,
  },
  {
    group: "Dataset 4",
    key: "Restocking",
    value: 24134,
  },
  {
    group: "Dataset 4",
    key: "Misc",
    value: 32423,
  },
];

const options = {
  title: "Horizontal stacked bar (discrete)",
  axes: {
    left: {
      scaleType: "labels",
    },
    bottom: {
      stacked: true,
    },
  },
  height: "400px",
};

const StackedBars: Component = () => {
  var divRef: HTMLDivElement = (<div />) as HTMLDivElement;
  //   var chartInstance;
  try {
    onMount(() => {
      var chartInstance = new StackedBarChart(divRef, {
        data,
        options: options as BarChartOptions,
      }); // this is the error
      console.log(divRef); // <div> element
      console.log(chartInstance); // object containing `components`, `model`, `services`
    });
  } catch (err) {
    console.error(`
    Warning: An error occurred but was unexpectedly ignored: ${err}
    `);
  }
  return <div ref={divRef}>{/*chartInstance*/}</div>;
};

export default StackedBars;
