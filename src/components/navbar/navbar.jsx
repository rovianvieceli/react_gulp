import React from 'react';

import NavMenu from './nav-menu';
import Api from '../../services/api';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { menu: [] };
    }

    async componentDidMount() {
        await Api.get(`/menus`)
            .then((menu) => {
                this.setState({ menu: menu.data })
            });
    }

    render() {
        const { title, color } = this.props;
        const { menu } = this.state;

        return (
            <nav>
                <div className={`nav-wrapper ${color}`}>
                    <div className="container">
                        <a href="#" className="brand-logo">{title}</a>
                        <NavMenu menus={menu} />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
