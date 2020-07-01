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
        // var x = d3.scaleLinear().domain([0,100]).range([30,490]);
        var xScale = d3.scale.ordinal()
            .domain(["Tiger Woods","Dustin Johnson","Kevin Streelman","Rory McIlroy"])
            .rangePoints([0, 500]);
        var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");
        var y = d3.scaleLinear().domain([0,100]).range([190,30]);
        // svgCanvas.append("g").attr("transform", "translate(0, 180)").call(d3.axisBottom(xAxis));
        svgCanvas.append("g").attr("class", "x axis").call(xAxis);
        svgCanvas.append("g").attr("transform", "translate(30,-10)").call(d3.axisLeft(y));
        // d3.csv("result.csv").then(function(data) {
        //     alert(data[0]);
        //     data.forEach(function(d) {
        //         alert(d.Player);
        //         // this.data.push(d["Player"]);
        //     })
        // })
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