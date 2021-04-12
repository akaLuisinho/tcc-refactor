<html>
    <head>
        <title>Alterar Consulta - Uniodonto Campinas</title>
    </head>

    <body>
        <?php	
        $id=$_POST['id'];	
        $con=mysqli_connect("127.0.0.1","root","","uniodonto");          		
            if (mysqli_connect_errno())	{  echo "Failed to connect to MySQL: " . mysqli_connect_error(); }  

        $result = mysqli_query($con,"SELECT * FROM consulta WHERE id='$id'");	
        ?>

        <p><center><form action="realizaaltconsulta.php" method="POST">
        <?php while($row = mysqli_fetch_array($result)) { ?>	
                    <p><br><p><br><p><br>
        <input type="hidden" name="id" value="<?php echo $row['id'];?>" />	
            <label>Nome Completo:<input type="text" name="nome" value="<?php echo $row['nome']; ?>" /></label><p><br/>
            <label>Endereço:<input type="text" name="endereco" value="<?php echo $row['endereco']; ?>" /></label><p><br/>
            <label>Telefone:<input type="text" name="fone" value="<?php echo $row['fone']; ?>" /></label><p><br/>
            <label>Sexo:<input type="radio" name="sexo" value="f<?php echo $row['sexo']; ?>"/>Feminino	</label><p><br>
                            <input type="radio" name="sexo" value="m<?php echo $row['sexo'];?>"/>Masculino</label><p><br/>
            <label>Data de Nascimento:<input type="text" name="dn" value="<?php echo $row['dn']; ?>"/></label><p><br/>
			<label>Dentista: <select name="dentista" value="<?php echo $row['dentista']; ?>" ></label><p><br>
                                <option value="claudia">  Claudia  </option>
                                <option value="elizabeth">  Elizabeth  </option>
                                <option value="laura">  Laura </option>
                                <option value="paulo">  Paulo  </option>
                            </select><p><br>
            <label>Data: <input type="text" name="dia" value="<?php echo $row['dia'] ?>"/></label><p><br>       
			<label>Horário: <input type="text" name="horario" value="<?php echo $row['horario'] ?>"/></label><p><br>
            <label>Email:<input type="text" name="email" value="<?php echo $row['email']; ?>" /></label><p><br/>
            <button type="submit" name="enviar" value="ok">Alterar</button>
        </form>
        <?php } ?>

    </body>
</html>
