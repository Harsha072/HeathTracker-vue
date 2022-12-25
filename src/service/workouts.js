import http from "../http-common";

class WorkoutDataService {
    getAll() {
        console.log()
      return http.get("/workout");
    }

    getAllUserWorkout(id) {
   
      return http.get(`/users/${id}/workout`);
  }

  
    get(id) {
      return http.get(`/workout/${id}`);
    }
  
    create(data) {
      console.log(data)
      return http.post("/workout", data);
    }
  
    update(id, data) {
     
      console.log("id ",id+"  "+" data "+data)
      return http.patch(`/workout/${id}`, data);
    }
  
    delete(id) {
      console.log("delete id ",id)
      return http.delete(`/workout/${id}`);
    }
  
    findById(id) {
      return http.get(`/workout?id=${id}`);
    }
  }
  
  export default new WorkoutDataService();