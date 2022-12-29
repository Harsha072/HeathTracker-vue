import http from "../http-common";

class UserDataService {
  getAll() {
    console.log()
    return http.get("/api/users");
  }

  get(id) {
    return http.get(`/api/users/${id}`);
  }

  create(data) {
    console.log(data)
    return http.post("/api/users", data);
  }

  update(id, data) {


    return http.patch(`/api/users/${id}`, data);
  }

  delete(id) {

    return http.delete(`/api/users/${id}`);
  }

  findById(id) {
    return http.get(`/api/users?id=${id}`);
  }
  findByEmail(email) {
    return http.get(`/api/users/email/${email}`)
  }
}

export default new UserDataService();