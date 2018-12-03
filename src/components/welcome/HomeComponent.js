import React, {Component} from 'react';
import Parallax from 'react-springy-parallax'
import { Link } from 'react-router-dom'
import Header from './Header'
import stars from '../../static/img/Endless-Constellation.svg'
import Coding from '../../static/img/coding.png'
import DryRun from '../../static/img/code.png'
import Screen from '../../static/img/screen.png'
import Footer from './Footer'

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
				<Parallax ref="parallax" pages={3} style={{backgroundImage: `url(${stars})` }}>			
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
					offset={1.05}
					style={{pointerEvents:'none'}}
					speed={-0.3}>
					<img alt="text-editor" src={Coding} style={{opacity:'0.6',width:'80', marginLeft: '60%'}}/>
					</Parallax.Layer>

					 <Parallax.Layer
					 offset={1}
					 style={styles}
					 speed={1}
					 onClick={() => this.refs.parallax.scrollTo(2)}>
						Explore the 'Ocean of Data Structures and Algorithms'
					 </Parallax.Layer>

					 <Parallax.Layer
					 offset={1.75}
					 speed={1.6}
					 >
						 <img alt="file_1" src={DryRun} style={{opacity:'0.6', width:'20%', marginLeft:'10%'}}/>
						 <img alt="file_2" src={DryRun} style={{opacity:'0.6', width:'20%', marginLeft:'40%'}}/>
					 </Parallax.Layer>

					<Parallax.Layer
					offset={2.2}
					speed={+0.6}
					
					>
					<img alt="laptop" src={Screen} style={{opacity:'0.6', width:'40%', marginLeft:'30%'}}/>
					</Parallax.Layer>

					 <Parallax.Layer
					 offset={2}
					 style={styles}
					 speed={1}
					 onClick={() => this.refs.parallax.scrollTo(0)}>
						<div>
							<Footer/>
							<br/><br/>
						<Link to='/home'>Visit the Home page</Link>
						</div>
					 </Parallax.Layer>
				</Parallax>
			)
	}
}