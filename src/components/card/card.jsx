import React from 'react';

import CardInfo from './card-info';
import Search from '../search/search';
import Api from '../../services/api';

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = { list: [], click: 0, search: '', server: [] }
        this.setClick = this.setClick.bind(this)
        this.setSearch = this.setSearch.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    async componentDidMount() {
        await Api.get(`/cards`)
            .then((card) => {
                this.setState({
                    list: card.data,
                    server: card.data
                })
            });
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

        return (
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
