<html>
	<head>
		<title>Uniodoto Campinas</title>
		 <meta charset="UTF_8">
		<link rel="stylesheet" type="text/css" href="login.css">
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
					</ul>
				</nav>
			</ul>
		</div>
		<div id="conteudo">
			<h1>LOGIN</h1><p><br>
			<form action="log.php" method="POST">
				<input type="text" name="usuario" placeholder="Seu Usuário..." size="22"class="box"><p><br>
				<input type="password" name="senha" placeholder= "Sua Senha..." size="22" class="box"><p><br>
				<input type="submit" value="Entrar" class="btn">
			</form>
		</div>
		<div id="rodape">
			<img src="imagem/rodape.png" width="1793" height="140">
		</div>
	</body>
</html>