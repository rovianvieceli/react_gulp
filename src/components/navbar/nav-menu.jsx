import React from 'react';

class NavMenu extends React.Component {
    render() {
        const { menu } = this.props
        return (
            <ul id="nav-mobile" className="right">
                {menu.map((item, index) => (
                    <li key={index}>
                        <a href={item.linkTo}>{item.title}</a>
                    </li>
                ))}
            </ul>
        )
    }
}

export default NavMenu;
