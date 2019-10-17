import React from 'react';

import CardInfo from './card-info';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = { click: 0 }
        this.setClick = this.setClick.bind(this)
    }

    setClick() {
        this.setState((oldState) => ({
            click: oldState.click + 1
        }));
    }

    render() {
        const { col } = this.props;
        const { click } = this.state;

        const news = [
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
            {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'}
        ];

        return(
            <div className="row">
                <p>Cliques: {click}</p>
                {news.map((item, index) => (
                    <div key={index} className={`col s12 m${col}`}>
                        <CardInfo data={item} fnClick={this.setClick} />
                    </div>
                ))}
            </div>
        );
    }
}

export default Card;