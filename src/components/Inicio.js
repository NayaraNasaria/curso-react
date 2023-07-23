import foto__inicio from "../assets/moca_fabula.png"

const Inicio = () => {
    return (
        <div className="inicio__home">
            <img className="foto__home" src={foto__inicio} alt="Mulher maquiada como sereia" />
            <div className="home">
                <h2>Descubra o melhor que</h2>
                <h2 className="titulo__home">há em você!</h2>

                <button className="acao__testes">Realizar Testes</button>
            </div>

            
            
        </div>
    )
}

export default Inicio