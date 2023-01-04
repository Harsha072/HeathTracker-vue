import http from "../http-common";

class ActivityDataService {
    getAll() {
       
      return http.get("/api/activites");
    }
    getAllUserActivity(id) {
       
      return http.get(`/api/users/${id}/activities`);
    }
    deleteUserActivity(id) {
       
      return http.delete(`/api/users/${id}/activities`);
    }
  
  
    get(id) {
      return http.get(`/api/activites/${id}`);
    }
  
    create(data) {
      console.log(data)
      return http.post("/api/activities", data);
    }
  
    update(id, data) {
     
      console.log("id ",id+"  "+" data "+data)
      return http.patch(`/api/activities/${id}`, data);
    }
  
    delete(id) {
      console.log("delete id ",id)
      return http.delete(`/api/activities/${id}`);
    }
  
    findById(id) {
      return http.get(`/activities?id=${id}`);
    }
  }
  
  export default new ActivityDataService();