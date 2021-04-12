<html>
    <head>
        <title>Cadastrar Consulta - Uniodonto Campinas</title>
    </head>

    <body>
    <?php
        $nome= $_POST['nome'];
        $endereco=$_POST['endereco'];    
        $fone=$_POST['fone'];
        $sexo= $_POST['sexo'];
        $dn= $_POST['dn'];
        $email= $_POST['email'];
        $dentista= $_POST['dentista'];
        $dia=$_POST['dia'];
        $horario= $_POST['horario'];

        $sql ="insert into consulta(nome,endereco,fone,sexo,dn,email,dentista,dia,horario) values('$nome','$endereco','$fone','$sexo','$dn','$email','$dentista','$dia','$horario')";

        $con=mysqli_connect("127.0.0.1","root","","uniodonto");
        if (mysqli_connect_errno())	{  echo "Failed to connect to MySQL: " . mysqli_connect_error(); }  
        
        mysqli_query($con, $sql);
        echo "<center><h2>Você receberá um e-mail para confirmação!</center></h2><p><br>";   

        mysqli_close($con);
?>              
    <center><h2><a href="index.php">VOLTAR</a></h2></center>
    </body>
</html>