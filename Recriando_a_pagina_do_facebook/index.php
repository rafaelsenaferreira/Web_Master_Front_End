<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Recriando o facebook</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="https://fonts.googleapis.com/css?family=Lato|Roboto:700&display=swap" rel="stylesheet"> 
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<header>
			<div class="center">
				<div class="logo">
					<h2>facebook</h2>
				</div><!--logo-->

				<form method="post" class="form-login">
					<div class="form-element">
						<p>E-mail ou telefone:</p>
						<input type="email">
					</div><!--form-element-->
					<div class="form-element">
						<p>Senha:</p>
						<input type="password">
					</div><!--form-element-->
					<div class="form-element">						
						<input type="submit" name="acao" value="Enviar">
					</div><!--form-element-->
				</form><!--form-login-->
				<div class="clear"></div>
			</div><!--center-->
		</header>

		<section class="main">
			<div class="center">
				<div class="img-pessoas">
					<img src="imagens/pessoas.png">
				</div><!--img-pessoas-->
				

				<div class="abrir-conta">
					<h2>Abra sua conta</h2>
					<h3>É rápido e fácil.</h3>

					<form class="criar-conta">
						<div class="w50">
							<input placeholder="Nome" type="text">
						</div>
						<div class="w50">
							<input placeholder="Sobrenome" type="text">
						</div>
						<div class="w100">
							<input placeholder="Celular ou email" type="email">
						</div>
						<div class="w100">
							<input placeholder="Nova senha" type="password">
						</div>	
						<div class="w100">
							<h2>Data de Nascimento</h2>
							<select name="nascimento-dia" class="nascimento">
								<?php
									for($i = 1; $i <= 31; $i++){
								?>
								<option value="<?php echo $i ?>"><?php echo $i ?></option>
								<?php } ?>
							</select>

							<?php  
							    $mes = array("Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"); 
							 ?>	
							<select name="nascimento-mes" class="mes">
							<?php foreach ($mes as $value) { ?>	
								<option value="<?php echo "$value"; ?>"><?php echo "$value"; ?></option>
								<?php } ?>
							</select>
							<select name="nascimento-ano" class="ano">
								<?php
									for($i = 1960; $i <= 2020; $i++){
								?>				
								<option value="<?php echo $i ?>"><?php echo $i ?></option>
								<?php } ?>
							</select>
							<div class="clear"></div>
						</div><!--w100-->

						<div class="w100">
							<div class="input-radio">
								<input type="radio" name="sexo" value="masculino">
								<h2>Masculino</h2>
							</div>
							<div class="input-radio">
								<input type="radio" name="sexo" value="feminino">
								<h2>Feminino</h2>
							</div>							
							<div class="clear"></div>
						</div>						
						<div class="w100">
							<input type="submit" name="acao" value="Cadastre-se">
						</div>
						<div class="clear"></div>
					</form><!--criar-conta-->
				</div><!--abrir-conta-->
				<div class="clear"></div>	
			</div><!--center-->			
		</section><!--main-->

		<section class="linguas">
			<div class="center">
				<a style="text-decoration: none;" class="selected-lingua" href="#">Português (BR)</a>
				<a href="#">English (US)</a>
				<a href="#">Español</a>
				<a href="#">Français (France)</a>
				<a href="#">Italiano</a>
				<a href="#">Deutsch</a>
				<a href="#">ةيبرعلا</a>
				<a href="#">हिन्दी</a>
				<a href="#">中文(简体)</a>
				<a href="#">日本語</a>
				<input type="submit" value=" + " name="button">			
			</div>
			<div style="border: 0; padding-top: 10px;" class="center">				
				<a href="#">Cadastre-se</a>
				<a href="#">Entrar</a>
				<a href="#">Messenger</a>
				<a href="#">Facebook Lite</a>
				<a href="#">Watch</a>
				<a href="#">Pessoas</a>
				<a href="#">Páginas</a>
				<a href="#">Categorias de Página</a>
				<a href="#">Locais</a>	
				<a href="#">Jogos</a>	
				<a href="#">Locais</a>	
				<a href="#">Marketplace</a>	
				<a href="#">Grupos</a>				
				<a href="#">Instagram</a>	
				<a href="#">Local</a>	
				<a href="#">Campanhas de arrecadação de fundos</a>
				<a href="#">Serviços</a>	
				<a href="#">Sobre</a>	
				<a href="#">Criar anúncio</a>	
				<a href="#">Criar Página</a>	
				<a href="#">Desenvolvedores</a>	
				<a href="#">Carreiras</a>	
				<a href="#">Privacidade</a>	
				<a href="#">Cookies</a>	
				<a href="#">Opções de anúncio<img src="imagens/arrow.png"></a>
				<a href="#">Termos</a>	
				<a href="#">Ajuda</a>

			<div class="footer-facebook">
				<h3>Facebook © 2020</h3>
			</div>

			</div>
		</section>

	</body>
</html>


