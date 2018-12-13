import { HTTP_STATUS_CODES } from '../constants'; 

const API_URL = process.env.REACT_APP_API_URL;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT; 
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

const METHOD = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT"
};

const getRequest = (method, url, body) => {
    let payload = {
        method: method,
        headers: headers
    };
    if (body) {
        payload.body = JSON.stringify(body);
    }
    return fetch(url, payload).then(response => {
        if (response && response.status && response.status === HTTP_STATUS_CODES.SUCCESS) {
            return response.json();
        } else {
            return {
                error: response.status, 
                errorMsg : response.statusText
            }; 
        }
    });
};

class HttpService {
    getData = () => {
        let url = `${API_URL}${API_ENDPOINT}`;
        return getRequest(METHOD.GET, url);
    };
}

export default new HttpService(); 
