import axios from 'axios';
import IGenre from '../models/IGenre';
import ILibrary from '../models/ILibrary';

const baseUrl = process.env.REACT_APP_BASE_URL;

const getLibraries = async () => {
    const response = axios.get(`${baseUrl}/libraries`);
    return (await response).data as ILibrary[];
}

const getLibraryDetailsById = async ( id : string ) => {
    const response = axios.get(`${baseUrl}/libraries/${id}`);
    return (await response).data as ILibrary;
}

const getLibraryGenresById = async ( id : number ) => {
    const response = axios.get(`${baseUrl}/libraries/${id}/genres`);
    return (await response).data as IGenre[];
}

const getAttribution = async () => {
    const response = axios.get(`${baseUrl}/image-sources`);
    return (await response).data as string[];
}
 
export { 
    getLibraries,
    getLibraryDetailsById,
    getLibraryGenresById,
    getAttribution
};