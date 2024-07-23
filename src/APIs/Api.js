// src/config/apiUrls.js

const BASE_URL = 'http://localhost:9000';
// const BASE_URL = 'https://foodbe-8h5f.onrender.com';


const API_URLS = {
    BASE_URL :`${BASE_URL}`,
    FETCH_FOOD_DATA: `${BASE_URL}/fooddata`,
    FETCH_USER_DATA: `${BASE_URL}/signup`,
  // Add more API endpoints as needed
};

export default API_URLS;
