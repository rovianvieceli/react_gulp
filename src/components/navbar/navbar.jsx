import React from 'react';

import NavMenu from './nav-menu';

class Navbar extends React.Component {
    render() {
        const { title, color } = this.props;
        const menus = [
            {title: "Home", linkTo: "#home"},
            {title: "About", linkTo: "#about"},
            {title: "Contact", linkTo: "#contact"}
        ];

        return (
            <nav>
                <div className={`nav-wrapper ${color}`}>
                    <div className="container">
                        <a href="#" className="brand-logo">{title}</a>
                        <NavMenu menus={menus} />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;