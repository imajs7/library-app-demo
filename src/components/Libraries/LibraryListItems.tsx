import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ILibrary from "../../models/ILibrary";
import StarRating from "../utility/StarRating";

type Props = {
    library: ILibrary
}

const baseUrl = process.env.REACT_APP_BASE_URL;

const LibraryListItems = ( { library } : Props ) => {
    return ( 
        <Card>
            <Card.Img variant="top" src={baseUrl + library.imageUrl} />
            <Card.Body>
                <div className="d-flex align-items-center" style={ {gap: '20px'} }>
                    <Card.Title style={{fontSize: '16px'}}>{library.name}</Card.Title>
                    <Link to={`/libraries/${library.id}`} className="btn btn-primary btn-sm" style={ { whiteSpace: 'nowrap' } }>Know more</Link>
                </div>
                <StarRating rating={library.rating} noOfRatings={library.noOfRatings} color="goldenrod" />
                <Card.Text>
                    {library.location}
                </Card.Text>
            </Card.Body>
        </Card>
     );
}
 
export default LibraryListItems;