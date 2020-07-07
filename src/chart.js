import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.data = [];
    }

    componentDidMount() {
        const svgCanvas = d3.select(this.refs.chart)
            .append("svg")
            .attr("width", 500)
            .attr("height", 200)
            .style("border", "1px solid black");
        var names = ["","Tiger Woods","Phil Mickelson","Dustin Johnson","Kevin Streelman","Rory McIlroy"]
        var xScale = d3.scalePoint().domain(names).range([30,460]);
        var y = d3.scaleLinear().domain([0,100]).range([160,30]);
        svgCanvas.append("g")
            .attr("transform", "translate(0, 160)")
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .attr("transform", "rotate(-30)");
        svgCanvas.append("g").attr("transform", "translate(30,0)").call(d3.axisLeft(y));
    }

    render() {
        return (
            <div>
                <cavas style={{width: 200, height: 100, backgroundColor: 'green'}} />
                <div ref="chart" />
            </div>
        )
    }
}