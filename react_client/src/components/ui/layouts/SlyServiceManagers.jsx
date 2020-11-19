import React, { Component } from 'react'
import './SlyServiceManagers.css'
//
import SlyParsingWordsTabPage from '../commons/parsing-words/SlyParsingWordsTabPage'
import SlyParsingWordsControlPanel from '../commons/parsing-words/SlyParsingWordsControlPanel'
import SlyParsingWordsCard from '../commons/parsing-words/SlyParsingWordsCard'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'
import { fetchUserNativeDataAction  } from '../../../flux-redux/actions'
import { setContainerDimensionsAction  } from '../../../flux-redux/actions'
//
import * as _ from "lodash"
const zlstore = require('store')

class SlyServiceManagers extends Component {

    constructor () {
        super()
        //
        this.myRef_controlPanel = React.createRef()
        this.myRef_tabPage = React.createRef()
    }

    componentDidMount () {
        this.updateDimensions()
        window.addEventListener("resize", this.updateDimensions)
        //
        const profile = {
            astronauts: zlstore.get("astronauts"),
            username: zlstore.get("username"),
        }
        // const { astronauts } = this.props
        // const { userRestore } = this.props
        // if (profile.astronauts && !astronauts) {
        //     userRestore(profile)
        // }
        //
        const { fetchUserNativeData } = this.props
        // const { fetchUserNativeData, nativeData } = this.props
        // if (JSON.stringify(nativeData) === '{}') {
        //     fetchUserNativeData(profile)
        // }
        fetchUserNativeData(profile)
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.updateDimensions)
    }

    updateDimensions = () => {
        const { setContainerDimensions } = this.props
        //
        let heightControlPanel = 0
        if (this.myRef_controlPanel.current!==null) {
            heightControlPanel = this.myRef_controlPanel.current.clientHeight
        }

        setContainerDimensions({
            tag: "heightControlPanel",
            dimensions: heightControlPanel + 4,
            target: "parsing_words",
        })
        //
        let widthTabPage = 0
        if (this.myRef_tabPage.current!==null) {
            widthTabPage = this.myRef_tabPage.current.clientWidth
        }

        setContainerDimensions({
            tag: "widthTabPage",
            dimensions: widthTabPage + 4,
            target: "parsing_words",
        })
    }

    render () {
        const { headerHeight, bannerHeight } = this.props.containers
        const { heightControlPanel, widthTabPage } = this.props.parsing_words

        const styleManagersWrapper = {
            paddingRight: widthTabPage,
        }
        const styleManagersComponents = {
            marginTop: heightControlPanel,
        }
        const styleManagersControlPanel = {
            right: widthTabPage + 12 + 4,
        }
        const styleManagersTabPage = {
            marginTop: heightControlPanel,
            right: 12 + 4,
        }
        const styleManagersComponentsLeft = {
            height: `calc(100vh - ${headerHeight + bannerHeight+heightControlPanel+12}px)`,
        }

        //
        let { fyrb_terms } = this.props.nativeData
        fyrb_terms = fyrb_terms || []
        const { tagTabPage } = this.props.parsing_words
        const { indexCard } = this.props.parsing_words
        let buttons = null
        let buttons_default = <>
        <div className="sly-service-managers-components-left" style={styleManagersComponentsLeft}>
            {/* <h1>[components-left]</h1> */}
            {fyrb_terms.map((fyrb_terms_el) => <SlyParsingWordsCard fyrb_terms_el={fyrb_terms_el} />)}
        </div>
        </>
        // Utilities
        if (tagTabPage === "history") {
            buttons = <>
            {buttons_default}
            </>
        } else if (tagTabPage === "edit") {
            const el_old = _.find(fyrb_terms, {"id": indexCard})
            buttons = <>
            <div className="sly-service-managers-components-hori-center">
                {/* <h1>[components-hori-center]</h1> */}
                {<SlyParsingWordsCard fyrb_terms_el={el_old} />}
            </div>
            </>
        } else if (tagTabPage === "remove") {
            buttons = <>
            <div className="sly-service-managers-components-right">
                {/* <h1>[components-right]</h1> */}
                {<SlyParsingWordsCard fyrb_terms_el={_.find(fyrb_terms, {"id": indexCard})} />}
            </div>
            </>
        } else {
            buttons = <>
            {buttons_default}
            </>
        }

        return (
            <div className="sly-service-managers-container">
                {/* <h1>[SlyServiceManagers]</h1> */}
                <div className="sly-service-managers-wrapper" style={styleManagersWrapper}>
                    {/* <h1>[SlyServiceManagers]</h1> */}
                    <div className="sly-service-managers-components" style={styleManagersComponents}>
                        {/* <h1>[components]</h1> */}
                        {/* <div className="sly-service-managers-components-left">
                            <h1>[components-left]</h1>
                        </div> */}
                        {/* <div className="sly-service-managers-components-hori-center">
                            <h1>[components-hori-center]</h1>
                        </div> */}
                        {/* <div className="sly-service-managers-components-right">
                            <h1>[components-right]</h1>
                        </div> */}
                        {buttons}
                    </div>
                    <div ref={this.myRef_controlPanel} className="sly-service-managers-control-panel" style={styleManagersControlPanel}>
                        {/* <h1>[control-panel]</h1> */}
                        <SlyParsingWordsControlPanel />
                    </div>
                    <div ref={this.myRef_tabPage} className="sly-service-managers-tab-page" style={styleManagersTabPage}>
                        {/* <h1>[tab-page]</h1> */}
                        <SlyParsingWordsTabPage />
                    </div>
                </div>
            </div>
        )
    }
}

// export default SlyServiceManagers
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
        fetchUserNativeData: (profile) => {
            dispatch(fetchUserNativeDataAction(profile))
        },
        setContainerDimensions: (container) => {
            dispatch(setContainerDimensionsAction(container))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyServiceManagers))
