import http from "../http-common";

class ActivityDataService {
    getAll() {
       
      return http.get("/activities");
    }
    getAllUserActivity(id) {
       
      return http.get(`/users/${id}/activities`);
    }
    deleteUserActivity(id) {
       
      return http.delete(`/users/${id}/activities`);
    }
  
  
    get(id) {
      return http.get(`/activities/${id}`);
    }
  
    create(data) {
      console.log(data)
      return http.post("/activities", data);
    }
  
    update(id, data) {
     
      console.log("id ",id+"  "+" data "+data)
      return http.patch(`/activities/${id}`, data);
    }
  
    delete(id) {
      console.log("delete id ",id)
      return http.delete(`/activities/${id}`);
    }
  
    findById(id) {
      return http.get(`/activities?id=${id}`);
    }
  }
  
  export default new ActivityDataService();