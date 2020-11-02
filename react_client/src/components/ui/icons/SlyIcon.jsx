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
        const { size_x, size_y, fill, padding, direction, pattern } = this.props
        //
        let buttons = null
        if (direction.toLowerCase()==="embedded") {
            if (pattern.toLowerCase()==="logo") {
                buttons = <>
                    <svg
                    width={size_x}
                    height={size_y}
                    viewBox="0 0 135.46666 135.46667"
                    >
                        <g
                        transform="translate(0,-161.53332)"
                        >
                            <g
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
            } else if (pattern.toLowerCase()==="search") {
                buttons = <>
                    <svg
                    width={size_x}
                    height={size_y}
                    viewBox="0 0 135.46666 135.46667"
                    >
                        <g
                        transform="translate(0,-161.53332)"
                        >
                            <g
                            // transform="translate(477.59091,19.774384)"
                            >
                                <path
                                d="m 58.28675,183.5293 c -9.00942,0 -18.019101,3.52055 -24.892445,10.56145 -13.746674,14.08176 -13.746674,36.91599 0,50.99775 11.849299,12.12563 30.015242,13.80579 43.615043,5.05327 l 23.343252,23.91241 c 1.23634,1.26648 3.25608,1.26648 4.49242,0 l 6.61008,-6.77086 c 1.23634,-1.26648 1.23634,-3.33568 0,-4.60217 L 88.111844,238.76874 c 8.544234,-13.9313 6.903767,-32.53984 -4.933325,-44.67799 -6.87332,-7.0409 -15.882381,-10.56145 -24.891769,-10.56145 z m 0,15.16042 c 5.220767,0 10.441567,2.04041 14.426029,6.12198 7.968894,8.16316 7.968894,21.39205 0,29.55521 -7.968893,8.16316 -20.883197,8.16316 -28.85209,0 -7.968906,-8.16316 -7.968906,-21.39205 0,-29.55521 3.984463,-4.08157 9.205261,-6.12198 14.426061,-6.12198 z"
                                style={{fill: fill}}
                                />
                            </g>
                        </g>
                    </svg>
                </>
            } else if (pattern.toLowerCase()==="setting") {
                buttons = <>
                    <svg
                    width={size_x}
                    height={size_y}
                    viewBox="0 0 135.46666 135.46667"
                    >
                        <g
                        transform="translate(0,-161.53332)"
                        >
                            <g
                            // transform="translate(477.59091,19.774384)"
                            >
                                <path
                                d="m 61.875743,183.5293 c -1.77709,0 -3.19867,1.49497 -3.36367,3.31538 -0.26658,3.04267 -0.77447,6.09822 -1.62493,9.10188 -0.16502,0.58513 -0.34288,1.17058 -0.53328,1.74271 -0.79968,0.31207 -1.59959,0.6502 -2.37388,1.01426 -0.53312,-0.27305 -1.06626,-0.55948 -1.57399,-0.84555 -2.67831,-1.50832 -5.14039,-3.30238 -7.43791,-5.26582 -1.3709,-1.15719 -3.41438,-1.19641 -4.67103,0.10384 -1.38358,1.40431 -2.75484,2.82167 -4.13842,4.23899 -1.37089,1.40431 -2.75418,2.82145 -4.13777,4.22575 -1.25663,1.30029 -1.23172,3.38119 -0.0894,4.7855 1.91672,2.35352 3.65577,4.8756 5.12821,7.61919 0.29195,0.53312 0.57171,1.06626 0.83827,1.61237 -0.35542,0.79318 -0.68579,1.6125 -0.99044,2.44469 -0.5712,0.18202 -1.12982,0.36423 -1.70102,0.53327 -2.93218,0.87118 -5.91528,1.39113 -8.88554,1.67719 -1.77708,0.15603 -3.23664,1.6253 -3.23664,3.44571 v 5.99428 5.99426 c 0,1.82039 1.45956,3.27667 3.23664,3.44571 2.97026,0.27306 5.95336,0.79345 8.88554,1.66463 0.5712,0.16904 1.14251,0.3508 1.70102,0.54584 0.30465,0.81918 0.63502,1.63894 0.99044,2.43212 -0.26656,0.54611 -0.54579,1.09223 -0.82503,1.61236 -1.47244,2.74359 -3.22473,5.26568 -5.14145,7.6192 -1.12973,1.4043 -1.16745,3.49819 0.10192,4.7855 1.37089,1.41729 2.75417,2.82166 4.13776,4.23898 1.37088,1.4043 2.75498,2.82101 4.12585,4.23834 1.26935,1.28727 3.30013,1.26155 4.67104,0.0913 2.2975,-1.96343 4.75959,-3.74492 7.4379,-5.25325 0.52042,-0.29907 1.04087,-0.58507 1.57399,-0.85812 0.77431,0.36407 1.57408,0.7022 2.38646,1.01426 0.17771,0.58513 0.35568,1.15758 0.5207,1.74271 0.85046,3.00365 1.35826,6.05921 1.63751,9.10188 0.15233,1.8204 1.58658,3.31538 3.36366,3.31538 h 5.85135 5.85202 c 1.77707,0 3.19866,-1.49498 3.36366,-3.31538 0.26657,-3.04267 0.77448,-6.09823 1.62494,-9.10188 0.165,-0.58513 0.34286,-1.17057 0.53327,-1.74271 0.79967,-0.31206 1.59892,-0.65019 2.37322,-1.01426 0.53312,0.27305 1.06624,0.55947 1.57399,0.84554 2.6783,1.50833 5.14107,3.3024 7.43857,5.26583 1.37089,1.17019 3.41438,1.19641 4.67103,-0.10383 1.38358,-1.40431 2.75485,-2.82168 4.13843,-4.23899 1.370887,-1.40431 2.754167,-2.82146 4.137747,-4.22576 1.25666,-1.3003 1.23108,-3.3812 0.0887,-4.78549 -1.9167,-2.35352 -3.655757,-4.87562 -5.128207,-7.61921 -0.29193,-0.53312 -0.57104,-1.06624 -0.8376,-1.61236 0.35541,-0.79318 0.68578,-1.61251 0.99043,-2.44469 0.5712,-0.18204 1.12917,-0.36422 1.700367,-0.53326 2.93218,-0.87119 5.91528,-1.39157 8.88554,-1.66463 1.77706,-0.16904 3.23664,-1.63788 3.23664,-3.45829 v -5.99426 -5.99493 c 0,-1.82039 -1.45958,-3.27668 -3.23664,-3.44571 -2.97026,-0.27307 -5.95336,-0.79278 -8.88554,-1.66397 -0.571197,-0.16904 -1.141857,-0.35147 -1.700367,-0.5465 -0.30465,-0.81918 -0.63502,-1.63827 -0.99043,-2.43145 0.26656,-0.54612 0.54579,-1.09225 0.82503,-1.61237 1.47243,-2.74359 3.224077,-5.26568 5.140777,-7.6192 1.14242,-1.4043 1.16813,-3.4982 -0.10128,-4.78549 -1.37087,-1.4173 -2.75483,-2.82168 -4.138397,-4.23899 -1.37091,-1.40431 -2.75431,-2.82168 -4.1252,-4.239 -1.26934,-1.28728 -3.30014,-1.26088 -4.67103,-0.0906 -2.29752,1.96343 -4.76027,3.74491 -7.43858,5.25325 -0.52043,0.29906 -1.04085,0.58507 -1.57398,0.85812 -0.7743,-0.36407 -1.57408,-0.7022 -2.38646,-1.01426 -0.17771,-0.58514 -0.35502,-1.15758 -0.52004,-1.74271 -0.85046,-3.00366 -1.35837,-6.05921 -1.62493,-9.10188 -0.16502,-1.82041 -1.59917,-3.31538 -3.37624,-3.31538 h -5.85201 z m 5.86392,29.07418 c 8.97424,0 16.2606,7.46347 16.2606,16.66949 0,9.19302 -7.28636,16.65692 -16.2606,16.65692 -8.98694,0 -16.27251,-7.4639 -16.27251,-16.65692 0,-9.20602 7.28557,-16.66949 16.27251,-16.66949 z"
                                style={{fill: fill}}
                                />
                            </g>
                        </g>
                    </svg>
                </>
            } else if (pattern.toLowerCase()==="new") {
                buttons = <>
                    <svg
                    width={size_x}
                    height={size_y}
                    viewBox="0 0 135.46666 135.46667"
                    >
                        <g
                        transform="translate(0,-161.53332)"
                        >
                            <g
                            // transform="translate(477.59091,19.774384)"
                            >
                                <path
                                d="m 61.570879,183.5293 h 12.32492 c 1.42541,0 2.59167,1.19469 2.59167,2.6401 v 34.12974 h 33.317601 c 1.41103,0 2.57728,1.19468 2.57728,2.65486 v 12.62534 c 0,1.46018 -1.16625,2.65487 -2.57728,2.65487 H 76.487469 v 34.12973 c 0,1.44542 -1.16626,2.6401 -2.59167,2.6401 h -12.32492 c -1.42543,0 -2.59169,-1.19468 -2.59169,-2.6401 v -34.12973 h -33.3176 c -1.41103,0 -2.57728,-1.19469 -2.57728,-2.65487 V 222.954 c 0,-1.46018 1.16625,-2.65486 2.57728,-2.65486 h 33.3176 V 186.1694 c 0,-1.44541 1.16626,-2.6401 2.59169,-2.6401 z"
                                style={{fill: fill}}
                                />
                            </g>
                        </g>
                    </svg>
                </>
            } else if (pattern.toLowerCase()==="remove") {
                buttons = <>
                    <svg
                    width={size_x}
                    height={size_y}
                    viewBox="0 0 135.46666 135.46667"
                    >
                        <g
                        transform="translate(0,-161.53332)"
                        >
                            <g
                            // transform="translate(477.59091,19.774384)"
                            >
                                <path
                                d="m 30.298741,200.22183 9.080895,-9.30224 c 1.051788,-1.07743 2.770194,-1.07743 3.807154,0 l 24.546544,25.14488 24.546553,-25.14488 c 1.05177,-1.07743 2.755365,-1.07743 3.807152,0 l 9.080871,9.30224 c 1.05179,1.07742 1.05179,2.83772 0,3.89996 l -24.546527,25.14488 24.546527,25.14488 c 1.05179,1.07743 1.05179,2.82254 0,3.89995 l -9.080871,9.30225 c -1.051787,1.07743 -2.755382,1.07743 -3.807152,0 L 67.733334,242.46887 43.18679,267.61375 c -1.03696,1.07743 -2.755366,1.07743 -3.807154,0 l -9.080895,-9.30225 c -1.051788,-1.07741 -1.051788,-2.82252 0,-3.89995 L 54.845294,229.26667 30.298741,204.12179 c -1.051788,-1.06224 -1.051788,-2.82254 0,-3.89996 z"
                                style={{fill: fill}}
                                />
                            </g>
                        </g>
                    </svg>
                </>
            } else if (pattern.toLowerCase()==="up") {
                buttons = <>
                    <svg
                    width={size_x}
                    height={size_y}
                    viewBox="0 0 135.46666 135.46667"
                    >
                        <g
                        transform="translate(0,-161.53332)"
                        >
                            <g
                            // transform="translate(477.59091,19.774384)"
                            >
                                <path
                                d="m 21.306344,245.85827 12.43182,12.13598 33.99822,-33.18916 33.992106,33.18916 12.43182,-12.13598 -33.998216,-33.18916 -12.42571,-12.13001 -12.43182,12.13001 z"
                                style={{fill: fill}}
                                />
                            </g>
                        </g>
                    </svg>
                </>
            } else if (pattern.toLowerCase()==="down") {
                buttons = <>
                    <svg
                    width={size_x}
                    height={size_y}
                    viewBox="0 0 135.46666 135.46667"
                    >
                        <g
                        transform="translate(0,-161.53332)"
                        >
                            <g
                            // transform="translate(477.59091,19.774384)"
                            >
                                <path
                                d="m 21.306345,212.67508 12.43182,-12.13598 33.99822,33.18916 33.992105,-33.18916 12.43182,12.13598 -33.998215,33.18916 -12.42571,12.13001 -12.43182,-12.13001 z"
                                style={{fill: fill}}
                                />
                            </g>
                        </g>
                    </svg>
                </>
            } else if (pattern.toLowerCase()==="left") {
                buttons = <>
                    <svg
                    width={size_x}
                    height={size_y}
                    viewBox="0 0 135.46666 135.46667"
                    >
                        <g
                        transform="translate(0,-161.53332)"
                        >
                            <g
                            // transform="translate(477.59091,19.774384)"
                            >
                                <path
                                d="m 84.330885,182.83969 12.130026,12.43182 -33.189167,33.99822 33.189167,33.9921 -12.130026,12.43182 -33.18916,-33.99821 -12.13598,-12.42571 12.13598,-12.43183 z"
                                style={{fill: fill}}
                                />
                            </g>
                        </g>
                    </svg>
                </>
            } else if (pattern.toLowerCase()==="right") {
                buttons = <>
                    <svg
                    width={size_x}
                    height={size_y}
                    viewBox="0 0 135.46666 135.46667"
                    >
                        <g
                        transform="translate(0,-161.53332)"
                        >
                            <g
                            // transform="translate(477.59091,19.774384)"
                            >
                                <path
                                d="m 51.141728,182.83969 -12.13598,12.43182 33.18916,33.99822 -33.18916,33.99211 12.13598,12.43182 33.18917,-33.99822 12.13001,-12.42571 -12.13001,-12.43182 z"
                                style={{fill: fill}}
                                />
                            </g>
                        </g>
                    </svg>
                </>
            }
            
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
    pattern: PropTypes.string.isRequired,
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
    direction: "vertical", // horizontal/vertical/orthogonal/loading/corner/embedded
    shape: "square", // loading,corner:=square/round/pulse/avatar
    pattern: "logo", // embedded:=logo/search/setting/new/remove/up/down/left/right //Ignore the value of rect_width
    uuid4: "", // Generate a comic background for empty, a corner image for uuid4, and an initial capital pattern for others
    funcHandle: f => f,
}

export default SlyIcon
