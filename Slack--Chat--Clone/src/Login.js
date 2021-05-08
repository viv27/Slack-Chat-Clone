import React from 'react';
import "./Login.css";
import Logo from "./Slack_Mark.svg";
import {Button} from '@material-ui/core';
import { auth, provider } from "./Firebase";
import { useStateValue } from './StateProvider';
import { actionType } from './Reducer';

function Login() {

    const [state, dispach] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            // console.log(result);
            dispach({
                type: actionType.SET_USER,
                user: result.user,
            })
        })
        .catch(error =>{
            alert(error.message)
        });

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} alt=""/>
                <h1>Sign in to Slack</h1>
                
                <Button onClick={signIn}> Sign In with Google </Button>
            </div>
        </div>
    )
}

export default Login;
