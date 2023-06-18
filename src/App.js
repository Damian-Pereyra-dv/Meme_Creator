import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import html2canvas from  "html2canvas"; 

function App() {
  const [linea1, setinea1] = useState("");
  const [linea2, setinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setinea2(evento.target.value);
  };

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  const onClickExportar = function (evento) {
    alert("El MEME se descargara al aceptar: ");
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
    

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img; 
      link.click();
  });
  };



  return (

    
    <div className="App">
      <br />
      
      <h1>MEME CREATOR!</h1>
      <br />
      <select onChange={onChangeImagen}>
      <option placeholder="Seleccione la foto"> Seleccione la GatiFoto</option>
        <option value="alonzo1">Alonso Pachorrita</option>
        <option value="gordita1">Gorda podrida</option>
        <option value="mimita1">Devil Mimita</option>
        <option value="mimitayalonzo1">wtf cats</option>
      </select>
      <br />
      <br />
      <input
        onChange={onChangeLinea1}
        type="text"
        placeholder=" Linea 1"
      />{" "}
      <br />
      <br />
      <input
        onChange={onChangeLinea2}
        type="text"
        placeholder=" Linea 2"
      />{" "}
      <br />
      <br />
      
      <button onClick={onClickExportar}> Descargar </button>
      <br />
      <br />
      
      <div className="meme" id="meme">
     
        <span className="linea1">{linea1}</span> 
        <img src= {"/img/" +imagen+ ".jpg"} />
        
        <span className="linea2">{linea2}</span>
        
      </div>
    </div>
  );
}

export default App;
