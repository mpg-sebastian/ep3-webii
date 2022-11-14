import React, { useState, useEffect } from "react";
import Users from "./Users";

function About() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState([]);

  useEffect(() => {
      leerServicio();
  }, [])

  const leerServicio = () => {
      const rutaServicio = "https://my-json-server.typicode.com/mpg-sebastian/open-json-placeholder/users";
      fetch(rutaServicio)
          .then(response => response.json())
          .then(data => {
              console.log(data);
              setListaUsuarios(data);
          });
  }

  const seleccionarUsuario = (event, item) => {
      // console.log(item);
      setUsuarioSeleccionado(item);

      var itemsLista = document.querySelectorAll("#lista-categorias li");
      itemsLista.forEach( item => {
          item.classList.remove("active");
      })

      event.currentTarget.classList.add("active");
      //event.currentTarget hace referencia al objeto que recibió el evento
      //classList.add("active") indica que a la lista de clases se está añadiendo 
      //la clase active
  }


  return (
      <section id="tienda" className='padded'>
          <div className="container">
              <h2>About</h2>
              <div className="row">
                  <div className="col-md-3">
                  <ul className="list-group" id="lista-categorias">

                  {listaUsuarios.map(item =>
                      <li className="list-group-item" key={item.id} 
                          onClick = {(event) => seleccionarUsuario(event, item)}>
                          <h5 className="fw-bold">{item.name}</h5>
                          <p>{item.username}</p>
                          <small>{item.phone}</small>
                      </li>
                  )}

                  </ul>
                  </div>
                  <div className="col-md-9">
                      <h3>{usuarioSeleccionado.name}</h3>
                      <Users usuario={usuarioSeleccionado.id} />
                  </div>
              </div>
          </div>
      </section>
  )
}

export default About;
