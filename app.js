function actualizar(){
  fetch('api/proyectos.php').then(response => response.json()).then(datos => {
    let html = "";
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
          <a href="#" class="text-danger"> Eliminar </a>
        </td>
      </tr>
      `;
    });
    document.getElementById('tabla_proyectos').innerHTML = html;
  });
}
actualizar();
setInterval(actualizar,1000);