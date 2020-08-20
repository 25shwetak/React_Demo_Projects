import axios from 'axios';

const getProjects = (url, headers) => {
    return axios.get({
        url,
        headers
    });
}
  
export default getProjects;