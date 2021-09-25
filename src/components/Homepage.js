import React from 'react'
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';

import "../styling/home.css";

const Homepage = () => {

    const dispatch = useDispatch();

    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div className="home__page" style={{display:isSignedIn ? "none" : ""}}>
            {!isSignedIn && (
            <div className="login__message">
                <h1>Mi Blog</h1>
                <p>
                    Es es mi primer blog
                </p>
                <GoogleLogin
                    clientId="271836942554-e40phppev0snn3etnoohitl02t2k71lv.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="login__button"
                        >
                            Autenticación con Google
                        </button>
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                />
            </div>
             )
            }
        </div>
    )
}

export default Homepage;