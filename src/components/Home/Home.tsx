import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return ( 
        <>
            <h1>Library App <FontAwesomeIcon icon={faBook}/></h1>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit assumenda libero ratione numquam neque animi beatae ducimus ea incidunt ut velit officia voluptas optio, est, exercitationem cupiditate consectetur ipsam!
            </p>
        </>
     );
}
 
export default Home;