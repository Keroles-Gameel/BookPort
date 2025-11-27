import React from "react";
import styles from "./OrderSummary.module.css";
import paymentStyles from "../../pages/payment/payment.module.css";

const OrderSummary = () => {
  return (
    <div className={`${paymentStyles.card} ${styles.orderSummary}`}>
      <h2 className={paymentStyles.title}>Order Summary</h2>
      <div className={styles.item}>
        <div>
          <h3 className={styles.itemTitle}>Book Store</h3>
          <p className={styles.itemDesc}>Premium quality, ethically sourced.</p>
        </div>
      </div>

      <div className={styles.summaryDetails}>
        <p>
          Subtotal: <span>$99.00</span>
        </p>
        <p>
          Shipping: <span>$5.00</span>
        </p>
        <p>
          Tax: <span>$8.92</span>
        </p>
        <hr />
        <p className={styles.total}>
          Total: <span>$112.92</span>
        </p>
      </div>

      <button className={styles.placeOrder}>Place Order</button>
    </div>
  );
};

export default OrderSummary;
