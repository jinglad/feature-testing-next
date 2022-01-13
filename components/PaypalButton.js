import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useEffect } from "react";

const amount = "2";
const currency = "USD";
const style = { layout: "vertical",label: "subscribe" };

const PaypalButton = ({ type }) => {
  const [{ options }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
        type: "resetOptions",
        value: {
            ...options,
            intent: "subscription",
        },
    });
}, [type]);

  return (
    <div>
      {/* <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, style, currency]}
        fundingSource={undefined}
        createSubscription={(data, actions) => {
          return actions.subscription
            .create({
              plan_id: "P-3RX065706M3469222L5IFM4I",
            })
            .then((orderId) => {
              console.log("subscription created");
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          console.log("subsciprtion success");
        }}
      /> */}
    </div>
  );
};

export default PaypalButton;
