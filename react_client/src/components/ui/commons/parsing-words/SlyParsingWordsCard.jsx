import React, { Component } from 'react'
import './SlyParsingWordsCard.css'
//
import PropTypes from 'prop-types'

// import {UnControlled as CodeMirror} from 'react-codemirror2'
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css'
// keymap
import 'codemirror/keymap/sublime.js'
import 'codemirror/keymap/emacs.js'
import 'codemirror/keymap/vim.js'
// theme
import 'codemirror/theme/solarized.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/darcula.css'
import 'codemirror/theme/ambiance.css'

// 
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/theme/solarized.css'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/neo.css'
import 'codemirror/theme/blackboard.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/elegant.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/theme/darcula.css'
import 'codemirror/theme/yeti.css'
import 'codemirror/theme/seti.css'
// mode
// 常见风格c，c++，c#，java，scala，object-c等这几个都是位于clike包中的
// text/x-csrc (C), text/x-c++src (C++), 
// text/x-java (Java), text/x-csharp (C#), 
// text/x-objectivec (Objective-C),text/x-scala (Scala), 
import 'codemirror/mode/clike/clike.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/jsx/jsx.js'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/mode/dockerfile/dockerfile.js'
import 'codemirror/mode/cmake/cmake.js'
import 'codemirror/mode/diff/diff.js'
import 'codemirror/mode/swift/swift.js'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/yaml/yaml.js'
import 'codemirror/mode/vb/vb.js'
import 'codemirror/mode/vbscript/vbscript.js'
import 'codemirror/mode/lua/lua.js'
import 'codemirror/mode/go/go.js'
import 'codemirror/mode/sass/sass.js'
import 'codemirror/mode/powershell/powershell.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/ruby/ruby.js'
import 'codemirror/mode/tcl/tcl.js'
import 'codemirror/mode/php/php.js'
import 'codemirror/mode/sql/sql.js'
import 'codemirror/mode/shell/shell.js'

// addon
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
// 
import 'codemirror/addon/hint/html-hint.js'
import 'codemirror/addon/hint/css-hint.js'
import 'codemirror/addon/hint/javascript-hint.js'
import 'codemirror/addon/hint/sql-hint.js'
import 'codemirror/addon/hint/anyword-hint.js'
// 
import 'codemirror/addon/selection/active-line.js'
// 
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldgutter.js'
// 
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
// 
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/matchbrackets'


//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../../flux-redux/actions'
import { setSelectedItemAction  } from '../../../../flux-redux/actions'

//
import SlyDeleteConfirmation from '../../specials/SlyDeleteConfirmation'
// import * as _ from 'lodash'

class SlyParsingWordsCard extends Component {

    constructor (props) {
        super(props)
        //
        this.myRef_cm = null
        //
        this.state = {
            fyrb_terms_el: {
                ...this.props.fyrb_terms_el
            }
        }
    }

    componentDidMount () {
        const { setSelectedItem, fyrb_terms_el } = this.props
        const { tagTabPage } = this.props.parsing_words

        if (tagTabPage === "edit") {
            setSelectedItem({
                tag: "el_old",
                selected: fyrb_terms_el,
                target: "parsing_words",
            })
            setSelectedItem({
                tag: "el_new",
                selected: fyrb_terms_el,
                target: "parsing_words",
            })
        }
        

    }

    componentDidUpdate () {
        const { tagControlPanel } = this.props.parsing_words
        if (tagControlPanel === "reload") {
            this.resetFlag()
            const { el_old } = this.props.parsing_words
            // const { phrase, annotation } = el_old

            this.myRef_cm.setValue(`${el_old.annotation}`)
        } 
        else if (tagControlPanel === "okay") {
            this.resetFlag()
            this.myRef_cm.setValue("数据已保存")
        }
        else if (tagControlPanel === "plus") {
            this.resetFlag()
            this.myRef_cm.setValue("")
        } 
    }

    resetFlag () {
        // 重置标识位避免进入Minified React error相互调用无止循环
        const { setSelectedItem } = this.props
        setSelectedItem({
            tag: "tagControlPanel",
            selected: "",
            target: "parsing_words",
        })
    }

    modifySelectedItem = (tag) => {
        return () => {
            const { setSelectedItem } = this.props
            console.log(`--> ${tag}`)
            setSelectedItem({
                tag: "indexCard",
                selected: tag,
                target: "parsing_words",
            })
        }
    }

    onSelected = () => {
        const { id, phrase, annotation } = this.props.fyrb_terms_el
        console.log(`--> ${id} ${phrase}:${annotation}`)
    }

    render () {
        // 解析传入的ip
        const { id } = this.props.fyrb_terms_el
        // 解析刚使用过的操作
        const { indexCard, tagTabPage } = this.props.parsing_words
        
        // 设置不同的样式
        let styleCardWrapper = {}
        let styleCardContent = {}
        if (indexCard === id) {
            styleCardWrapper = {
                // "marginLeft": "-6px",
                "borderLeftColor": "#00BCD4",
                "color": "#00BCD4",
                "backgroundColor": "#E0F7FA",
            }
            styleCardContent = {
                "borderTop": "1px dashed #00BCD4",
            }

            if (tagTabPage === "remove") {
                styleCardWrapper = {
                    // "marginLeft": "-6px",
                    "borderLeftColor": "#E91E63",
                    "color": "#E91E63",
                    "backgroundColor": "#FCE4EC",
                }
                styleCardContent = {
                    "borderTop": "1px dashed #E91E63",
                }
            }
        }

        //
        let buttons = null
        if (tagTabPage === "edit") {
            
            let { phrase, annotation } = this.state.fyrb_terms_el
            // const cm_contents = annotation + "\n"
            buttons = <>
            <div>{JSON.stringify(this.props.parsing_words.el_new)}</div>
            <div>{JSON.stringify(this.props.parsing_words.el_old)}</div>
            <div className="sly-parsing-words-card-wrapper" style={styleCardWrapper}>
                <h1>{phrase}</h1>
                <div className="sly-parsing-words-card-content" style={styleCardContent}>
                    {annotation}
                </div>

            </div>
            <CodeMirror editorDidMount={editor => { this.myRef_cm = editor }} className="sly-parsing-words-code-mirror"
                value={annotation}
                options={{
                    mode: { name: "shell" },
                    theme: "darcula",
                    keyMap:"sublime",
                    autofocus: true,
                    styleActiveLine: true,
                    lineNumbers: true,
                    smartIndent: true,
                    lineWrapping: true,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
                    extraKeys: {
                        // "Ctrl": "autocomplete",
                        "Ctrl-S": function(editor) {
                            //
                        },
                        "Ctrl-Z": function(editor) {
                            editor.undo();
                        },
                        "Ctrl-Y": function(editor) {
                            editor.redo();
                        },
                    },
                    matchBrackets: true,
                    autoCloseBrackets: true
                }}
                onBeforeChange={(editor, data, value) => {
                    // onBeforeChange(editor, data, value, [next])
                    // * if used, next is returned via UnControlled and must be invoked to trigger onChange
                    // this.setState({value}); // must be managed here
                    // 维护局部数据
                    this.setState({
                        fyrb_terms_el: {
                            ...this.state.fyrb_terms_el,
                            annotation: value
                        }
                    })
                    // 维护全局数据
                    const { setSelectedItem } = this.props
                    const escaped = editor.getValue()
                    const fyrb_terms_el = {
                        ...this.state.fyrb_terms_el,
                        annotation: escaped
                    }

                    if (escaped) {
                        setSelectedItem({
                            tag: "el_new",
                            selected: fyrb_terms_el,
                            target: "parsing_words",
                        })
                        
                    }
                }}
                onChange={(editor, data, value) => {
                    // final value, no need to setState here
                }}
            />
            </>
        } else if (tagTabPage === "remove") {
            const { phrase, annotation } = this.props.fyrb_terms_el
            //
            buttons = <>
            <div className="sly-parsing-words-card-wrapper" style={styleCardWrapper}>
                <h1>{phrase}</h1>
                <div className="sly-parsing-words-card-content" style={styleCardContent}>
                    {annotation}
                </div>

            </div>
            <SlyDeleteConfirmation />
            </>
        } else {
            const { phrase, annotation } = this.props.fyrb_terms_el
            //
            buttons = <>
            <div className="sly-parsing-words-card-wrapper" style={styleCardWrapper}>
                <h1>{phrase}</h1>
                <div className="sly-parsing-words-card-content" style={styleCardContent}>
                    {annotation}
                </div>

            </div>
            </>
        }

        return (
            <div className="sly-parsing-words-card-container" onClick={this.modifySelectedItem(id)}>
                {/* <h1>[SlyParsingWordsCard]</h1> */}
                {/* <div className="sly-parsing-words-card-wrapper" style={styleCardWrapper}>
                    <h1>{phrase}</h1>
                    <div className="sly-parsing-words-card-content" style={styleCardContent}>
                        {annotation}
                        {buttons}
                    </div>
                </div> */}
                {buttons}
            </div>
        )
    }
}

//
SlyParsingWordsCard.propTypes = {
    fyrb_terms_el: PropTypes.object.isRequired,
}

SlyParsingWordsCard.defaultProps = {
    fyrb_terms_el: {
        id: -1,
        phrase: "--",
        annotation: "**",
    },
}

// export default SlyParsingWordsCard
//
const mapStateToProps = state => {
    // return state.astronautsReducer
    return {
        ...state.astronautsReducer,
        ...state.settingsReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userSignout: () => {
            dispatch(userSignoutAction())
        },
        addMenu: (menu) => {
            dispatch(addMenuAction(menu))
        },
        removeMenu: (menu) => {
            dispatch(removeMenuAction(menu))
        },
        clearMenu: () => {
            dispatch(clearMenuAction())
        },
        setSelectedItem: (container) => {
            dispatch(setSelectedItemAction(container))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyParsingWordsCard))