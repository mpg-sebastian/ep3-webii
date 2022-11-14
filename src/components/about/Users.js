import React, { useState, useEffect } from "react";

function Users({ usuario }) {
  // console.log(categoriaProducto);
  const [listaPostsUsuarios, setListaPostsUsuarios] = useState({});
  let idUsuario = usuario; // Id de la categoria de productos

  useEffect(() => {
    leerServicio(idUsuario);
  }, [idUsuario]);

  const leerServicio = (id) => {
    const rutaServicio = `https://my-json-server.typicode.com/mpg-sebastian/open-json-placeholder/posts/${id}`;
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListaPostsUsuarios(data);
      });
  };

  const dibujarTabla = () => (
    <table className="table">
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Post</th>
          <th className="text-end">Contenido</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(listaPostsUsuarios).map((item, index) => (
          <tr key={index}>
            <td>{listaPostsUsuarios[item]}</td>
            <td>{listaPostsUsuarios[item]}</td>
            <td>{listaPostsUsuarios[item]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const dibujarCuadricula = () => (
    <div
      id="cards-productos"
      className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4"
    >
      {Object.keys(listaPostsUsuarios).map((item, index) => (
        <div className="col" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{listaPostsUsuarios.title}</h5>
              <p className="card-text"> {listaPostsUsuarios.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Cuadrícula
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Tabla
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          {dibujarCuadricula()}
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          {dibujarTabla()}
        </div>
      </div>
    </>
  );
}

export default Users;
