import './Cards.css'

export default function Cards( {title, text, image, color} ) {
    return (
        <div className={"cards card-color-" + color}>
            <h2 className='card-title'>{title}</h2>
            <p className='card-text'>{text}</p>
            <img src={image} alt={title}/>
        </div>
    )
}