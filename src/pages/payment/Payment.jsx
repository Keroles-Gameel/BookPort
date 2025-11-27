import React from "react";
import NavBar from "../../components/home/navbar/NavBar";
import ShippingAddress from "../../components/payment/ShippingAddress";
import PaymentMethod from "../../components/payment/PaymentMethod";
import OrderSummary from "../../components/payment/OrderSummary";
import styles from "./payment.module.css";

function Payment() {
  return (
    <>
      <NavBar />
      <div className={styles.appContainer}>
        <div className={styles.formContainer}>
          <div className={styles.leftSide}>
            <ShippingAddress />
            <PaymentMethod />
          </div>
          <div className={styles.rightSide}>
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
