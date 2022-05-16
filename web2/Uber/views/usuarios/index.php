<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuarios</title>
    <link rel="stylesheet" href="usuarios.css">
</head>
<body>
    <?php
        require '../nav.php';
        require "../../controllers/Usuario.php";
        $usuario = new UsuarioController();
        if (isset($_POST["nombre"])) {
            # code...
            $user = new Usuario($_POST["nombre"],$_POST["correo"],$_POST["clave"]);
            $usuario->crear($user);
            
            echo "usuario creado";
            header("Location: /views/usuarios.php");
            die();
        }
    ?>
    <main class="m-4 row">
    <div class="col-8">
        <div  class="my-custom-scroll-bar overflow-auto" style="height:70vh !important;">
        <table class="table table-dark table-hover mt-4 ">
            <thead class="sticky-top">
                <tr>
                    <?php
                    $usuarios = $usuario->obtenerTodos();
                    $fields = $usuarios[0];
                    foreach ($fields as $key => $value) {
                    ?>
                        <th scope="col"><?=$key?></th>
                    <?php
                    }
                    ?>
                    
                </tr>
            </thead>
            <tbody >
                <?php
                foreach ($usuarios as $value) {
                ?>
                    
                    <tr  style="cursor:pointer;" onclick='location.href="/views/usuarios/usuario.php?id=<?=$value["Id"];?>"'>
                        <?php
                        foreach ($fields as $key => $v) {
                        ?>
                            <th scope="row"><?=$value["$key"]?></th>
                        <?php
                        }
                        ?>
                    </tr>
                <?php
                }
                ?>
                
                
            </tbody>
        </table>
        </div>
        <h3>Usuarios:<?=count($usuarios);?></h3>
    </div>
        
    <div class="col-4" >
            <form class=" shadow rounded d-flex flex-column p-4" action="/views/usuarios.php" method="post" >
                <h1>Crear Usuario</h1>
                <input class="form-control my-2" placeholder="nombre" name="nombre" type="text">
                <input class="form-control my-2" placeholder="correo" name="correo" type="text">
                <input class="form-control my-2" placeholder="clave" name="clave" type="password">
                <button class="btn btn-primary">Crear</button>
            </form>
        </div>
    </main>
  
</body>
</html>