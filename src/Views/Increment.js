import React from "react";
import styles from  "../Styles/Increment.module.scss";

const increment = () => {
	return <div className={`row ${styles['comp-increment']}`}>
		<input type="text" id="increment" />
		<div className={styles.compIncrement}>
		<button
			className="btn btn-primary-outline">
		Increment</button>
		</div>
	</div>
};

export default increment