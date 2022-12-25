import http from "../http-common";

class WorkoutSessionDataService {
    getAll() {
        console.log()
      return http.get("/workoutSession");
    }

    getAllUserWorkoutSession(id) {
        
      return http.get(`users/${id}/workoutSession`);
  }

  
    get(id) {
      return http.get(`/workout/${id}`);
    }
  
    create(data) {
      console.log(data)
      return http.post("/workoutSession", data);
    }
  
    update(id, data) {
     
      console.log("id ",id+"  "+" data "+data)
      return http.patch(`/workoutSession/${id}`, data);
    }
  
    delete(id) {
      console.log("delete id ",id)
      return http.delete(`/workoutSession/${id}`);
    }
  
    findById(id) {
      return http.get(`/workout?id=${id}`);
    }
  }
  
  export default new WorkoutSessionDataService();