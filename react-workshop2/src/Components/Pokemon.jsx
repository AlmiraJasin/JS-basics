export const Pokemon = ({name, photo}) => {
    return (
        <figure>
            <figcaption style={{backgroundColor: "grey"}}>{name}</figcaption>
            <img src={photo} alt={name}></img>
        </figure>
    );
};