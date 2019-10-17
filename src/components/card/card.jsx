import React from 'react';

import CardInfo from './card-info';
import Search from '../search/search';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state      = { list: [], click: 0, search: '', server: [] }
        this.setClick   = this.setClick.bind(this)
        this.setSearch  = this.setSearch.bind(this)
        this.onSubmit   = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            list: [
                {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 2', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 3', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 4', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 5', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 6', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 7', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 8', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 9', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 10', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 11', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'}
            ],
            server: [
                {title: 'Title 1', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 2', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 3', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 4', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 5', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 6', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 7', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 8', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 9', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 10', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'},
                {title: 'Title 11', description: 'Description', details: 'Details', image: '//materializecss.com/images/office.jpg', link: '#teste'}
            ]
        })
    }

    setClick() {
        this.setState((oldState) => ({
            click: oldState.click + 1
        }));
    }

    setSearch(event) {
        const { value } = event.target;
        const { server } = this.state;

        if (value == "")
            this.setState({ list: server });

        this.setState({ search: value });
    }

    onSubmit(event) {
        event.preventDefault()
        event.stopPropagation()

        const { server, search } = this.state;
        const found = server.filter(item => {
            if (
                   item.title.toUpperCase().indexOf(search.toUpperCase()) > -1
                || item.description.toUpperCase().indexOf(search.toUpperCase()) > -1
                || item.details.toUpperCase().indexOf(search.toUpperCase()) > -1
            ) {
                return item;
            }

        });

        this.setState({ list: found })
    }

    render() {
        const { col } = this.props;
        const { list, click, search } = this.state;

        return(
            <section>
                <Search fnSetSearch={this.setSearch} fnOnSubmit={this.onSubmit} find={search} />
                <div className="row">
                    <p>Cliques: {click}</p>
                    {list.map((item, index) => (
                        <div key={index} className={`col s12 m${col}`}>
                            <CardInfo data={item} fnClick={this.setClick} />
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Card;