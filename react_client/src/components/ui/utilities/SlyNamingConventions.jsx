import React, { Component } from 'react'
import './SlyNamingConventions.css'
//
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-sh'

class SlyNamingConventions extends Component {

    // constructor () {
    //     super()
    // }

    onChange = (newContents) => {
        console.log("-->", newContents)
    }

    render () {
        return (
            <div className="sly-naming-conventions-container">
                {/* <h1>[SlyNamingConventions]</h1> */}
                <div className="sly-naming-conventions-wrapper">
                    <h1>[SlyNamingConventions]</h1>
                    <AceEditor 
                        // mode="python"
                        mode="sh"
                        theme="dracula"
                        fontSize={16}
                        height="480px"
                        width="80vw"
                        onChange={this.onChange}
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={
                            {
                                $blockScrolling: true,
                            }
                        }
                        setOptions={
                            {
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                            }
                        }
                    />
                </div>
            </div>
        )
    }
}

export default SlyNamingConventions
