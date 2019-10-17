import React from 'react';

class CardInfo extends React.Component {
    constructor(props) {
        super(props)
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick() {
        this.props.fnClick()
    }

    render() {
        const { data } = this.props;
        return (
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={data.image} onClick={this.handlerClick} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{data.title}
                        <i className="material-icons right">more_vert</i></span>
                    <p>{data.description}</p>
                </div>
                <div className="card-action">
                    <a href={data.link}>Ver mais</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Title
                        <i className="material-icons right">close</i></span>
                    <p>{data.details}</p>
                </div>
            </div>
        );
    }
}

export default CardInfo;