import './../../assets/css/total.css'

const Total = ({ total , checkout }) => {
    const addToCart = (checkout) => {
        
    }
    return (
        <div className="total">
            <div className='subtotal-value'>
                <p>
                    subtotal:
                </p>
                <p>
                    {total}.00
                </p>
            </div>
            <div className='total-value'>
                <p>
                    total:
                </p>
                <p>
                    {total}.00
                </p>
            </div>
            <button onClick={addToCart(checkout)}>c h e c k o u t</button>
        </div>
    );
}

export default Total;