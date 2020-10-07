import React, { Component } from 'react'
import './SlyPageLogin.css'
//
// import AstronautsButton from '../AstronautsButton'
import SlyInputField from './SlyInputField'
import SlyButton from './SlyButton'
import { Link } from 'react-router-dom'
import D3Card from '../D3Card'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class SlyPageLogin extends Component {

    constructor () {
        super()
        //
        this.email = React.createRef()
        this.password = React.createRef()
    }

    componentDidUpdate () {
        // console.log("更新后:", this.props)
        const { astronauts, error } = this.props
        if (astronauts) {
            //
            // console.log("可以进行跳转了")
            this.props.history.push("/")
        } else {
            //
            // console.log("暂时还不可以跳转")
            if (error) {
                // console.log("远程访问未成功")
            } else {
                // console.log("组件初始化")
            }
        }
    }

    render () {
        const { error } = this.props
        return (
            <div className="sly-page-content">
                <D3Card />
                <div className="sly-page-login-container">
                    {/* <h1>[SlyPageLogin]</h1> */}
                    {error&&JSON.parse(error).statusText}
                    <h1>Sign in to FyHub</h1>
                    <div className="sly-page-login-form">
                        <SlyInputField label="Email" type="email" ref={this.email} placeholder="email..." />
                        <SlyInputField label="Password" type="password" ref={this.password} placeholder="password..." />
                        <SlyButton text="Log in" data={{
                            email: this.email,
                            password: this.password,
                        }} />
                    </div>
                    {/* <AstronautsButton /> */}
                    
                    <p>
                        Don’t have an account?
                        <Link to="/users/signup">Sign up</Link>
                    </p>
                    <p>
                        <Link to="/">Forgot password?</Link>
                    </p>
                    
                </div>
            </div>
        )
    }
}

// export default SlyPageLogin
//
const mapStateToProps = state => {
    return state.astronautsReducer
}

// export default connect(mapStateToProps)(SlyPageLogin)
export default connect(mapStateToProps)(withRouter(SlyPageLogin))