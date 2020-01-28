import React from "react";
import { connect } from "react-redux";
import styles from "../styles/Increment.module.scss";

class Increment extends React.Component {
	render() {
		return <div className={`row ${styles['comp-increment']}`}>
			<input readOnly={true} type="text" id="increment" value={this.props.count}/>
			<div className={styles.compIncrement}>
				<button
					onClick={() => this.props.incrementCount()}
					className="btn btn-primary-outline">
					Increment
				</button>
			</div>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		count: state.count.incrementCount
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		incrementCount: (name) => {
			dispatch({
				type: "INCREMENT_COUNT",
				payload: 0
			})
		}
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Increment);