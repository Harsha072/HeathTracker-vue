import http from "../http-common";

class UsrNotesDataService {
    getAll() {
       
      return http.get("/notes");
    }
    getAllUserNotes(id) {
       
      return http.get(`/users/${id}/notes`);
    }
    deleteUserNotes(id) {
       
      return http.delete(`/users/${id}/notes`);
    }
  
  
    get(id) {
      return http.get(`/notes/${id}`);
    }
  
    create(data) {
      console.log("user note ",data)
      return http.post("/notes", data);
    }
  
    update(id, data) {
     
      console.log("id ",id+"  "+" data "+data)
      return http.patch(`/notes/${id}`, data);
    }
  
    delete(id) {
      console.log("delete id notes ",id)
      return http.delete(`/notes/${id}`);
    }
  
   
  }
  
  export default new UsrNotesDataService();