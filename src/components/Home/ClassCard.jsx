import React, { Component } from 'react';
import './ClassCard.css'

class ClassCard extends Component {
    state = { 
     } 
    render() { 
        return (
            <React.Fragment>
                <div className="card">
                    <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2132.png" className="card-img-top" alt="UC Logo" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ClassCard;