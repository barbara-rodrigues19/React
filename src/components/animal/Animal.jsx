function Animal({dados}) {
    return(<>
    <h1>Nome: {dados.nome}</h1>
    <h3>Espécie: {dados.especie}</h3>
    <h3>Cor: {dados.cor}</h3>
    <img src={dados.img} width={"200px"} />
    </>)
}

export default Animal