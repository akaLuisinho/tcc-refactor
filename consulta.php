<html>
	<head>
		<title>Consulta - Uniodonto Campinas</title>
		 <meta charset="UTF_8">
		<link rel="stylesheet" type="text/css" href="projeto.css">	
	</head>

	<body>
	
		<div id="topo">
			<br><img src="imagem/logo.png">
		</div>
		
		<div id="menu">
			<ul>
				<input type= "checkbox" id="chec">
				<label for="chec"> 
					<img src="imagem/menu.png">
				</label> 
				<nav>
					<ul>
						<li><a href="index.php">Início</a></li>
						<li><a href="dentistas.php">Nossos Dentistas</a></li>
						<li><a href="consulta.php">Marque sua consulta</a></li>
						<li><a href="login.php">Painel do Funcionário</a></li>
						<li><a href="sobre.php">Sobre nós</a></li>
					</ul>
				</nav>
			</ul>
		</div>
		<div id="conteudo">
        	<p><br><p><br><p><br>
            <form action="cad_consulta.php" method="POST"><center>
			Nome completo:<br><input type="text" name="nome" size="20" required><p><br>
			Endereço:<br><input type="text" name="endereco" size="20" required><p><br>
			Telefone:<br><input type="text" name="fone" size="16" maxlength="16" placeholder="DDD-99999-9999" required><p><br>
			Sexo:<br><input type="radio" name="sexo" value="m" required>Masculino
						<input type="radio" name="sexo" value="f" required>Feminino<p><br>
			Data de Nascimento: <br><input type="text" name="dn" size="16" maxlength="16" placeholder="ANO/MES/DIA" required><p><br>
			Dentista:<br><select name="dentista" required>
							<option value="claudia">  Claudia  </option>
							<option value="elizabeth">  Elizabeth  </option>
							<option value="laura">  Laura </option>
							<option value="paulo">  Paulo  </option>
						</select><br>
			Dia:<br><input type="text" name="dia" size="16"placeholder="DIA/MES" required><br>
			Horário:<br><input type="text" name="horario" size="18" placeholder="00:00" required><p><br>
			Seu e-mail:<br><input type="text"name="email" size="20" maxlength="100" required><p><br>
			<input type="submit" value="Cadastrar" class="btn"></center>
            </form>
		</div>

		<div id="rodape">
		<img src="imagem/rodape.png" width="1793" height="140">
		</div>
	</body>
</html>
 
	

