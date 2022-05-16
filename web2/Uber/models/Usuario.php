
<?php

    class Usuario {
        public $nombre = "";
        public $correo = "";
        public $clave = "";
        public $estado = true;
        
        public function __construct($nombre,$correo,$clave,$estado = true) {
            $this->nombre = $nombre;
            $this->correo = $correo;
            $this->clave = $clave;
            $this->estado = $estado;
            echo "<div>Usuario inicializado</div>";
        }
    }
?>