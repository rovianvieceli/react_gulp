import React from 'react';

class Navbar extends React.Component {
    render() {
        const { title, color } = this.props;
        return (
            <nav>
                <div className={`nav-wrapper ${color}`}>
                    <div className="container">
                        <a href="#" className="brand-logo">{title}</a>
                        <ul id="nav-mobile" className="right">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;