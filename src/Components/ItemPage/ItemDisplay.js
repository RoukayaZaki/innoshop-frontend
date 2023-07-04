import NavBar from "../NavBar/NavBar";
import "./../../assets/css/item.css"

const ItemDisplay = ({ prop }) => {
    const sizes = ["XL", "L", "M"]
    const a = prop.data;
    const item = a.product;
    
    const handlePurchase = () => {
        // Retrieve existing items from local storage
        const existingItems = localStorage.getItem('items');
        let items = [];

        if (existingItems) {
            items = JSON.parse(existingItems);
        }

        // Find the item index if it already exists
        const existingItemIndex = items.findIndex((existingItem) => existingItem.id === item.id);

        if (existingItemIndex !== -1) {
            // Increase the quantity if the item exists
            items[existingItemIndex].quantity += 1;
            console.log('Quantity increased by 1!');
        } else {
            // Initialize the quantity to 1 if the item does not exist
            const itemWithQuantity = {
                ...item,
                quantity: 1,
            };

            // Add the modified item to the list
            items.push(itemWithQuantity);
            console.log('Item added to the list with quantity 1!');
        }

        // Store the updated list in local storage
        localStorage.setItem('items', JSON.stringify(items));
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
                <button onClick={handlePurchase}>Purchase</button>
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