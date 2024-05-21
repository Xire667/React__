import characters from "../../data"
import Card from "../Card/Card"

const Cards =()=>{
    return(<div>
        <h1>Cards</h1>
        {
            characters.map((el)=>{
                return (
                    <Card
                    name={el.name}
                    species={el.species}
                    gender={el.gender}
                    image={el.image}
                    />
                )
            })
        }
    </div>)
}

export default Cards