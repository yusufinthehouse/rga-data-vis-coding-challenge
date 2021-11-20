import { useEffect } from "react";
import * as d3 from "d3";

const IntertwinedLineChart = (props) => {
  const data = props.data || [];

  const oddFactor = (key) => {
    return Math.round(key / 2) - 0.2 * (Math.round(key / 2) - 1);
  };

  const evenFactor = (key) => {
    return Math.round(key / 2) + 0.3 * (Math.round(key / 2) - 1);
  };

  useEffect(() => {
    document.getElementById("intertwined-chart").innerHTML = "";

    const svg = d3
      .select("#intertwined-chart")
      .append("svg")
      .attr("height", "auto")
      .attr(
        "viewBox",
        `0 0 1100 ${300 + 50 * (data.length > 5 ? data.length - 5 : 0)}`
      )
      .attr("preserveAspectRatio", "none")
      .attr("fill", "none")
      .attr("xmlns", "http://www.w3.org/2000/svg");

    svg
      .append("path")
      .attr("d", "M430 101.761L134.49 101.761L64.7167 101.761")
      .attr("stroke", "white")
      .attr("stroke-width", 32)
      .attr("stroke-linecap", "square");

    svg
      .append("path")
      .attr("d", "M430 61.4551L134.491 61.4549L64.7172 61.4549")
      .attr("stroke", "white")
      .attr("stroke-width", 32)
      .attr("stroke-linecap", "square");

    svg
      .append("path")
      .attr("d", "M430 21.8555L134.49 21.8554L64.7169 21.8554")
      .attr("stroke", "white")
      .attr("stroke-width", 32)
      .attr("stroke-linecap", "square");

    // draw line
    data.forEach((dataItem, key) => {
      if (key === 0) {
        svg
          .append("path")
          .attr(
            "d",
            `M${
              60 + 500 * dataItem.percentageInDecimal
            } 22L35.7214 21.8318C30.2485 21.8318 24.8499 23.0993 19.9489 25.5351L-17.2002 43.9976`
          )
          .attr("stroke", "url(#paint0_linear_2448_53249)")
          .attr("stroke-width", 32)
          .attr("stroke-linecap", "square");
      } else if (key % 2 === 1) {
        svg
          .append("path")
          .attr(
            "d",
            `M${
              60 +
              50 * (key > 2 ? key - 2 : 0) +
              500 * dataItem.percentageInDecimal
            } 
            ${62 * evenFactor(key)}L${43 * evenFactor(key)}
            ${62 * evenFactor(key)}C${37 * evenFactor(key)}
            ${62 * evenFactor(key)} 
            ${31 * evenFactor(key)} 
            ${64 * evenFactor(key)} 
            ${26 * evenFactor(key)} 
            ${66 * evenFactor(key)}L${-55 * evenFactor(key)} 
            ${111 * evenFactor(key)}`
          )
          .attr("stroke", "url(#paint2_linear_2448_53249)")
          .attr("stroke-width", 32)
          .attr("stroke-linecap", "square");
      } else {
        svg
          .append("path")
          .attr(
            "d",
            `M${
              60 +
              50 * (key > 2 ? key - 2 : 0) +
              500 * dataItem.percentageInDecimal
            } 
            ${102 * oddFactor(key)}L${48 * oddFactor(key)} 
            ${102 * oddFactor(key)}C${35 * oddFactor(key)} 
            ${102 * oddFactor(key)} ${23 * oddFactor(key)} 
            ${95 * oddFactor(key)} 
            ${16 * oddFactor(key)} 
            ${85 * oddFactor(key)}L${-37 * oddFactor(key)} 
            ${23 * oddFactor(key)}`
          )
          .attr("stroke", "url(#paint1_linear_2448_53249)")
          .attr("stroke-width", 32)
          .attr("stroke-linecap", "square");
      }
    });

    // draw percentage
    data.forEach((dataItem, key) => {
      if (key === 0) {
        svg
          .append("text")
          .attr("text-anchor", "middle")
          .attr("x", 1000)
          .attr("y", 23)
          .attr("font-size", 10)
          .attr("fill", "#7C8295")
          .text(dataItem.label);

        svg
          .append("circle")
          .attr("cx", 60 + 500 * dataItem.percentageInDecimal)
          .attr("cy", 22)
          .attr("r", 11)
          .attr("fill", "white");

        svg
          .append("text")
          .attr("text-anchor", "middle")
          .attr("x", 60 + 500 * dataItem.percentageInDecimal)
          .attr("y", 23)
          .attr("font-size", 6)
          .attr("fill", "#1A1A1A")
          .text(`${dataItem.percentageInDecimal * 100}%`);
      } else if (key % 2 === 1) {
        svg
          .append("text")
          .attr("text-anchor", "middle")
          .attr("x", 1000)
          .attr("y", 63 * evenFactor(key))
          .attr("font-size", 10)
          .attr("fill", "#7C8295")
          .text(dataItem.label);

        svg
          .append("circle")
          .attr(
            "cx",
            60 +
              50 * (key > 2 ? key - 2 : 0) +
              500 * dataItem.percentageInDecimal
          )
          .attr("cy", 62 * evenFactor(key))
          .attr("r", 11)
          .attr("fill", "white");

        svg
          .append("text")
          .attr("text-anchor", "middle")
          .attr(
            "x",
            60 +
              50 * (key > 2 ? key - 2 : 0) +
              500 * dataItem.percentageInDecimal
          )
          .attr("y", 63 * evenFactor(key))
          .attr("font-size", 6)
          .attr("fill", "#1A1A1A")
          .text(`${dataItem.percentageInDecimal * 100}%`);
      } else {
        svg
          .append("text")
          .attr("text-anchor", "middle")
          .attr("x", 1000)
          .attr("y", 103 * oddFactor(key))
          .attr("font-size", 10)
          .attr("fill", "#7C8295")
          .text(dataItem.label);

        svg
          .append("circle")
          .attr(
            "cx",
            60 +
              50 * (key > 2 ? key - 2 : 0) +
              500 * dataItem.percentageInDecimal
          )
          .attr("cy", 102 * oddFactor(key))
          .attr("r", 11)
          .attr("fill", "white");

        svg
          .append("text")
          .attr("text-anchor", "middle")
          .attr(
            "x",
            60 +
              50 * (key > 2 ? key - 2 : 0) +
              500 * dataItem.percentageInDecimal
          )
          .attr("y", 103 * oddFactor(key))
          .attr("font-size", 6)
          .attr("fill", "#1A1A1A")
          .text(`${dataItem.percentageInDecimal * 100}%`);
      }
    });

    const defs = svg.append("defs");

    const linearGradient0 = defs
      .append("linearGradient")
      .attr("id", "paint0_linear_2448_53249")
      .attr("x1", 201.3)
      .attr("y1", 7.99756)
      .attr("x2", -28.7002)
      .attr("y2", 46.9976)
      .attr("gradientUnits", "userSpaceOnUse");
    linearGradient0
      .append("stop")
      .attr("offset", 0.167782)
      .attr("stop-color", "#22BFA2");
    linearGradient0
      .append("stop")
      .attr("offset", 1)
      .attr("stop-color", "#009277");

    const linearGradient1 = defs
      .append("linearGradient")
      .attr("id", "paint1_linear_2448_53249")
      .attr("x1", 140.723)
      .attr("y1", 19.861)
      .attr("x2", 50.8536)
      .attr("y2", 122.067)
      .attr("gradientUnits", "userSpaceOnUse");
    linearGradient1.append("stop").attr("stop-color", "#27AAE1");
    linearGradient1
      .append("stop")
      .attr("offset", 1)
      .attr("stop-color", "#007EB3");

    const linearGradient2 = defs
      .append("linearGradient")
      .attr("id", "paint2_linear_2448_53249")
      .attr("x1", 197.446)
      .attr("y1", -10.1724)
      .attr("x2", 27.4849)
      .attr("y2", 183.12)
      .attr("gradientUnits", "userSpaceOnUse");
    linearGradient2.append("stop").attr("stop-color", "#4F4BFF");
    linearGradient2
      .append("stop")
      .attr("offset", 1)
      .attr("stop-color", "#0400B2");
  }, [data]);

  return <div id="intertwined-chart"></div>;
};

export default IntertwinedLineChart;
