import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import './Nav.scss'
export default function Nav() {
    return (
        <>
            <div className="container-fluid py-2 sticky-top" id="header-cf">
                <div className="container ">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="/">
                            <h2 className='text-info' id='logo'>Ka<span className="">IRA</span></h2>
                        </a>

                        <button className="navbar-toggler border border-white" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon text-white font-weight-bolder">
                                <DensityMediumIcon></DensityMediumIcon>
                            </span>
                        </button>

                        <div
                            className="collapse navbar-collapse  header-nav" id="collapsibleNavbar"
                        >
                            <ul className="navbar-nav mr-auto d-flex justify-content-end">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/aboutpage">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Singin</a>
                                </li>
                                <li className="nav-item">
                                    <a href="nav-link">
                                        <i className="fa-solid fa-moon py-3"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
