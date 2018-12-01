import React, {Component} from 'react';
import Parallax from 'react-springy-parallax'
import { Link } from 'react-router-dom'
import Header from './Header'
export default class HomeComponent extends Component {
	render() {
		const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 24,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
		return (
				<Parallax ref="parallax" pages={3} style={{backgroundColor:'#272727'}}>			
					<Parallax.Layer offset={0} speed={1} style={{backgroundColor: '#243B4A', opacity: '0.5'}}/>
					<Parallax.Layer offset={1} speed={1} style={{backgroundColor: '#805E73', opacity: '0.5'}}/>
					<Parallax.Layer offset={2} speed={1} style={{backgroundColor: '#87BCDE', opacity: '0.5'}}/>

					<Parallax.Layer
					 offset={0}
					 style={styles}
					 speed={0.5}
					 onClick={() => this.refs.parallax.scrollTo(1)}>
					 <Header/>
					 </Parallax.Layer>
					 <Parallax.Layer
					 offset={1}
					 style={styles}
					 speed={1}
					 onClick={() => this.refs.parallax.scrollTo(2)}>
						Voila de France
					 </Parallax.Layer>

					 <Parallax.Layer
					 offset={2}
					 style={styles}
					 speed={1}
					 onClick={() => this.refs.parallax.scrollTo(0)}>
						 Mein Kamph
						 <Link to='/parallax'>Visit the algos page</Link>
					 </Parallax.Layer>
				</Parallax>
			)
	}
}