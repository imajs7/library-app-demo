import React, { useEffect, useState } from "react";
import { Spinner, Alert, Row, Col, Image } from 'react-bootstrap';
import IGenre from "../../models/IGenre";
import { getLibraryGenresById } from "../../services/Library";

type Props = {
    id : number
}

const LibraryGenre = ( { id } : Props ) => {

    const [ genres, setGenres ] = useState<IGenre[]>([]);
    const [ error, setError ] = useState<Error | null>( null );
    const [ loading, setLoading ] = useState<boolean>( true );

    const baseUrl = process.env.REACT_APP_BASE_URL;

    useEffect(
        () => {
            const fetchHelper = async () => {
                try{
                    const data = await getLibraryGenresById( id );
                    setGenres( data );
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
        <div>
            <h3>List of Genres</h3>
            <hr />
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
                genres.length > 0 && (
                    <Row xs={1}>
                        {
                            genres.map(
                                genre => (
                                    <Col key={genre.id} className="my-3">
                                        <Row>
                                            <Col xs={12} md={3}>
                                                <Image src={baseUrl + genre.imageUrl} fluid />
                                            </Col>
                                            <Col xs={12} md={9}>
                                                <h4>{genre.name}</h4>
                                                <p>
                                                    {genre.description}
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            )
                        }
                    </Row>
                )
            }
        </div>
     );
}
 
export default LibraryGenre;