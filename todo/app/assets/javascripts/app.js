import React from "react";
import reactDOM from "react-dom";
import taskApp from "./TaskApp";

$(function() {
  ReactDOM.render(
    <TaskApp />,
    document.getElementById('container')
  );
});
