import style from "./Card.module.css"

const Card = (props) => {
    return (<div className={style.container}> 
        <h2>{props.name}</h2>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
        <img className={style.img} src={props.image} alt="Card Image" />
    </div>)
}

export default Card 