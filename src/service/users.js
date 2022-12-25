import http from "../http-common";

class UserDataService {
    getAll() {
        console.log()
      return http.get("/users");
    }
  
    get(id) {
      return http.get(`/users/${id}`);
    }
  
    create(data) {
      console.log(data)
      return http.post("/users", data);
    }
  
    update(id, data) {
     
      console.log("id ",id+"  "+" data "+data)
      return http.patch(`/users/${id}`, data);
    }
  
    delete(id) {
      console.log("delete id ",id)
      return http.delete(`/users/${id}`);
    }
  
    findById(id) {
      return http.get(`/users?id=${id}`);
    }
    findByEmail(email) {
      return http.get(`/users/email/${email}`)
    }
  }
  
  export default new UserDataService();