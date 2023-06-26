var combo = document.getElementById("cboDimensiones");

var cTemplate3=`<div class="content-center">
                          <div class="container">
                              <table class="table table-bordered">
                                  <thead>
                                      <tr>
                                          <th>Puntos</th>
                                          <th>Coordenada X</th>
                                          <th>Coordenada Y</th>
                                          <th id="CZ">Coordenada Z</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td><input type="text" class="form-control" id="lblPA"
                                                  placeholder="Ingrese el nombre del Punto A"></td>
                                          <td><input type="text" class="form-control" id="txtAX"
                                                  placeholder="Ingrese la coordenada X (A)"></td>
                                          <td><input type="text" class="form-control" id="txtAY"
                                                  placeholder="Ingrese la coordenada Y (A)"></td>
                                          <td><input type="text" class="form-control" id="txtAZ"
                                                  placeholder="Ingrese la coordenada Z (A)"></td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td><input type="text" class="form-control" id="lblPB"
                                                  placeholder="Ingrese el nombre del Punto B"></td>
                                          <td><input type="text" class="form-control" id="txtBX"
                                                  placeholder="Ingrese la coordenada X (B)"></td>
                                          <td><input type="text" class="form-control" id="txtBY"
                                                  placeholder="Ingrese la coordenada Y (B)"></td>
                                          <td><input type="text" class="form-control" id="txtBZ"
                                                  placeholder="Ingrese la coordenada Z (B)"></td>
                                          <td></td>
                                      </tr>


                                  </tbody>
                              </table>
                          </div>
                      </div>`;

var cTemplate2=`<div class="content-center">
                          <div class="container">
                              <table class="table table-bordered">
                                  <thead>
                                      <tr>
                                          <th>Puntos</th>
                                          <th>Coordenada X</th>
                                          <th>Coordenada Y</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <input type="text" class="form-control" id="lblPA"
                                                placeholder="Ingrese el nombre del Punto A">
                                          </td>
                                          <td>
                                              <input type="text" class="form-control" id="txtAX"
                                                placeholder="Ingrese la coordenada X (A)">
                                          </td>
                                          <td>
                                              <input type="text" class="form-control" id="txtAY"
                                              placeholder="Ingrese la coordenada Y (A)">
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <input type="text" class="form-control" id="lblPB"
                                              placeholder="Ingrese el nombre del Punto B">
                                          </td>
                                          <td>
                                              <input type="text" class="form-control" id="txtBX"
                                              placeholder="Ingrese la coordenada X (B)">
                                          </td>
                                          <td>
                                              <input type="text" class="form-control" id="txtBY"
                                              placeholder="Ingrese la coordenada Y (B)">
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>`;

        //document.getElementById("tablaPuntos").innerHTML = cTemplate3;

        //$("#table3d").html(cTemplate3);

function ocultarTextbox()
{
  if (combo.value === "2") 
  {
    document.getElementById("tablaPuntos").innerHTML = cTemplate2;
  }
  if (combo.value === "3") 
  {
    document.getElementById("tablaPuntos").innerHTML = cTemplate3;
  }

}

function resultado(){
    
    var valorAX = parseInt(document.getElementById('txtAX').value);
    var valorAY = parseInt(document.getElementById('txtAY').value);

    var valorBX = parseInt(document.getElementById('txtBX').value);
    var valorBY = parseInt(document.getElementById('txtBY').value);


    if (isNaN(valorAX) || isNaN(valorAY) || isNaN(valorBX) || isNaN(valorBY)) {
      alert('Por favor, ingrese valores numéricos válidos en X-Y.');
      return;
    }

    var cuadX=Math.pow((valorBX - valorAX),2);
    var cuadY=Math.pow((valorBY - valorAY),2);

    var sumaCuadrados = cuadX + cuadY;

    if (combo.value === "3") 
    {
      var valorAZ = parseInt(document.getElementById('txtAZ').value);
      var valorBZ = parseInt(document.getElementById('txtBZ').value);

      if (isNaN(valorAZ) || isNaN(valorBZ)) {
        alert('Por favor, ingrese valores numéricos en Z válidos.');
        return;
      }

      var cuadZ=Math.pow((valorBZ - valorAZ),2);
      sumaCuadrados = sumaCuadrados + cuadZ;

    }

  
      // Verificar si los valores son números válidos

  
  var resultado = Math.sqrt(sumaCuadrados) ;

  // Mostrar el resultado
  document.getElementById('distancia').innerHTML = '<h1>El resultado es: ' + resultado+"</h1>";
}

/*
function ocultarTextbox() {
    var combo = document.getElementById("cboDimensiones");
    var txtAZ = document.getElementById("txtAZ");
    var txtBZ = document.getElementById("txtBZ");
    var txtCZ = document.getElementById("CZ");

    if (combo.value == "2") {

        txtAZ.style.display = "none";
        txtAZ.placeholder = "NO Ingrese la coordenada Z (A)";
        txtAZ.style.visibility = false;

        txtBZ.style.display = "none";
        txtBZ.placeholder = "NO Ingrese la coordenada Z (B)";
        txtBZ.style.visibility = false;

        txtCZ.visibility=false;
        txtCZ.style.display="none";







    } else {

        txtAZ.style.display = "block";
        txtAZ.placeholder = "Ingrese la coordenada Z (A)"

        txtBZ.style.display = "block";
        txtBZ.placeholder = "Ingrese la coordenada Z (B)"
*/


