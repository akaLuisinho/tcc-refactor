<?php
    session_start();
    $con=mysqli_connect("127.0.0.1","root","","uniodonto");          		
    if (mysqli_connect_errno())	{  echo "Failed to connect to MySQL: " . mysqli_connect_error(); } 

    if(empty($_POST['usuario']) || empty($_POST['senha'])){
        header('Location: login.php');
        exit();
    }

    $usuario = mysqli_real_escape_string($con, $_POST['usuario']);
    $senha = mysqli_real_escape_string($con, $_POST['senha']);

    $query = "select *  from login where usuario = '{$usuario}' and senha = '{$senha}'";

    $result = mysqli_query($con, $query);
    
    $row = mysqli_num_rows($result);    

   if($row == 1){
        $_SESSION['usuario'] = $usuario;
        header('Location: funcionario.php');
        exit;
    }
    else{
        header('Location: login.php');
        exit;
    }