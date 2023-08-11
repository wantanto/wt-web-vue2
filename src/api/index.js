import axios from "axios";
// import axios from './lib/axios.js';

export function getRestaurant({ keyword }, res, err) {

    axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.VUE_APP_TOKEN}`;
    axios({
        method: 'get',
        url: `${process.env.VUE_APP_URL}restaurant/?keyword=${keyword}`,

    }).then(response => {
        res(response)
    }).catch(error => {
        err(error)
    })
}