import http from "../http-common";

class UsrNotesDataService {
  getAll() {

    return http.get("/api/notes");
  }
  getAllUserNotes(id) {

    return http.get(`/api/users/${id}/notes`);
  }
  deleteUserNotes(id) {

    return http.delete(`/api/users/${id}/notes`);
  }


  get(id) {
    return http.get(`/api/notes/${id}`);
  }

  create(data) {
  
    return http.post("/api/notes", data);
  }

  update(id, data) {

   
    return http.patch(`/api/notes/${id}`, data);
  }

  delete(id) {
    console.log("delete id notes ", id)
    return http.delete(`/api/notes/${id}`);
  }


}

export default new UsrNotesDataService();