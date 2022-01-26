import React, { Component } from "react";

// Stateless functional component
const NavBar = ({ totalCounters }) => {
    // console.log(totalCounters);
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Total Objects :{""}
                    <span className="badge badge-pill badge-secondary">
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
