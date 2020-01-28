import React from "react";
import styles from "../styles/Crud.module.scss";

const crud = () => {
	return <div className={styles["comp-crud"]}>
		<div className="row">
			<div className="col-12">
				<label htmlFor="filter-users">Filter Prefix: <input id="filter-users" type="text"/></label>
			</div>
		</div>
		<div className="row">
			<div className={`col-6 ${styles["users-list"]}`}>
				<ul className="list-unstyled">
					<li className={`list-item ${styles["list-item"]}`}>
						<button type="button">

						</button>
					</li>
				</ul>
			</div>
			<div className="col-6">
				<ul className="list-unstyled">
					<li className="list-item">
						<label htmlFor="first-name">
							Name: <input id="first-name" type="text" />
						</label>
					</li>
					<li className="list-item">
						<label htmlFor="last-name">
							Surname: <input id="last-name" type="text" />
						</label>
					</li>
				</ul>
			</div>
		</div>
		<div className="row">
			<div className="col-12">
				<ul className="list-inline">
					<li className="list-item">
						<button type="button" className="btn btn-primary-outline">
							Create
						</button>
					</li>
					<li className="list-item">
						<button type="button" className="btn btn-primary-outline">
							Update
						</button>
					</li>
					<li className="list-item">
						<button type="button" className="btn btn-primary-outline">
							Delete
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
};

export default crud;