import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.handlerFind = this.handlerFind.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }

    handlerFind(event) {
        this.props.fnSetSearch(event)
    }

    handlerSubmit(event) {
        this.props.fnOnSubmit(event)
    }

    render() {
        const { find } = this.props;

        return(
            <form onSubmit={this.handlerSubmit}>
                <div className="row">
                    <div className="input-field col s6 m6">
                        <input type="text" placeholder="Type a title" id="search" onChange={this.handlerFind} value={find}/>
                        <label htmlFor="search">Search</label>
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;