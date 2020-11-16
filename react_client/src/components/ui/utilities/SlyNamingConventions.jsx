import React, { Component } from 'react'
import './SlyNamingConventions.css'
//
import SlyFoldedFilters from '../specials/SlyFoldedFilters'

//
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-sh'

//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setContainerDimensionsAction } from '../../../flux-redux/actions'


class SlyNamingConventions extends Component {

    // constructor () {
    //     super()
    // }

    onChange = (newContents) => {
        console.log("-->", newContents)
    }

    render () {
        // const {containers } = this.props
        // const { headerHeight, bannerHeight } = containers

        // const styleCompLeft = {
        //     // paddingTop: headerHeight,
        //     // paddingBottom: bannerHeight,
        //     top: headerHeight,
        //     // height: `calc(100vh - ${headerHeight + bannerHeight + 48}px)`,
        //     height: `calc(100vh - ${headerHeight + bannerHeight}px)`,
        // }
        
        return (
            <div className="sly-naming-conventions-container">
                {/* <h1>[SlyNamingConventions]</h1> */}
                <div className="sly-naming-conventions-panel">
                    <SlyFoldedFilters text="Multiple languages" />
                    <SlyFoldedFilters text="Multiple themes" />
                    <SlyFoldedFilters text="Multiple editors" />
                    <SlyFoldedFilters text="Multiple boilerplates" />
                </div>
                <div className="sly-naming-conventions-wrapper">
                    {/* <h1>[SlyNamingConventions]</h1> */}
                    <AceEditor 
                        // mode="python"
                        mode="sh"
                        theme="dracula"
                        fontSize={16}
                        height="100%"
                        width="100%"
                        onChange={this.onChange}
                        value={'^SLY_$\nhello world\n=,;>\n\nHELLO_WORLD\n---\n'}
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{ $blockScrolling: true }}
                        // onChange={this.onCodeChange}
                        // onBlur={this.onCodeBlur}
                        // onLoad={this.complete}
                        // showGutter = {true}
                        // placeholder={''}
                        // enableBasicAutocompletion={true}
                        // enableLiveAutocompletion={true}
                        // enableSnippets={true}
                        // style={{ width: "100%", height: "100%", fontSize: "18px" }}
                    />
                </div>
            </div>
        )
    }
}

// export default SlyNamingConventions
//
const mapStateToProps = state => {
    // return state.settingsReducer
    return {
        ...state.astronautsReducer,
        ...state.settingsReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setContainerDimensions: (container) => {
            dispatch(setContainerDimensionsAction(container))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyNamingConventions))