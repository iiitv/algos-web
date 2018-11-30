import React, {Component} from 'react';
import logo from './static/img/stars.svg';
import programmer from './static/img/programmer.png'
const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
    alignItems:'center',
    justifyContent:'center',
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});

export default class Header extends Component {

	render() {

		const {classes} = this.props
		return (
				<div style={{display:'block'}}>
					
							<h2 style={{fontSize: '47px',marginTop:'30px', paddingLeft:'70px'}}>IIITV Open Source</h2>
							<h3 style={{fontSize: '32px', marginTop:'30px'}}>Explore the 'Ocean of DS & Algos'</h3>
						
						<img src={programmer} style={{ display: 'block',marginLeft:'80px', width: '25vw'}}/>
						
					 </div>
			)
	}
}