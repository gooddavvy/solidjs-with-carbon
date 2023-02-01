import { BulletChart } from "@carbon/charts";
import { Component, onMount } from "solid-js";

const data = [
  {
    title: "Item E",
    group: "D3",
    ranges: [350, 650, 980],
    marker: 1575,
    value: 400,
  },
  {
    title: "Item D",
    group: "D2",
    ranges: [750, 1200, null],
    marker: 1725,
    value: 2100,
  },
  {
    title: "Item C",
    group: "D3",
    ranges: [350, 500, 1005],
    marker: 1340,
    value: 550,
  },
  {
    title: "Item B",
    group: "D1",
    ranges: [300, 895, 1600],
    marker: 1455,
    value: 1000,
  },
  {
    title: "Item A",
    group: "D1",
    ranges: [800, 1000, 1400],
    marker: 1275,
    value: 250,
  },
];

const options = {
  title: "Basic bullet",
  axes: {
    bottom: {
      mapsTo: "value",
      extendLinearDomainBy: "marker",
    },
    left: {
      scaleType: "labels",
      mapsTo: "title",
    },
    right: {
      scaleType: "labels-ratio",
      mapsTo: "title",
    },
  },
  height: "400px",
};

const Bullet: Component = () => {
  var divRef: HTMLDivElement = (<div />) as HTMLDivElement;
  //   var chartInstance;
  onMount(() => {
    var chartInstance = new BulletChart(divRef, { data, options }); // this is the error
    console.log(divRef); // <div> element
    console.log(chartInstance); // object containing `components`, `model`, `services`
  });
  return <div ref={divRef} />;
};

export default Bullet;
