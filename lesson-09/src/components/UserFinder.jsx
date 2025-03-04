import {Component, Fragment, useEffect, useState} from "react";

import classes from './UserFinder.module.css';
import Users from "./Users";
import UserContext from "../store/user-context";
import ErrorBoundary from "./ErrorBoundary";


class UserFinder extends Component {
	static contextType = UserContext;
	
	constructor() {
		super();
		this.state = {
			filteredUsers: [],
			searchTerm: '',
		};
	}
	
	componentDidMount() {
		// Send http request
		this.setState({filteredUsers: this.context.users});
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
			})
		}
	}
	
	searchChangeHandler(event) {
		this.setState({searchTerm: event.target.value});
	}
	
	
	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input type='search' onChange={this.searchChangeHandler.bind(this)}/>
				</div>
				<ErrorBoundary>
					<Users users={this.state.filteredUsers}/>
				</ErrorBoundary>
			</Fragment>
		)
	}
}

// const UserFinder = () => {
// 	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
// 	const [searchTerm, setSearchTerm] = useState('');
//
// 	useEffect(() => {
// 		setFilteredUsers(
// 			DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
// 		);
// 	}, [searchTerm]);
//
// 	const searchChangeHandler = (event) => {
// 		setSearchTerm(event.target.value);
// 	}
//
//
// 	return (
// 		<>
// 			<div className={classes.finder}>
// 				<input type='search' onChange={searchChangeHandler} />
// 			</div>
// 			<Users users={filteredUsers}/>
// 		</>
// 	)
// };


export default UserFinder;
