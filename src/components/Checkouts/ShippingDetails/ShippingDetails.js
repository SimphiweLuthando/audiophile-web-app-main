import React, { useContext } from "react";
import {
  BillingContainer,
  BillingText,
} from "../BillingDetails/billingstyling";
import { ShippingBottom, ShippingMiddle, ShippingTop } from "./shippingstyling";

import Input from "../Shared.js/Input";
import audioContext from "../../../context/Audiophile/audioContext";
import useForm from "../../checkout/useForm";
import validate from "../../checkout/ValidateSign";

const ShippingDetails = () => {
  const AudioContext = useContext(audioContext);
  const { continueAndPay } = AudioContext;

  const { handleChange, values, errors } = useForm(continueAndPay, validate);

  return (
    <BillingContainer>
      <BillingText>SHIPPING INFO</BillingText>
      <ShippingTop>
        <Input
        primary={'primary'}
        
          handleChange={handleChange}
          formtype="text"
          placeholder="1 Sandton Drive"
          name="address"
          value={values.address}
          id="address"
          label={"Address"}
          forlabel={"address"}
          error={errors.address}
        />
      </ShippingTop>
      <ShippingMiddle>
        <Input
          handleChange={handleChange}
          formtype="number"
          placeholder="2196"
          name="zip"
          value={values.zip}
          id="zip"
          label={"ZIP Code"}
          forlabel={"zip"}
          error={errors.zip}
        />
        <Input
          handleChange={handleChange}
          formtype="text"
          placeholder="Johannesburg"
          name="city"
          value={values.city}
          id="city"
          label={"City"}
          forlabel={"city"}
          error={errors.city}
        />
      </ShippingMiddle>
      <ShippingBottom>
        <Input
          handleChange={handleChange}
          formtype="text"
          placeholder="South Africa"
          name="country"
          value={values.country}
          id="country"
          label={"Country"}
          forlabel={"country"}
          error={errors.country}
        />
      </ShippingBottom>
    </BillingContainer>
  );
};

export default ShippingDetails;
