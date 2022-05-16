<?php
require '../../config/db.php';
require '../../models/Usuario.php';
//
class UsuarioController extends Conexion{

        public function __construct() {
            parent::__construct();
        }      
        
        
        public function crear(Usuario $user){
            # code...
            $stmt = $this->conn->prepare("INSERT INTO usuarios (nombre, correo, clave) VALUES (?, ?, ?)");
            
            
            $stmt->bind_param("sss", $user->nombre, $user->correo, password_hash($user->clave, PASSWORD_DEFAULT));
            $stmt->execute();
            $stmt->close();
            $this->conn->close();
            echo "usuario creado";
            
        }
        
        public function obtenerTodos(){
            # code...
            $sql = "SELECT Id,Nombre,Correo,Estado FROM usuarios";
            $result = $this->conn->query($sql);
            $usuarios = [];
            if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    $usuarios[] = $row;
                }
            }
            $this->conn->close();
            return $usuarios;
            
        }

        public function obtenerUno($id){
            # code...
            $sql = "SELECT Id,Nombre,Correo,Estado FROM usuarios where id = ? ";
            $stmt = $this->conn->prepare($sql);
         
            $stmt->bind_param("sss", $user->nombre, $user->correo, password_hash($user->clave, PASSWORD_DEFAULT));
            
            $result = $this->conn->query($sql);
            $usuarios = [];
            if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    $usuarios[] = $row;
                }
            }
            $this->conn->close();
            return $usuarios;
            
        }
        

        public function eliminar()
        {
            # code...
            echo "obtenerTodos";
            
        }
}

?>