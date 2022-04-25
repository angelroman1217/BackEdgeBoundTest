import React, { useEffect, useState } from 'react'

function App() {
  //variable para buscar el nombre por 'name' segun el atributo del objeto en el API (Se puede modificar por cualquier valor de 'name;)
  const filter = "Samsung Galaxy";
  //termina variable filter

  //varible para almacenar la categoría del filter
  const [categ, setCateg] = useState("") 
  //termina variable categ

  //Se hace la peticion al API para que retorne el objeto de los productos utilizando fetch con promesas
  const [backendData, setBackendData] = useState([{}])
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        //Se pasa el contenido del API en data
        setBackendData(data)
        
        //se obtienen las categorias del objeto
        data.product.forEach(element => {
          if (element.name === filter) {
            setCateg(element.category)
          }
        });
      }
    )
  }, [])



  return (
    <div>
    {(typeof backendData.product === 'undefined') ? (
      <p>Loading...</p>
    ) : (
      backendData.product.map((product, i) => (
        <div key={i}>
          <span>{( product.name === filter) ? (<p><b>Producto Encontrado</b><br></br> Nombre: {product.name}<br></br>Categoría: {product.category}</p>) : ("")}</span>
          <br></br>
          <span>{( filter !== product.name && product.category === categ) ? (<p><b>Producto Sugerido</b><br></br> Nombre: {product.name}<br></br>Categoría: {product.category}</p>) : ("") }</span>
        </div>
      ))
    )}

    </div>
  )
}

export default App