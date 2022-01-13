import { PayPalButton } from "react-paypal-button-v2";

const PayPalBtn = ({
  amount,
  currency,
  createSubscription,
  onApprove,
  catchError,
  onError,
  onCancel,
}) => {
  return <PayPalButton
  amount={amount}
  currency={currency}
  createSubscription={(data, details) => createSubscription(data, details)}
  onApprove={(data, details) => onApprove(data, details)}
  onError={(err) => onError(err)}
  catchError={(err) => catchError(err)}
  onCancel={(err) => onCancel(err)}
  options={{
  clientId: "ARK_DuOzMhe1kZFRBTNxTAT92lx7Xv4gJsV7wcArjnOEVx5Dk_pTbwo60tkBNrgC5pMJOF1fhrsXlDOY",
  vault:true
  }}
  style={{
  shape: 'rect',
  color: 'blue',
  layout: 'vertical',
  // label: 'subscribe',
  }}
  />;
};

export default PayPalBtn;
