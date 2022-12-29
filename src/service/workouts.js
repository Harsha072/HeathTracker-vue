import http from "../http-common";

class WorkoutDataService {
  getAll() {
    console.log()
    return http.get("/api/workout");
  }

  getAllUserWorkout(id) {

    return http.get(`/api/users/${id}/workout`);
  }


  get(id) {
    return http.get(`/api/workout/${id}`);
  }

  create(data) {

    return http.post("/api/workout", data);
  }

  update(id, data) {


    return http.patch(`/api/workout/${id}`, data);
  }

  delete(id) {

    return http.delete(`/api/workout/${id}`);
  }

  findById(id) {
    return http.get(`/api/workout?id=${id}`);
  }
}

export default new WorkoutDataService();