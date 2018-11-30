import React, {Component} from 'react';
import Parallax from 'react-springy-parallax'

export default class HomeComponent extends Component {
	render() {
		return (
				<Parallax ref="parallax" pages={3}>			
					<Parallax.Layer offset={0} speed={1} style={{backgroundColor: '#243B4A', opacity: '0.5'}}/>
					<Parallax.Layer offset={1} speed={1} style={{backgroundColor: '#805E73', opacity: '0.5'}}/>
					<Parallax.Layer offset={2} speed={1} style={{backgroundColor: '#87BCDE', opacity: '0.5'}}/>
				</Parallax>
			)
	}
}