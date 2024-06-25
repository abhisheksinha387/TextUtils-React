import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            {/* Corrected class name syntax */}
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutText}</a>
                            </li>
                        </ul>
                    </div>
                    {/* Changed 'class' to 'className' */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input 
                            className="form-check-input" 
                            onClick={props.toggleMode}  
                            type="checkbox" 
                            role="switch" 
                            id="flexSwitchCheckDefault" 
                        />
                        {/* Changed 'for' to 'htmlFor' */}
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
