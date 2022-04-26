import React from "react";
import { Button } from "react-native";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./KhaltiConfig";

export default function Khalti() {
  let checkout = new KhaltiCheckout(config);
  return (
    <div>
      <Button
        // onPress={() => {
        //   checkout.show({ amount: 1000 });
        // }}
        title="Pay Via Khalti"
      />
    </div>
  );
}
