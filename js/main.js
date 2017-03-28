function InputName(props) {
	return(
		<form>
			<h1>This is a modal example using React JS</h1>
			<input type="text" placeholder="Input Your Name here" onChange={props.nameInput} />
			<button type="button" onClick={props.doToggle}>Show Name</button>
		</form>
	);
}

function Modal(props) {
	function addActive(e) {
		e.target.classList.add("active");
	}
	
	function removeActive(e) {
		e.target.classList.remove("active");
	}
	
	return(
		<div className="modal active">
			<div className="modal-content active">
				<p className="message-title">Hello {props.name}!</p>
				<p className="center mt32">
					<button
					className="btn"
					onClick={props.doToggle}
					onMouseDown={addActive}
					onMouseUp={removeActive}
					onTouchStart={addActive}
					onTouchEnd={removeActive}
					>Close</button>
				</p>
			</div>
		</div>
	);
}

class AppWrap extends React.Component {
	constructor() {
		super();
		this.toggleModal = this.toggleModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			modalView: false,
			userInput: "",
		};
	}
	
	toggleModal(e) {
		{this.state.modalView ? this.setState({modalView: false}) : this.setState({modalView: true}) }
	}
	
	handleChange(e) {
		this.setState({
			userInput: e.target.value,
		});
	}
	
	render() {
		let modal = null;
		
		if(this.state.modalView) {
			modal = <Modal doToggle={this.toggleModal} name={this.state.userInput} />;
		} else {
			modal = null;
		}
		
		return (
			<div className="formwrap">
				<InputName doToggle={this.toggleModal} nameInput={this.handleChange} />
				{modal}
			</div>
		);
	}
}