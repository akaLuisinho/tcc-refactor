<?php		
    $id=$_POST['id'];
    $sql="delete from consulta where id=$id";

    $con=mysqli_connect("127.0.0.1","root","","uniodonto");          		
    if (mysqli_connect_errno())	{  echo "Failed to connect to MySQL: " . mysqli_connect_error(); }  
    
    mysqli_query($con, $sql);

   echo "<center><h2>Consulta deletada com sucesso!</center></h2><p><br>";    
               
  mysqli_close($con);		
?> 
<center><h2><a href="funcionario.php">VOLTAR</a></h2></center>
