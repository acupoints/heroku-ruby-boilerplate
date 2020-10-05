import React, { Component } from 'react'
import './SlyIcon.css'
//
import PropTypes from 'prop-types'
import * as d3 from 'd3'

class SlyIcon extends Component {

    constructor () {
        super()
        //
        this.myRef = React.createRef()
    }

    componentDidMount () {
        console.log(this.myRef)
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
            <div className="sly-icon-container">
                {/* <h1>[SlyIcon]</h1> */}
                <div ref={this.myRef} className="sly-icon"></div>
            </div>
        )
    }
}

//
SlyIcon.propTypes = {
    size_x: PropTypes.number,
    size_y: PropTypes.number,
    rect_cx: PropTypes.number,
    fill: PropTypes.string.isRequired,
    dataset: PropTypes.array.isRequired,
}

SlyIcon.defaultProps = {
    size_x: 75/4,
    size_y: 75/6,
    rect_cx: 10/4,
    fill: "white",
    dataset: [35/4, 20/4, 30/4, 15/4, 50/4],
}

export default SlyIcon
