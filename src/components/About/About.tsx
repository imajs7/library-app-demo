import { useEffect, useState } from "react";
import { Spinner, Alert, Row, Col, Card } from "react-bootstrap";
import { getAttribution } from "../../services/Library";

const About = () => {

    const [ sources, setSources ] = useState<string[]>([]);
    const [ error, setError ] = useState<Error | null>( null );
    const [ loading, setLoading ] = useState<boolean>( true );

    const baseUrl = process.env.REACT_APP_BASE_URL;

    useEffect(
        () => {
            const fetchHelper = async () => {
                try{
                    const data = await getAttribution();
                    setSources( data );
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
            <h3>Sources of images</h3>
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
                sources.length > 0 && (
                    <>
                        {
                            sources.map(
                                (source, idx) => (
                                    <Row xs={1} className="my-2" key={idx}>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Text>
                                                        <a href={source} target="_blank" rel="noreferrer">{source}</a>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                )
                            )
                        }
                    </>
                )
            }
        </>
     );
}
 
export default About;