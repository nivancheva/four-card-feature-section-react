export default function Cards( {title, text, image, color} ) {
    return (
        <div className={"card card-color" + color}>
            <h3>{title}</h3>
            <p>{text}</p>
            <img src={image} alt={title}/>
        </div>
    )
}