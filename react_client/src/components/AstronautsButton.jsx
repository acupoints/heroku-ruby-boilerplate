import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAstronautsAction } from '../flux-redux/actions'

class AstronautsButton extends Component {

    constructor() {
        super()
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    
    handleOnClick () {
        this.props.fetchAstronauts()
    }

    render () {
        const { astronauts, pending } = this.props
        let astronauts_els = astronauts.map(el => <li key={el.name}>{el.name}</li>)
        astronauts_els = JSON.stringify(astronauts)
        return (
            <div className="Astro">
                <button onClick={this.handleOnClick}>Fetch Astro</button>
                <h1>{pending? 'loading...': ''}</h1>
                {pending||astronauts_els}
            </div>
        )
    }
}


//
const mapStateToProps = state => {
    return state.astronautsReducer
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAstronauts: () => {
            dispatch(fetchAstronautsAction())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AstronautsButton)
