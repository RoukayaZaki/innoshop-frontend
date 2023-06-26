import NavBar from "../NavBar/NavBar";
import "./../../assets/css/item.css"

const ItemDisplay = (props) => {
    const { item } = props;
    const sizes = ["XL", "L", "M"]
    return (
        <div className="item-container">
            <div className="item-image">
                <img src={item.img} alt={item.title} className="main-image" />
                <div className="image-gallery">
                    {item.gallery.map((photo, index) => (
                        <img key={index} src={photo} alt={`Gallery ${index}`} />
                    ))}
                </div>
            </div>
            <div className="item-details">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>{item.price}.00 R</p>
                <button>Purchase</button>
                <div className="size-checklist">
                    <h3>Size</h3>
                    {sizes.map((size, index) => (
                        <label key={index}>
                            <input type="checkbox" name="size" value={size} />
                            {size}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ItemDisplay;