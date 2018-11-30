import React, {Component} from 'react';
import Parallax from 'react-springy-parallax'
import logo from './static/img/stars.svg'
//const url = (name, wrap = false) => `${wrap ? 'url(' : ''}./static/img/${name}.svg${wrap ? ')' : ''}`
import Header from './Header';
import Satellite from './static/img/satellite.svg'
import Coding from './static/img/coding.png'
import DryRun from './static/img/code.png'

export default class ParallaxText extends Component {
	render() {
		const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 24,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
		return (
				<Parallax ref='parallax' pages={4}>
					<Parallax.Layer offset={0} speed={1} style={{backgroundColor: '#243B4A', opacity: '0.5'}}/>
					<Parallax.Layer offset={1} speed={1} style={{backgroundColor: '#805E73', opacity: '0.5'}}/>
					<Parallax.Layer offset={2} speed={1} style={{backgroundColor: '#87BCDE', opacity: '0.5'}}/>

					<Parallax.Layer
					 offset={0}
					 speed={0.5}
					 style={styles}
					 onClick={() => this.refs.parallax.scrollTo(1)}>
					 <Header/>
					 </Parallax.Layer>
					 
					 <Parallax.Layer
					 offset={1.05}
					 speed={-0.3}
					 style={{pointerEvents:'none'}}>
					 <img src={Coding} style={{ width:'80', marginLeft: '60%' }}/>
					 </Parallax.Layer>

					  <Parallax.Layer
					 offset={1}
					 speed={0.5}
					 style={styles}
					 onClick={() => this.refs.parallax.scrollTo(2)}>
					 Another One!
					 </Parallax.Layer>

					 <Parallax.Layer
					 offset={1.73}
					 speed={0.5}
					 style={{opacity:0.3}}>
					  	<img src={DryRun} style={{ display: 'block', width: '20%', marginLeft: '10%' }} />
                    	<img src={DryRun} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                 	 </Parallax.Layer>

					 <Parallax.Layer
					 offset={2}
					 speed={0.5}
					 style={styles}
					 onClick={() => this.refs.parallax.scrollTo(0)}>
					 Go Back!
					 </Parallax.Layer>
					
				</Parallax>
			)
	}
}