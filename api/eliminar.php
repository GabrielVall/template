<?php
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: *");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  $id = $_GET['id'];
  include_once 'conexion.php';
  $sql = new SQLConexion();
  $consulta = $sql -> actualizar("DELETE FROM proyectos WHERE id = ${id}");
  if($consulta){
    echo json_encode(array('estado' => 'completado'));
  }else{
    echo json_encode(array('estado' => 'error'));
  }
?>