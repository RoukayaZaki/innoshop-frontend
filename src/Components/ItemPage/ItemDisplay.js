import NavBar from "../NavBar/NavBar";
import "./../../assets/css/item.css"

const ItemDisplay = ({ prop }) => {
    const sizes = ["XL", "L", "M"]
    const a = prop.data;
    const item = a.product;
    const handlePurchase = (itemsent) => {
        addItemToList(itemsent);
    };
    return (
        <div className="item-container">
            <div className="item-image">
                <img src={`https://innoshop-backend.onrender.com/${item.varieties[0].images[0]}.jpg`} alt={item.title} className="main-image" />
                <div className="image-gallery">
                    {item.varieties[0].images.map((photo, index) => (
                        <img key={index} src={`https://innoshop-backend.onrender.com/${photo}.jpg`} alt={`Gallery ${index}`} />
                    ))}
                </div>
            </div>
            <div className="item-details">
                <h2>{item.name}</h2>
                {/* <p>{item.description}</p> */}
                <p>{item.price}.00 R</p>
                <button>{() => handlePurchase({item})}Purchase</button>
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