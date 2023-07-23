const Challenge = () => {

    const n1 = 3
    const n2 = 2

    const ResultOperacao = () => {
        alert(n1 + n2)
    }

    return(
        <div>
            <h1>{n1} + {n2}</h1>
            <button onClick={ResultOperacao}>Somar</button>
        </div>
    )

}

export default Challenge