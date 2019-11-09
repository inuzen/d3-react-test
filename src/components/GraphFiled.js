import React, {useRef, useEffect, useContext, useState} from 'react';
import GlobalContext from '../context/global/globalContext';
import {
  select,
  line,
  scaleTime,
  scaleLinear,
  max,
  min
} from 'd3';

//custom hook for resizing the svg. For some reason Observer doesnt work
//with svg elements correctly so we have to use it on wrapper div
const useResizeObs = ref => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const target = ref.current;
    const resObs = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setDimensions(entry.contentRect)
      });

    });
    resObs.observe(target);
    return() => resObs.unobserve(target);
  }, [ref]);

  return dimensions;
}

const GraphField = () => {
  const globalContext = useContext(GlobalContext);
  const {data} = globalContext;
  const svgRef = useRef();
  const contRef = useRef();
  const dimensions = useResizeObs(contRef);

  const buildChart = (data, dimensions) => {
    const svg = select(svgRef.current);

    const xScale = scaleTime().domain([
      min(data, (d) => new Date(d.timeStamp)),
      max(data, (d) => new Date(d.timeStamp))
    ]).range([0, dimensions.width]);

    const yScale = scaleLinear().domain([
      min(data, (d) => d.dataPoint),
      max(data, (d) => d.dataPoint)
    ]).range([dimensions.height, 0]);

    /* keeping this section commented out in case i will need to show axis in the future
    const xAxis = axisBottom(xScale)
    .ticks(data.length)
    .tickFormat(index => index + 1);
    const yAxis = axisLeft(yScale);

    svg.select(".x-axis")
      .style("transform", `translateY(${dimensions.height/2}px)`)
      .call(xAxis);


    svg.select(".y-axis")
      // .style("transform", `translateX(${dimensions.width}px)`)
      .call(yAxis);
   */
    const myLine = line()
      .x(value => xScale(new Date(value.timeStamp)))
      .y(value => yScale(value.dataPoint));

    svg.selectAll(".line")
    .data([data])
    .join("path")
    .attr("class", "line")
    .attr("d", myLine)
    .attr("fill", "none")
    .attr("stroke", "blue");

    svg.select(".text-overlay")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(data)
      .join("text")
      .text(d => d.dataPoint)
      .attr("dy", "1em")
      .attr("x", d => xScale(new Date(d.timeStamp)))
      .attr("y", d => yScale(d.dataPoint));

  }

  useEffect(() => {

    if (!dimensions)
      return;

    buildChart(data, dimensions);
    //doing it here because of the dependency
    localStorage.setItem('data', JSON.stringify(data))
    //eslint-disable-next-line
  }, [data, dimensions]);

  return (<div className='graph-container'>
    <div ref={contRef} className='graph-wrapper'>
      <svg className='graph-svg' ref={svgRef}>
        <g className='x-axis'/>
        <g className='y-axis'/>
        <g className='text-overlay'/>
      </svg>
    </div>
  </div>)
}

export default GraphField;
