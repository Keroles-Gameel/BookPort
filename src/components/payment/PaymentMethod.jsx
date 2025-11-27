import React, {useState} from "react";
import styles from "./PaymentMethod.module.css";
import paymentStyles from "../../pages/payment/payment.module.css";

const PaymentMethod = () => {
  const [method, setMethod] = useState("card");

  return (
    <div className={paymentStyles.card}>
      <h2 className={paymentStyles.title}>Payment Method</h2>

      <div className={styles.methodOptions}>
        <button
          className={method === "card" ? styles.active : ""}
          onClick={() => setMethod("card")}
          type="button">
          Card
        </button>
        <button
          className={method === "wallet" ? styles.active : ""}
          onClick={() => setMethod("wallet")}
          type="button">
          Wallet
        </button>
        <button
          className={method === "cod" ? styles.active : ""}
          onClick={() => setMethod("cod")}
          type="button">
          COD
        </button>
      </div>

      {method === "card" && (
        <form>
          <label className={paymentStyles.label}>Name on Card</label>
          <input
            type="text"
            placeholder="First & Last Name"
            className={paymentStyles.input}
          />

          <label className={paymentStyles.label}>Card Number</label>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            className={paymentStyles.input}
          />

          <div className={paymentStyles.row}>
            <div className={paymentStyles.col}>
              <label className={paymentStyles.label}>Expiry </label>
              <select className={paymentStyles.select}>
                <option value="">MM</option>
                <option value="01">01</option>
                <option value="02">02</option>
              </select>
            </div>
            <div className={paymentStyles.col}>
              <label className={paymentStyles.label}>Expiry </label>
              <select className={paymentStyles.select}>
                <option value="">YYYY</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
            <div className={paymentStyles.col}>
              <label className={paymentStyles.label}>CVV</label>
              <input
                type="text"
                placeholder="CVV"
                maxLength={4}
                className={paymentStyles.input}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default PaymentMethod;
