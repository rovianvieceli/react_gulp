import React from 'react';

class Title extends React.Component {
    /**
     * Ínicio do ciclos de vida
     *  - antes do componente existir
     */
    constructor(props) {
        super(props)
        this.state = { hora: new Date() }
    }

    /**
     * Quando componente é inicializado em tela
     *  - componente "vivo"
     */
    componentDidMount() {
        this.horaId = setInterval(() => (
            this.setState({ hora: new Date() }),
        1000))
    }

    /**
     * Fim do ciclo de vida do componente
     *  - componente é destruido
     */
    componentWillMount() {
        clearInterval(this.horaId)
    }

    render() {
        const { hora } = this.state;

        return <h1>{`Olá eu sou um Component ${hora.toLocaleTimeString()}`}</h1>;
    }
}

export default Title;