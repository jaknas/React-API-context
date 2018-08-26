import React, { Component } from "react";

// make new context
const MyContext = React.createContext();

// create a provider component
class MyProvider extends Component {
	state = {
		name: "Kuba",
		age: 19,
		cool: true
	};
	render() {
		return (
			<MyContext.Provider
				value={{
					state: this.state,
					growAYearOlder: () =>
						this.setState({
							age: this.state.age + 1
						})
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

const Family = props => (
	<div className="family">
		<Person />
	</div>
);

class Person extends Component {
	render() {
		return (
			<div className="person">
				<MyContext.Consumer>
					{context => (
						<React.Fragment>
							<p>Age: {context.state.age}</p>
							<p>Name: {context.state.name}</p>
							<button onClick={context.growAYearOlder}>imButton</button>
						</React.Fragment>
					)}
				</MyContext.Consumer>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<MyProvider>
				<div>
					<p>I'm the app</p>
					<Family />
				</div>
			</MyProvider>
		);
	}
}
export default App;
