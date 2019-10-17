import React from 'react';

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
                        <ul id="nav-mobile" className="right">
                            {menus.map((menu, index) => (
                                <li key={index}>
                                    <a href={menu.linkTo}>{menu.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;