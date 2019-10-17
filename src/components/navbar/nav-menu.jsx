import React from 'react';

class NavMenu extends React.Component {
    render() {
        const { menus } = this.props;
        return (
            <ul id="nav-mobile" className="right">
                {menus.map((menu, index) => (
                    <li key={index}>
                        <a href={menu.linkTo}>{menu.title}</a>
                    </li>
                ))}
            </ul>
        )
    }
}

export default NavMenu;