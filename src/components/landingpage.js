import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
        <div
            style={{width:'100%', margin: 'auto' }}>
            <Grid className="Landing-grid">
            <Cell col={12}>
            <img
            src="https://tse2.mm.bing.net/th?id=OIP.twJjLDeWaaev9nHQAdCCogHaHa&pid=15.1&P=0&w=300&h=300" alt="avatar"  className="avatar-img" />
            <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>HTML/CSS | Bootstrap | Javascript | React Native | NodeJS | Express | MongoDB</p>
            <div className="social-links">
            {/*LinkedIn*/}
            <a href="http://google.com"  rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            {/*GitHub*/}
            <a href="http://google.com"  rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            </div>
            </div>
            </Cell>
            </Grid>
        </div>
        )
    }
}
export default Landing; 