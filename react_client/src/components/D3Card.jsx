import React, { Component } from 'react'
//
import PropTypes from 'prop-types'
import * as d3 from 'd3'

class D3Card extends Component {

    constructor () {
        super()
        //
        this.myRef = React.createRef()
    }

    componentDidMount () {
        // console.log(this.myRef)
        const { size_x, size_y, rect_cx, fill, dataset } = this.props
        //
        // d3.select(this.myRef.current)
        //     .append('p')
        //     .text('Hello from D3')

        // const size_x = 75
        // const size_y = 75
        const svg = d3.select(this.myRef.current)
            .append('svg')
            .attr('width', size_x)
            .attr('height', size_y)
        //
        // const rect_cx = 10
        const rect_gap = size_x/dataset.length-rect_cx

        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', (d, i) => rect_gap/2 + i * (rect_cx + rect_gap))
            .attr('y', d => size_y - d)
            .attr('width', rect_cx)
            .attr('height', d => d)
            .attr('fill', fill)

    }

    render () {
        return (
            <div ref={this.myRef} className="sly-d3card"></div>
        )
    }

}

//
D3Card.propTypes = {
    size_x: PropTypes.number,
    size_y: PropTypes.number,
    rect_cx: PropTypes.number,
    fill: PropTypes.string.isRequired,
    dataset: PropTypes.array.isRequired,
}

D3Card.defaultProps = {
    size_x: 75,
    size_y: 55,
    rect_cx: 10,
    fill: "teal",
    dataset: [35, 20, 30, 15, 50],
}

export default D3Card
