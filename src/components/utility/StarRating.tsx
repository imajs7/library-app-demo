import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

type Props = {
    rating: number,
    noOfRatings: number,
    color: string
};

const StarRating = ( { rating, noOfRatings, color } : Props ) => {

    const numOfFullStar = Math.floor( rating );
    const numOfHalfStar = Math.round( rating ) - numOfFullStar;
    const numOfEmptyStar = 5 - ( numOfFullStar + numOfHalfStar);

    return ( 
        <span style={{ fontSize: '14px' }}>
            {
                new Array( numOfFullStar ).fill( 0 ).map( (star, idx) => (
                    <FontAwesomeIcon icon={faStar} key={idx} style={{ color: color }} />
                ))
            }

            {
                new Array( numOfHalfStar ).fill( 0 ).map( (star, idx) => (
                    <FontAwesomeIcon icon={faStarHalfAlt} key={idx} style={{ color: color }} />
                ))
            }

            {
                new Array( numOfEmptyStar ).fill( 0 ).map( (star, idx) => (
                    <FontAwesomeIcon icon={faStarEmpty} key={idx} style={{ color: color }} />
                ))
            }
            &nbsp; {rating} ({noOfRatings} rated)
        </span>
     );
}
 
export default StarRating;