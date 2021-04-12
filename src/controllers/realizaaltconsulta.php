<?php
    $id= $_POST['id'];
    $nome= $_POST['nome'];
    $endereco= $_POST['endereco'];    
    $fone= $_POST['fone'];
    $sexo= $_POST['sexo'];
    $dn= $_POST['dn'];
    $dentista= $_POST['dentista'];
    $horario= $_POST['horario'];
    $email= $_POST['email'];
    $dia= $_POST['dia'];

    $sql="update consulta set id='$id',nome='$nome',endereco='$endereco',fone='$fone',sexo='$sexo',dn='$dn',dentista='$dentista',horario='$horario',email='$email',dia='$dia' where id=$id";
    $con=mysqli_connect("127.0.0.1","root","","uniodonto");          		
    if (mysqli_connect_errno())	{  echo "Failed to connect to MySQL: " . mysqli_connect_error(); }  
    mysqli_query($con, $sql);

   echo "<center><h2>Consulta alterada com sucesso!</center></h2><p><br>";           
  mysqli_close($con);		
?> 
<center><h2><a href="funcionario.php">VOLTAR</a></h2></center>  
