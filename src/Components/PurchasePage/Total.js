import './../../assets/css/total.css'

const Total = ({ total }) => {
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
            <button>c h e c k o u t</button>
        </div>
    );
}

export default Total;