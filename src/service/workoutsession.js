import http from "../http-common";

class WorkoutSessionDataService {
    getAll() {
        console.log()
      return http.get("/api/workoutSession");
    }

    getAllUserWorkoutSession(id) {
        
      return http.get(`/api/users/${id}/workoutSession`);
  }

  
    get(id) {
      return http.get(`/api/workoutSession/${id}`);
    }
  
    create(data) {
      console.log(data)
      return http.post("/api/workoutSession", data);
    }
  
    update(id, data) {
     
      console.log("id ",id+"  "+" data "+data)
      return http.patch(`/api/workoutSession/${id}`, data);
    }
  
    delete(id) {
      console.log("delete id ",id)
      return http.delete(`/api/workoutSession/${id}`);
    }
  
    findById(id) {
      return http.get(`/workout?id=${id}`);
    }
  }
  
  export default new WorkoutSessionDataService();