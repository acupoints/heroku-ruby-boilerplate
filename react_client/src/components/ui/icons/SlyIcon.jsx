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
        // console.log(this.myRef)
        const { size_x, size_y, rect_width, fill, dataset, direction, shape } = this.props
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
        let rect_gap = 0

        if (direction.toLowerCase()==="vertical") {
            rect_gap = size_x/dataset.length-rect_width

            svg.selectAll('rect')
                .data(dataset)
                .enter()
                .append('rect')
                .attr('x', (d, i) => rect_gap/2 + i * (rect_width + rect_gap))
                .attr('y', d => size_y - d)
                .attr('width', rect_width)
                .attr('height', d => d)
                .attr('fill', fill)
                
        } else if (direction.toLowerCase()==="horizontal") {
            rect_gap = size_y/dataset.length-rect_width
            svg.selectAll('rect')
                .data(dataset)
                .enter()
                .append('rect')
                .attr('x', d => size_x - d)
                .attr('y', (d, i) => rect_gap/2 + i * (rect_width + rect_gap))
                .attr('width', d => d)
                .attr('height', rect_width)
                .attr('fill', fill)
            
        } else if (direction.toLowerCase()==="orthogonal") {
            const sh_line_count = dataset.length
            rect_gap = size_y/dataset.length-rect_width
            if (shape.toLowerCase()==="square") {
                svg.selectAll('rect')
                    .data([...dataset,...dataset,...dataset])
                    .enter()
                    .append('rect')
                    .attr('x', (el, i) => rect_gap/2 + i%sh_line_count * (rect_width + rect_gap))
                    .attr('y', (el, i) => rect_gap/2 + Math.floor(i/sh_line_count) * (rect_width + rect_gap))
                    .attr('width', rect_width)
                    .attr('height', rect_width)
                    .attr('fill', fill)
                    
            } else if (shape.toLowerCase()==="round") {
                svg.selectAll('circle')
                    .data([...dataset,...dataset,...dataset])
                    .enter()
                    .append('circle')
                    .attr('cx', (el, i) => rect_width/2 + rect_gap/2 + i%sh_line_count * (rect_width + rect_gap))
                    .attr('cy', (el, i) => rect_width/2 + rect_gap/2 + Math.floor(i/sh_line_count) * (rect_width + rect_gap))
                    .attr('r', rect_width/2)
                    .attr('fill', fill)
                
            }
                
        } else if (direction.toLowerCase()==="loading") {
            rect_gap = size_x/dataset.length-rect_width

            svg.selectAll('rect')
                .data(dataset)
                .enter()
                .append('rect')
                .attr('x', (el, i) => rect_gap/2 + i * (rect_width + rect_gap))
                .attr('y', el => size_y/2 - size_y/4)
                .attr('width', rect_width)
                .attr('height', el => size_y/2)
                .attr('fill', fill)
                
        }

    }
    
    render () {
        const { funcHandle } = this.props
        return (
            <div className="sly-icon-container">
                {/* <h1>[SlyIcon]</h1> */}
                <div ref={this.myRef} onClick={funcHandle} className="sly-icon"></div>
            </div>
        )
    }
}

//
SlyIcon.propTypes = {
    size_x: PropTypes.number,
    size_y: PropTypes.number,
    rect_width: PropTypes.number,
    fill: PropTypes.string.isRequired,
    dataset: PropTypes.array.isRequired,
    direction: PropTypes.string.isRequired,
    shape: PropTypes.string.isRequired,
    funcHandle: PropTypes.func.isRequired,
}

SlyIcon.defaultProps = {
    size_x: 75/4,
    size_y: 75/6,
    rect_width: 10/4,
    fill: "white",
    dataset: [35/4, 20/4, 30/4, 15/4, 50/4],
    direction: "vertical", // horizontal/vertical/orthogonal/loading
    shape: "square", // square/round/pulse/avatar
    funcHandle: f => f,
}

export default SlyIcon
