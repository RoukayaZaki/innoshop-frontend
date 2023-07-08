import Filters from "./Filters";
import Products from "./Products";
import "./../../assets/css/product-area.css"

const Product_area = ({ products }) => {
    return (
        <div className="product-container" styles={{ "margin": "0px;" }}>
            <div className="row">
                <div className="col-3">
                    <Filters />
                </div>
                <div className="col-9">
                    <h3>All Items</h3>
                    <Products products={products}/>
                </div>
            </div>
        </div>
    );
}

export default Product_area;