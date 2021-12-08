/**
 * Función que implementa el CRUD para la tabla de consultorios. Se implementa los sig. métodos:
 * 
 * <ul style="list-style: none;">
 *  <li> createConsultorio
 *  <li> deleteConsultorio 
 *  <li> updateConsultorio
 * </ul>
 */
export const CrudConsultorios = {
    createConsultorio: async (body) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
        redirect: "follow",
      };
  
      const res = await fetch(
        "https://guarded-caverns-69109.herokuapp.com/api/consultorios",
        requestOptions
      );
  
      if (res.ok) return res.json();
      else return "Error en el CREATE";
    },
    deleteConsultorio: async (id) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
      };
  
      const res = await fetch(
        `https://guarded-caverns-69109.herokuapp.com/api/consultorios/${id}`,
        requestOptions
      );
  
      if (res.ok) return res.json();
      else return "Error en el DELETE";
    },
    updateConsultorio: async (body, id) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body,
        redirect: "follow",
      };
  
      const res = await fetch(
        `https://guarded-caverns-69109.herokuapp.com/api/consultorios/${id}`,
        requestOptions
      );
  
      if (res.ok) return res.json();
      else return "Error en el UPDATE";
    },
  };
  