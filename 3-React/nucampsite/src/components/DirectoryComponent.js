import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({campsite, onClick}) {
    return(
        <Card onClick={() => onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

        const directory = props.campsites.map(campsite => {
        return (
            // we put an id on line 13 for arrow function to pass the prop for campsite ID to run since Directory Component no longer runs the state.id
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
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

export default Directory;