<?php
    session_start();
    include('verifica_login.php')
?>
<center>
<h2>Olá, <?php echo $_SESSION['usuario'];?>
<html>
    <head>
        <title>Painel do Funcionário - Uniodonto Campinas</title>
    </head>

    <body style="background-color:#d0f4fa;">
        <?php 
            $con=mysqli_connect("127.0.0.1","root","","uniodonto");          		
            if (mysqli_connect_errno())	{  echo "Failed to connect to MySQL: " . mysqli_connect_error(); }  

            $result = mysqli_query($con,"SELECT * FROM consulta");  
        ?>
        <table border="2" bordercolor="red">	

        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Endereco</th>
            <th>Telefone</th>
            <th>Sexo</th>
            <th>Data de Nascimento</th>
            <th>E-mail</th>
            <th>Dentista</th>
            <th>Horario</th>
            <th>Data</th>
            <th>Deleta</th>
            <th>Alt</th>
        </tr>

        <h3><a href="logout.php">LOGOUT</a><h3>

        <?php while($row = mysqli_fetch_array($result)){ ?>
        <tr>
            <td><?php echo $row['id']; ?></td>
            <td><?php echo $row['nome']; ?></td>
            <td><?php echo $row['endereco']; ?></td>
            <td><?php echo $row['fone']; ?></td>
            <td><?php echo $row['sexo']; ?></td>
            <td><?php echo $row['dn']; ?></td>
            <td><?php echo $row['email']; ?></td>
            <td><?php echo $row['dentista']; ?></td>
            <td><?php echo $row['horario']; ?></td>
            <td><?php echo $row['dia']; ?></td>

            <td><form action="delconsulta.php" method="post">
                <input type="hidden" name="id" value="<?php echo $row["id"]; ?>"/>
                    <button type="submit" name="botdelconsulta" value="ok">Del</button></form></td>
                    
            <td><form action="altconsulta.php" method="post">
                <input type="hidden" name="id" value="<?php echo $row["id"]; ?>"/>
                    <button type="submit" name="botaltconsulta" value="ok">Alt</button></form></td>
        </tr></center>
    
        <?php } 	
        mysqli_close($con);
        ?> 
        </table>
    </body>
</html>
