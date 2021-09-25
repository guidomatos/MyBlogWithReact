import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { 
selectSignedIn, 
selectUserData, 
setInput, 
setSignedIn, 
setUserData } from '../features/userSlice';

import "../styling/navbar.css";

const Navbar = () => {
    const [inputValue, setinputValue] = useState("tech")
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    }

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    }

    return (
        <div className="navBar">
            <h1 className="navbar__header">Mi Blog </h1>
            {isSignedIn && (
            <div className="blog__search">
                <input className="search" 
                placeholder="Busqueda para blog" 
                value={inputValue} 
                onChange={(e) => setinputValue(e.target.value)}
                />
                <button className="submit" onClick={handleClick}>
                    Buscar
                </button>
            </div>
            )}
            {isSignedIn ? (
            <div className="navbar__user__data">
                <Avatar
                className="user" 
                src={userData?.imageUrl} 
                alt={userData?.name} 
                />
                <h1 className="signedIn">{userData?.givenName}</h1>
                <GoogleLogout 
                clientId="271836942554-e40phppev0snn3etnoohitl02t2k71lv.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="logout__button"
                    >
                        Logout
                    </button>
                )}
                onLogoutSuccess={logout}
                />
            </div>
            ) : (
                <h1 className="notSignedIn">Usuario no disponible</h1>
            )    
        }
        </div>
    )
}

export default Navbar
