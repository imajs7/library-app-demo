import React, { useEffect, useState } from "react";
import { Alert, Col, Image, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ILibrary from "../../models/ILibrary";
import { getLibraryDetailsById } from "../../services/Library";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import StarRating from "../utility/StarRating";
import LibraryGenre from "./LibraryGenre";

type Params = {
    id: string
}

const LibraryDetails = () => {

    const [ library, setLibrary ] = useState<ILibrary | null>( null );
    const [ error, setError ] = useState<Error | null>( null );
    const [ loading, setLoading ] = useState<boolean>( true );

    const { id } = useParams<Params>();
    const baseUrl = process.env.REACT_APP_BASE_URL;

    useEffect(
        () => {
            const fetchHelper = async () => {
                try{
                    const data = await getLibraryDetailsById( id );
                    setLibrary( data );
                } catch ( error ) {
                    setError( error as Error );
                } finally {
                    setLoading( false );
                }
            }
            fetchHelper();
        },
        []
    );

    return ( 
        <>
            {
                loading && (
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )
            }
            {
                error && (
                    <Alert variant="danger">{error.message}</Alert>
                )
            }
            {
                library && (
                    <>
                        <h3 className="mb-3">{library?.name}</h3>
                        <Row>
                            <Col xs={12} md={4}>
                                <Image src={baseUrl + library.imageUrl} alt={library.name} fluid />
                            </Col>
                            <Col xs={12} md={8}>
                                {library.description}
                                <Row xs={2} className="my-3">
                                    <Col><FontAwesomeIcon icon={faClock} className="me-2" />{library.opens} - {library.closes}</Col>
                                    <Col><StarRating rating={library.rating} noOfRatings={library.noOfRatings} color="goldenrod" /></Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className="my-3">
                            <LibraryGenre id={library.id}/>
                        </div>
                    </>
                )
            }
        </>
     );
}
 
export default LibraryDetails;