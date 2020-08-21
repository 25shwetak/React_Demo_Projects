import axios from 'axios';

const getProjectsApi = () => {
    return axios({
        method: 'get',
        url: 'https://api.taiga.io/api/v1/projects'
    });
}

export default getProjectsApi;