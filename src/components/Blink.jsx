import React from 'react';
// import react-blink from './style/Blink.css'

class Blink extends React.Component {
	constructor(props) {
		super(props);
		this.content = this.props.content || '';
		this.tag = this.props.tag || 'blink';
		this.rate = this.props.rate || '1';
		this.children = this.props.children || [];
	}

	render() {
		const CustomTag = this.tag
		const style = {
			'animation': `blinkingText ${this.rate}s infinite`
		}

		return (
			<CustomTag className="react-blink" style={style}>
				{this.children}
			</CustomTag>
		);
	}
}

export default Blink;
