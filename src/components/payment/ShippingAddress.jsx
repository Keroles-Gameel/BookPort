import React from "react";
import styles from "../../pages/payment/payment.module.css";

const ShippingAddress = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Shipping Address</h2>
      <form>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          placeholder="First & Last Name"
          className={styles.input}
        />

        <label className={styles.label}>Address 1</label>
        <input
          type="text"
          placeholder="421, Dubai Main St"
          className={styles.input}
        />

        <label className={styles.label}>Address 2</label>
        <input
          type="text"
          placeholder="Apartment, suite, etc."
          className={styles.input}
        />

        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>City</label>
            <select className={styles.select}>
              <option value="">Select city</option>
              <option value="cairo">Cairo</option>
              <option value="alexandria">Alexandria</option>
              <option value="giza">Giza</option>
              <option value="aswan">Aswan</option>
              <option value="asyut">Asyut</option>
              <option value="mansoura">Mansoura</option>
              <option value="zagazig">Zagazig</option>
              <option value="tanta">Tanta</option>
              <option value="luxor">Luxor</option>
              <option value="sohag">Sohag</option>
              <option value="beni-suef">Beni Suef</option>
              <option value="ismailia">Ismailia</option>
              <option value="fayoum">Fayoum</option>
              <option value="minya">Minya</option>
              <option value="hurghada">Hurghada</option>
              <option value="port-said">Port Said</option>
              <option value="damietta">Damietta</option>
            </select>
          </div>
          <div className={styles.col}>
            <label className={styles.label}>State</label>
            <select className={styles.select}>
              <option value="">Select state</option>
              <option value="cairo-governorate">Cairo Governorate</option>
              <option value="alexandria-governorate">
                Alexandria Governorate
              </option>
              <option value="giza-governorate">Giza Governorate</option>
              <option value="asyut-governorate">Asyut Governorate</option>
              <option value="aswan-governorate">Aswan Governorate</option>
              <option value="dakahlia-governorate">Dakahlia Governorate</option>
              <option value="fayoum-governorate">Fayoum Governorate</option>
              <option value="minya-governorate">Minya Governorate</option>
              <option value="sohag-governorate">Sohag Governorate</option>
              <option value="luxor-governorate">Luxor Governorate</option>
              <option value="port-said-governorate">
                Port Said Governorate
              </option>
              <option value="qalyubia-governorate">Qalyubia Governorate</option>
              <option value="sharqia-governorate">Sharqia Governorate</option>
              <option value="beni-suef-governorate">
                Beni Suef Governorate
              </option>
            </select>
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Zip</label>
            <input
              type="text"
              placeholder="Zip code"
              className={styles.input}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
