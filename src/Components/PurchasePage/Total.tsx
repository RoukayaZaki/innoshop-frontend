import React from "react";
import "./../../assets/css/total.css";
const Stripe = require("stripe");
const stripe = Stripe(
  "pk_test_51NTseVBs4LhvVl6aQ4WegsWn7JZemK6TCc0cCioNd4HcR1Ie39u5ER3CCrnctGrjZnwIiG0dT4nIWy3djRGWgTnK00r1qokY5v"
);

const Total = ({ total, checkout }: any) => {
  const addToCart = async () => {
    let ids = [];
    let names = [];
    let quantities = [];

    for (let i = 0; i < checkout.length; i++) {
      ids.push(checkout[i]._id);
      names.push(checkout[i].name + " " + checkout[i].size);
      quantities.push(checkout[i].quantity);
    }
    console.log(ids);
    const body = {
      ids,
      names,
      quantities,
    };

    try {
      const session = await fetch(
        "http://localhost:3001/api/v1/bookings/checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify(body),
        }
      ).then((data) => data.json());

      console.log(session);

      await stripe.redirectToCheckout({
        sessionId: session.session.id,
      });
    } catch (err) {
      console.log(err);
      window.alert(err);
    }
  };

  return (
    <div className="total">
      <div className="subtotal-value">
        <p>subtotal:</p>
        <p>{total}.00</p>
      </div>
      <div className="total-value">
        <p>total:</p>
        <p>{total}.00</p>
      </div>
      <button onClick={addToCart}>c h e c k o u t</button>
    </div>
  );
};

export default Total;
