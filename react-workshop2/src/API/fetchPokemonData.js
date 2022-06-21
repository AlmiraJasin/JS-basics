export const getData = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {return data.results});
}

export const getDataAsync = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const jsonParsed = await response.json();
    return jsonParsed.results;
}

export const promiseTest = () => {
    const test = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'aaa'
            reject(data)
        }, 5000)
    })

    test.then(data => console.log(data)).catch(data => console.log('nepaejo'))
}
