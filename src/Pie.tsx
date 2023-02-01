import { Greeting } from "./module";
import { PieChart } from "@carbon/charts";
import { PieChartOptions } from "@carbon/charts/interfaces";
import { Component, onMount } from "solid-js";

const data = [
  {
    group: "2V2N 9KYPM version 1",
    value: 20000,
  },
  {
    group: "L22I P66EP L22I P66EP L22I P66EP",
    value: 65000,
  },
  {
    group: "JQAI 2M4L1",
    value: 75000,
  },
  {
    group: "J9DZ F37AP",
    value: 1200,
  },
  {
    group: "YEL48 Q6XK YEL48",
    value: 10000,
  },
  {
    group: "Misc",
    value: 25000,
  },
];

const options = {
  title: "Pie",
  resizable: true,
  height: "400px",
} as PieChartOptions;
/* var myGreeting: Greeting: {
  message: "g"
}; */

const Pie: Component = () => {
  onMount(() => {
    let newChartInstance = new PieChart(divRef, { data, options });
    console.log(divRef); // <div> element
  });
  var divRef: HTMLDivElement = (<div />) as HTMLDivElement;
  return <div ref={divRef} />;
};

export default Pie;
