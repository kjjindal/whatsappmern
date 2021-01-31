import axios from 'axios';


const instance=axios.create({
    baseURL:'https://whatsappmern1999.herokuapp.com/'
})

export default instance