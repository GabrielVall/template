
# CRUD con Jquery & Ajax

##### Insertar datos
```javascript
// Selecciona el formulario con el id "miFormulario" y espera a que se envíe
$("#miFormulario").submit(function(e) {
  // Previene que el formulario se envíe normalmente
  e.preventDefault();
  // Serializa los datos del formulario en una cadena de consulta (query string)
  var datos = $(this).serialize();
  // Hace una llamada AJAX a "insertar.php" utilizando el método HTTP POST y envía los datos serializados
  $.ajax({
    type: "POST",
    url: "insertar.php",
    data: datos,
    // Cuando la respuesta del servidor es recibida con éxito, ejecuta esta función
    success: function(response) {
      // Aquí se debe manejar la respuesta del servidor, como actualizar el DOM con los datos recibidos
    }
  });
});
```
```php
<?php
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: *");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  // Recibe los datos POST
  $nombre = $_POST['nombre'];
  $fecha_inicio = $_POST['fecha_inicio'];
  $fecha_fin = $_POST['fecha_fin'];
  $encargado = $_POST['encargado'];

  // Incluye la conexión a la base de datos
  include_once 'conexion.php';
  $sql = new SQLConexion();

  // Construye la consulta SQL para insertar los datos
  $consulta = $sql -> actualizar("INSERT INTO proyectos (nombre, fecha_inicio, fecha_fin, encargado) VALUES ('${nombre}', '${fecha_inicio}', '${fecha_fin}', '${encargado}')");

  // Verifica si la consulta fue exitosa y devuelve la respuesta como JSON
  if($consulta){
    echo json_encode(array('estado' => 'completado'));
  }else{
    echo json_encode(array('estado' => 'error'));
  }
```