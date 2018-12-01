import React, {Component} from 'react';
import logo from './static/img/stars.svg';
import programmer from './static/img/programmer.png'

export default class Header extends Component {

	render() {

		const {classes} = this.props
		return (
				<div style={{display:'block'}}>
					
							<h2 style={{color: 'white',fontSize: '47px',marginTop:'30px', paddingLeft:'70px'}}>IIITV Open Source</h2>
							<h3 style={{color: 'white',fontSize: '32px', marginTop:'30px'}}>Explore the 'Ocean of DS & Algos'</h3>
						
						<img src={programmer} style={{ display: 'block',marginLeft:'80px', width: '25vw'}}/>
						
					 </div>
			)
	}
}