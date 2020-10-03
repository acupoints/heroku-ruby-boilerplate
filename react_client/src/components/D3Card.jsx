import React, { Component } from 'react'
import * as d3 from 'd3'

class D3Card extends Component {

    constructor () {
        super()
        this.myRef = React.createRef()
        //
        this.dataset = [35, 20, 30, 15, 50]
    }

    componentDidMount () {
        console.log(this.myRef)
        //
        // d3.select(this.myRef.current)
        //     .append('p')
        //     .text('Hello from D3')
        let size = 75
        let svg = d3.select(this.myRef.current)
            .append('svg')
            .attr('width', size)
            .attr('height', size)
        //
        let rect_width = 10
        svg.selectAll('rect')
            .data(this.dataset)
            .enter()
            .append('rect')
            .attr('x', (d, i) => 2.5 + i * (rect_width + 5))
            .attr('y', d => size - d)
            .attr('width', rect_width)
            .attr('height', d => d)
            .attr('fill', 'teal')

    }

    render () {
        return (
            <div ref={this.myRef}></div>
        )
    }

}

export default D3Card
