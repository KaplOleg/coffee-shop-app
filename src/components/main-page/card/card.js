import './card.sass'

const Card = (props) => {
    const {linkImg, name, price} = props
    return (
        <div className="card">
            <div className="card_img">
                <img src={linkImg} alt="coffe-img" />
            </div>
            <div className="card_name">{name}</div>
            <div className="card_price">{price}</div>
        </div>  
    )
}

export default Card