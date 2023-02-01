import { Component, onMount } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import "@carbon/charts/styles.css";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Pie from "./Pie";
import StackedBars from "./StackedBars";
import Bullet from "./Bullet";

// hello world

const Home = function () {
  return <h2>Welcome(to it)!</h2>;
};

const App: Component = () => {
  return (
    <div>
      <h1>
        Using <code>@carbon/charts</code> with Solid.js for the first time!
      </h1>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/pie" component={Pie} />
        <Route path="/stackedBars" component={StackedBars} />
        <Route path="/bullet" component={Bullet} />
      </Routes>
    </div>
  );
};

export default App;
