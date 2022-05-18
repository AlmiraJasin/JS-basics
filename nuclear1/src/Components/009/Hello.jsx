function Hello({spalva, skaicius}) {
    return <h2 style={
        {
            color: spalva,
            padding: '7px'
        }
    }
    >Hello { skaicius + 11 } </h2>
}

export default Hello;