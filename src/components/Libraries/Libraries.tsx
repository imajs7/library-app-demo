import { useState, useEffect } from 'react';
import ILibrary from '../../models/ILibrary';
import { getLibraries } from '../../services/Library';
import LibraryListItems from './LibraryListItems';
import { Row, Col, Alert, Spinner } from 'react-bootstrap';

const Libraries = () => {

    const [ libraries, setLibraries ] = useState<ILibrary[]>([]);
    const [ error, setError ] = useState<Error | null>( null );
    const [ loading, setLoading ] = useState<boolean>( true );

    useEffect(
        () => {
            const fetchHelper = async () => {
                try{
                    const data = await getLibraries();
                    setLibraries( data );
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
            <h2>List of Libraries</h2>
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
                    <Alert variant="danger">
                        {error.message}
                    </Alert>
                )
            }
            {
                libraries.length > 0 && (
                    <Row xs={1} md={2} lg={3}>
                        {
                            libraries.map( library => (
                                <Col key={library.id} className="d-flex my-3">
                                    <LibraryListItems library={library} />
                                </Col>
                            ))
                        }
                    </Row>
                )
            }
        </div>
     );
}
 
export default Libraries;