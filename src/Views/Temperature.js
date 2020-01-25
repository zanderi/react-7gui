import React from "react";
import styles from "../Styles/Temperature.module.scss"
import Celsius from "../Components/Celsius"
import Fahrenheit from "../Components/Fahrenheit"

const temperature = () => {
	return <section className={styles['comp-temp']}>
		<Celsius />
		=
		<Fahrenheit />
	</section>
};

export default temperature;