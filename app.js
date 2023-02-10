function actualizar(){
  fetch('api/proyectos.php').then(response => response.json()).then(datos => {
    let html = "";
    let ancho = datos.length;
    if(ancho > 0){
      datos.forEach(consulta => {
        html += `
        <tr>
          <td>
            ${consulta.nombre}
          </td>
          <td>
          ${consulta.fecha_inicio}
          </td>
          <td>
          ${consulta.fecha_final}
          </td>
          <td>
          <span class="badge bg-${consulta.type}">${consulta.estado}</span>
          </td>
          <td>
          ${consulta.asignado}
          </td>
          <td>
            <a href="#" id="eliminar" class="text-danger" data-id="${consulta.id}"> Eliminar </a>
          </td>
        </tr>
        `;
      });
    }else{
      html = `
        <tr>
          <td style="text-align:center;" colspan="6">No hay datos resgistrados</td>
        </tr>
      `;
    }
    document.getElementById('tabla_proyectos').innerHTML = html;
  });
}
actualizar();
setInterval(actualizar,1000);

$(document).on("click",'#eliminar',function(){
  let id = $(this).data('id');
  $.ajax({
    type: 'GET',
    url:'api/eliminar.php?id=' + id,
    success(){
      actualizar();
    } 
  }); 
});
$(document).on("click",'#insertar',function(){
  
  $.ajax({
    type:'POST',
    url: 'api/insertar.php',
    data: {
      // datos
    },
  })
});