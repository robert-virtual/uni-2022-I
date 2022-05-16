<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuario</title>
</head>
<body>
    <?php
        require '../nav.php';
        
    ?>
    <h1>Usuario</h1>
    <form class=" shadow rounded d-flex flex-column p-4" action="/views/usuarios.php" method="post" >
                <h1>Crear Usuario</h1>
                <input class="form-control my-2" placeholder="nombre" name="nombre" type="text">
                <input class="form-control my-2" placeholder="correo" name="correo" type="text">
                <input class="form-control my-2" placeholder="clave" name="clave" type="password">
                <button class="btn btn-primary">Crear</button>
    </form>
</body>
</html>