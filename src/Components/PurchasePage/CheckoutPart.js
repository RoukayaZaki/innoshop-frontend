import PurchaseCard from "./PurchaseCard";
import Total from "./Total";
import './../../assets/css/checkoutpart.css'

const Item = ({ name, quantity }) => {
    return (
        <div className="item">
            <span>{name}</span>
            <span>{quantity}</span>
        </div>
    );
};

const CheckoutPart = ({ items }) => {
    return (
        <div className="checkout-page">
            <div className="items-section">
                {items.map(item => (
                    <PurchaseCard item={item} />
                ))}
            </div>
            <Total />
        </div>
    );
};

export default CheckoutPart;
