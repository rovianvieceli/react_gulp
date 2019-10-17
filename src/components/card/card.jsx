import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="//materializecss.com/images/office.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Title
                        <i className="material-icons right">more_vert</i></span>
                    <p>Breve Descricao</p>
                </div>
                <div className="card-action">
                    <a href="#">Ver mais</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Title
                        <i className="material-icons right">close</i></span>
                    <p>Detalhes</p>
                </div>
            </div>
        );
    }
}

export default Card;