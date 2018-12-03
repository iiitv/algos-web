import React, {Component} from 'react';
import logo from '../../static/img/stars.svg';
import programmer from '../../static/img/programmer.png'

export default class Header extends Component {

	render() {

		const {classes} = this.props
		return (
				<div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
							<div>
							<h2 style={{color: 'white',fontSize: '47px'}}>IIITV Open Source</h2>
							<h3 style={{color: 'white',marginTop:'0px',fontSize: '32px'}}>Welcomes You</h3>
							</div>
						<img src={programmer} style={{ display: 'block',marginLeft:'100px', width: '25vw'}}/>
						
					 </div>
			)
	}
}