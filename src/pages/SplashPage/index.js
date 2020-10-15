import React from 'react'
import {withRouter} from 'react-router-dom'

class SplashPage extends React.Component {
    componentDidMount(){
        const token = localStorage.getItem('token');

        if (token) {
            this.props.history.push('/admin');
        }else{
            this.props.history.push('/login');
        }
        
    }
    render(){
        return(
            <h1></h1>
        )
    }
}

export default withRouter(SplashPage);
