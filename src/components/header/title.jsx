import React from 'react';

class Title extends React.Component {
    /**
     * Ínicio do ciclos de vida
     *  - antes do componente existir
     */
    constructor(props) {
        super(props);

        this.state = { hora: new Date() };
    }

    /**
     * Quando componente é inicializado em tela
     *  - componente "vivo"
     */
    componentDidMount() {
        this.horaId = setInterval(() => (this.setState({ hora: new Date() }), 1000));
    }

    /**
     * Fim do ciclo de vida do componente
     *  - componente é destruido
     */
    componentWillMount() {
        clearInterval(this.horaId);
    }

    render() {
        const { hora } = this.state;

        return (
            <div className="row">
                <h6>
                    Wellcome
                    <div className="badget valign-wrapper right">
                        <i className="material-icons">access_time</i>
                        {hora.toLocaleTimeString()}
                    </div>
                </h6>
            </div>
        );
    }
}

export default Title;
