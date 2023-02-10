<?php
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: *");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  include_once 'conexion.php';
  $sql = new SQLConexion();
  $consulta = $sql -> seleccionar("SELECT * FROM proyectos");
  echo json_encode($consulta);
?>