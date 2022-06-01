const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

/* 1 
Atvaizduoti masyvą dogs. 
Kiekvienas šuo atskirame kvadrate. */

export const DogsAndSquares = () => {
    return (
        <div className="container">
            {
                dogs.map((dogName, i) => <div key={i} className='rectangle text'>{dogName}</div>)
            }
        </div>
    )
}

/* 2 
Atvaizduoti masyvą dogs. 
Kiekvienas šuo atskirame apskritime. 
Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo. */

export const DogsAndCircles = () => {
    const dogsByName = [...dogs].sort((a, b) => a.length - b.length);
    return (
        <div className="container">
            {
                dogsByName.map((dogName, i) => <div key={i} className='big-circle text'>{i + 1 + ' ' + dogName}</div>)
            }
        </div>
    )
}

/* 3 
Atvaizduoti masyvą dogs. 
Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius apskritime. */

export const DogsByIndex = () => {
    return (
        <div className="container">
            {
                dogs.map((dogName, i) => <div key={i} className={`${(i % 2 === 1) ? 'big-circle' : 'rectangle'} text`}>{dogName}</div>)
            }
        </div>
    )
}

/* 4 
Atvaizduoti masyvą dogs. 
Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti). */

export const BigDogsNotAllowed = () => {
    return (
        <div className="container">
            {
                dogs.filter(dogName => dogName[0].toLowerCase() === dogName[0]).map((dogName, i) => <div key={i} className='no-circle white-text'>{dogName}</div>)
            }
        </div>
    )
}

/* 5 
Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. 
Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai. */

export const DogsNameLegth = () => {
    return (
        <div className="container">
            {
                dogs.map((dogName, i) => <div key={i} className='no-circle white-text' style={{color: dogName.length > 6 ? "green" : "red"}}>{dogName.length}</div>)
            }
        </div>
    )
}

