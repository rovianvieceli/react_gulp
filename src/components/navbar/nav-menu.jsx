import React from 'react';

class NavMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = { active: 'Home' }
        this.setActive = this.setActive.bind(this)
    }

    setActive(menu, event) {
        this.setState({ active: menu.title })
    }

    render() {
        const self = this;
        const { menus } = this.props;
        const { active } = this.state;
        return (
            <ul id="nav-mobile" className="right">
                {menus.map((menu, index) => (
                    <li key={index} className={active == menu.title ? 'active' : ''}>
                        <a href={menu.linkTo} onClick={this.setActive.bind(null, menu, this)}>{menu.title}</a>
                    </li>
                ))}
            </ul>
        )
    }
}

export default NavMenu;
