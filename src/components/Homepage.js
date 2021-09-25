import React from 'react'
import GoogleLogin from 'react-google-login';

const Homepage = () => {

    const login = (response) => {
console.log(response);
    };

    return (
        <div className="home__page">
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
        </div>
    )
}

export default Homepage;