<?php


class Conexion {
    private $servername = "ec2-3-141-200-64.us-east-2.compute.amazonaws.com";
    private $username = "ubuntu";
    private $password = "P@ssw0rd";
    private $db = "uberdb";
    public $conn;
    public function __construct() {
        // Create connection
        $this->conn = new mysqli($this->servername, $this->username, $this->password,$this->db);
        // Check connection
        if ($this->conn->connect_error) {
          die("Connection failed: " . $this->conn->connect_error);
        }
        
        
    }

}

?>