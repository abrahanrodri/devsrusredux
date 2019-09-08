import axios from "axios";

export default {
  postEvent: async function(data) {
      try {
        const response = await axios.post("/api/eventpage", data)
        return response;
      } catch (err) {
          return err;
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
  }
};
