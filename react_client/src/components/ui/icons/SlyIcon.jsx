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
        const { size_x, size_y, rect_width, fill, dataset, direction, shape, uuid4 } = this.props
        const svg = d3.select(this.myRef.current)
            .append('svg')
            .attr('width', size_x)
            .attr('height', size_y)
        //
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
                
        } else if (direction.toLowerCase()==="corner") {
            rect_gap = size_x/dataset.length-rect_width
            let internal_dataset = [
                {
                    "cx": size_x/2,
                    "cy": size_y/2,
                    "r": size_x/2,
                    "fill": "#607d8b",
                },
                {
                    "cx": size_x/2,
                    "cy": size_y/2 + size_y/4*3/2,
                    "r": size_y/4*3/2,
                    "fill": "#ffffff",
                },
                {
                    "cx": size_x/2,
                    "cy": size_y/4,
                    "r": size_y/4/4*3,
                    "fill": "#ffffff",
                },
            ]
            if (uuid4.toLowerCase()==="") {
                svg.selectAll('circle')
                    .data(internal_dataset)
                    .enter()
                    .append('circle')
                    .attr('cx', el => el["cx"])
                    .attr('cy', el => el["cy"])
                    .attr('r', el => el["r"])
                    .attr('fill', el => el["fill"])

            } else {
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
                
        } else if (direction.toLowerCase()==="embedded") {
            // You can draw an animation next to the LOGO
            // rect_gap = size_x/dataset.length-rect_width
            // let internal_dataset = [-1]
            // svg.selectAll('text')
            //     .data(internal_dataset)
            //     .enter()
            //     .append('text')
            //     .attr('x', el => rect_gap/2 + 0)
            //     .attr('y', el => size_y/3*2)
            //     .attr('font-size', "1.2rem")
            //     .text('fy1m')
            //     .attr('fill', "#9e9e9e")
            svg.remove()
        }

    }
    
    render () {
        const { funcHandle } = this.props
        const { size_x, size_y, fill, padding, direction } = this.props
        //
        let buttons = null
        if (direction.toLowerCase()==="embedded") {
            buttons = <>
                <svg
                width={size_x}
                height={size_y}
                viewBox="0 0 135.46666 135.46667"
                >
                    <g id="layer1"
                    transform="translate(0,-161.53332)"
                    >
                        <g id="g1426"
                        transform="translate(477.59091,19.774384)"
                        >
                            <path
                            d="m -409.85763,152.95579 c -25.7999,0 -46.7167,21.31365 -46.7167,47.60587 0,26.29224 20.9168,47.60564 46.7167,47.60564 0.28048,0 0.55642,-0.005 0.83692,-0.009 l 0.48269,0.65477 4.54287,3.07108 7.62834,4.74301 1.72895,1.21054 2.17953,2.69887 3.36108,2.32694 4.90621,1.30473 6.81443,1.86054 -0.092,-1.58276 -4.00026,-1.11613 -4.81418,-2.0489 -3.4488,-2.79331 -1.82075,-3.34885 -1.177,-5.48741 0.6344,-4.74779 0.0415,-0.31564 c 16.96696,-7.13592 28.91286,-24.15844 28.91286,-44.02598 0,-26.29222 -20.9168,-47.60587 -46.71671,-47.60587 z m 2.89733,25.45687 2.83238,0.13638 1.84374,1.28126 1.844,-0.54165 5.07614,0.33913 1.18178,2.63297 -1.71049,22.74074 -1.84375,3.30667 -1.44855,-2.02541 -0.98838,-4.52179 -1.38408,-12.14749 -0.13349,-4.04604 -0.85512,-1.01283 -0.33122,3.03801 0.7909,9.78317 0.59317,8.43577 -0.32643,4.65385 -0.33098,3.77762 -0.33122,1.75676 -1.97245,0.0659 -1.77953,-0.33913 -1.71504,1.01283 -1.77953,1.82266 -2.10594,-0.1366 -2.37246,-0.87598 1.84375,-4.04605 2.37271,-4.05084 -0.12872,-7.89413 0.65742,-13.02371 0.26219,-8.36531 z m 28.41627,2.82136 h 2.90141 l 1.18155,2.22794 -1.11732,5.19525 2.04171,0.53685 1.25058,2.02541 -0.26219,8.09689 -0.33098,4.45588 0.26674,3.23573 -0.7909,1.14944 -1.45309,-0.26843 -2.36791,0.33434 -1.58179,-0.33434 -0.19772,-1.01282 -0.7909,-0.94668 0.72643,-3.03801 0.19796,-2.4966 -0.52895,-1.68606 -0.85512,3.57486 -1.18635,5.67122 -0.65765,1.28102 -1.77928,0.47118 -2.3727,-0.26866 -0.13325,-2.8355 1.25513,-2.9014 0.59318,-2.90139 1.11732,-4.38517 1.44854,-7.28683 1.12188,-5.19523 z m -59.24646,0.18838 1.5818,0.94189 1.97701,3.91423 1.31504,4.99273 2.9014,4.99296 2.36814,6.34445 4.74516,6.74516 5.00734,12.2841 1.31506,1.88881 0.5287,2.02543 -2.7679,2.42566 -0.65765,1.8888 -2.76791,0.54165 -0.9196,1.2151 -2.50595,0.26868 -1.58179,1.35171 -1.06221,1.18228 -0.35398,0.10353 -0.34489,-0.11288 -0.74033,-2.38803 -3.68774,-7.69185 -1.4483,-7.42319 -2.63465,-8.77035 -1.97725,-9.71727 0.7909,-2.56682 -3.9545,-11.46948 1.3196,-2.29383 z"
                            style={{fill: fill}}
                            />
                        </g>
                    </g>
                </svg>
            </>
        } else {
            buttons = <>
            </>
        }
        return (
            <div className="sly-icon-container">
                {/* <h1>[SlyIcon]</h1> */}
                <div ref={this.myRef} onClick={funcHandle} style={{padding: padding}} className="sly-icon">
                    {buttons}
                </div>
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
    padding: PropTypes.string.isRequired,
    dataset: PropTypes.array.isRequired,
    direction: PropTypes.string.isRequired,
    shape: PropTypes.string.isRequired,
    uuid4: PropTypes.string.isRequired,
    funcHandle: PropTypes.func.isRequired,
}

SlyIcon.defaultProps = {
    size_x: 75/4,
    size_y: 75/6,
    rect_width: 10/4,
    fill: "white",
    padding: "5px",
    dataset: [35/4, 20/4, 30/4, 15/4, 50/4],
    direction: "vertical", // horizontal/vertical/orthogonal/loading/corner/embedded/diagonal
    shape: "square", // square/round/pulse/avatar
    uuid4: "", // Generate a comic background for empty, a corner image for uuid4, and an initial capital pattern for others
    funcHandle: f => f,
}

export default SlyIcon
