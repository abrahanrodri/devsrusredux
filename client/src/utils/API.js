import axios from "axios";

export default {
  postEvent: async function(data) {
    try {
      const response = await axios.post("/api/eventpage", data);
      return response;
    } catch (err) {
      return err;
    }
  },
  updateEvent: async function(data){
    try {
      const response = await axios.post("/api/events/update", data);
      return response;
    } catch (error) {
      return error;
    }
  },
  getAllEvents: async function() {
    console.log("API folder");
    try {
      const response = await axios.get("/api/events");
      return response;
    } catch (error) {
      return error;
    }
  },
  deleteEvent: async function(id) {
    try {
        const response = await axios.delete("/api/events/delete/"+ id)
        return response;
    } catch (error) {
        return error
    }
  },
  postUserByUID: async function(user){
    try {
      const response = await axios.post("/api/users/loginOrRegister", user);
      return response;
    } catch (error) {
      return error
    }
  }
};
