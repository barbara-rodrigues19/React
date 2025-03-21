function Produto({dados}){
    return(<>
        <h2>Prodruto: {dados.produto}</h2>
        <h2>Código: {dados.codigo}</h2>
        <img src={dados.img} width={"200px"}/>
    </>)
}

export default Produto