import React from 'react';

import CardInfo from './card-info';

class Card extends React.Component {
    render() {
        const { col } = this.props;

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
                {news.map((item, index) => (
                    <div key={index} className={`col s12 m${col}`}>
                        <CardInfo data={item} />
                    </div>
                ))}
            </div>
        );
    }
}

export default Card;