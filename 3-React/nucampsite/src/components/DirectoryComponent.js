import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Directory extends Component {

    render () {
        const directory = this.props.campsites.map(campsite => {
        return (
            // we put an id on line 13 for arrow function to pass the prop for campsite ID to run since Directory Component no longer runs the state.id
            <div key={campsite.id} className="col-md-5 m-1">
                <Card onClick={() => this.props.onClick(campsite.id)}>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                    <CardImgOverlay>
                        <CardTitle>{campsite.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                    </div>

            </div>
        );
    }
}

export default Directory;