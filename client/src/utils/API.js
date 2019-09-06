import axios from 'axios';

export default {
    getAllEvents: async function(){
        console.log("API folder")
        try {
            const response = await axios.get("/api/events");
            return response;
        } catch (error) {
            return error;
        }
    }
}