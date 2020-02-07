import React from "react";
import styles from "../styles/Crud.module.scss";
import { createUser, updateUser, deleteUser, toggleSelectedUser, setFirstName, setLastName, setFilter} from "../actions/crudActions";
import { connect } from "react-redux";

class crud extends React.Component {
	constructor(props) {
		super(props);
		this.state = { createBtnEnabled: false };
	}

	render() {
		let usersList = null;
		let filter = this.props.filter.trim();

		if(this.props.users.length > 0) {
			usersList = (
				this.props.users.map( (user, index) => {
					if(filter !== ''){
						if (user.fullName.includes(filter)) {
							return (
								<li className={`list-item ${styles["list-item"]}`} key={index}>
									<button type="button"
													onClick={() => { this.props.toggleSelectedUser(user) }}
													className={user.selected ? styles.active : null}>{user.fullName}
									</button>
								</li>
							)
						}
					}
					else {
						return (
							<li className={`list-item ${styles["list-item"]}`} key={index}>
								<button type="button"
												onClick={() => {
													this.props.toggleSelectedUser(user)
												}}
												className={user.selected ? styles.active : null}>{user.fullName}
								</button>
							</li>
						)
					}
					return null
				})
			)
		}

		let createDisabled = (this.props.nameFirst === '' || this.props.nameLast === '');

		return <div className={styles["comp-crud"]}>
			<div className="row">
				<div className="col-12">
					<label htmlFor="filter-users">Filter Prefix:&nbsp;
						<input id="filter-users"
									 value={this.props.filter}
									 onChange={(event) => this.props.setFilter(event.target.value)}
									 type="text"/>
					</label>
				</div>
			</div>
			<div className="row">
				<div className={`col-6 ${styles["users-list"]}`}>
					<ul className="list-unstyled">
						{ usersList }
					</ul>
				</div>
				<div className="col-6">
					<ul className="list-unstyled">
						<li className="list-item">
							<label htmlFor="first-name">
								Name:&nbsp;
									<input id="first-name"
									 type="text"
									 value={this.props.nameFirst}
									 onChange={(event) => this.props.setFirstName(event.target.value)}
								/>
							</label>
						</li>
						<li className="list-item">
							<label htmlFor="last-name">
								Surname:&nbsp;
								<input id="last-name"
											 type="text"
											 value={this.props.nameLast}
											 onChange={(event) => this.props.setLastName(event.target.value)}
								/>
							</label>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<ul className="list-inline">
						<li className="list-item">
							<button type="button"
											disabled={createDisabled}
											onClick={this.props.createUser}
											className="btn btn-primary-outline">
								Create
							</button>
						</li>
						<li className="list-item">
							<button type="button"
											disabled={this.props.updateDeleteDisabled}
											onClick={this.props.updateUser}
											className="btn btn-primary-outline">
								Update
							</button>
						</li>
						<li className="list-item">
							<button type="button"
											disabled={this.props.updateDeleteDisabled}
											onClick={this.props.deleteUser}
											className="btn btn-primary-outline">
								Delete
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		nameFirst: state.crud.nameFirst,
		nameLast: state.crud.nameLast,
		filter: state.crud.filter,
		users: state.crud.users,
		userExists: state.crud.userExists,
		updateDeleteDisabled: state.crud.updateDeleteDisabled
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFilter: (name) => {
			dispatch(setFilter(name))
		},
		setFirstName: (name) => {
			dispatch(setFirstName(name))
		},
		setLastName: (name) => {
			dispatch(setLastName(name))
		},
		createUser: (user) => {
			dispatch(createUser(user))
		},
		updateUser: (user) => {
			dispatch(updateUser(user))
		},
		deleteUser: (user) => {
			dispatch(deleteUser(user))
		},
		toggleSelectedUser: (user) => {
			dispatch(toggleSelectedUser(user))
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(crud)