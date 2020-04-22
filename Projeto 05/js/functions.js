$(function(){

/*---------pagina venda - funcao da barra de preço---------------*/
		//valor inicial da barra
		var currentValue = 0;
		/*isDrag é uma variavel pra ver se estamos pressionando o mouse, 
		pois o jquery não detecta se o mouse estar sendo arrastado*/
		var isDrag = false;
		var preco_maximo = 70000;
		var preco_atual = 0;

		//mousedown é de mouse pressionado
		//quando pressionar o mouse isDrag = true
		$('.pointer-barra').mousedown(function(){
			//console.log('pressionado');
			isDrag = true;			
		})
		//quando soltar o mouse isDrag = false
		$(document).mouseup(function(){
			isDrag = false;
			//ativar a função de seleção quando o mouse for despressionado
			enableTextSelection();
		})

		//quando o mouse se mover em cima do .barra-preco
		$('.barra-preco').mousemove(function(e){
			if(isDrag){
				//ativar a função quando o mouse for pressionado
				disableTextSelection();
				//console.log('mouse arrastado');
				//var mouseX = e.pageX, funcao pra pegar a posição do mouse
				//this referesse ao barra-preco
				var elBase = $(this);
				var mouseX = e.pageX - elBase.offset().left;
				console.log(mouseX);
				if(mouseX < 0)
					mouseX = 0;
				//el.base.width é a largura do elemento que no caso é o .barra-preco
				if(mouseX >= elBase.width())
					mouseX = elBase.width();
				currentValue = (mouseX / elBase.width()) * 100;
				//console.log(percent);
				//fazer com que o quadrado acompanhe a barra, o -13 é a metade da largura do quadrado
				$('.pointer-barra').css('left',(mouseX-13)+'px');
				//ativando para que a barra seja mostrada
				$('.barra-preco-fill').css('width',currentValue+'%');
				preco_atual = (currentValue/100) * preco_maximo;
				preco_atual = formatarPreco(preco_atual);
				$('.preco_pesquisa').html('R$'+preco_atual);
			}
		})

		function formatarPreco(preco_atual){
			//ter duas casas atuais após o ponto
			preco_atual = preco_atual.toFixed(2);
			//dividir o valor em dois indices
			preco_arr = preco_atual.split('.');

			var novo_preco = formatarTotal(preco_arr);

			return novo_preco;
		}

		function formatarTotal(preco_arr){
		//retornar o preco atual indice 0 e 1 com dois digitos após a virgula		
			if(preco_arr[0] < 1000){
				return preco_arr[0]+','+preco_arr[1];
			}else if(preco_arr[0] < 10000){
				/*se for 100, o indice [0][0] é 1, [0][1] é 0,[0][2] é 0, é como se eu dividisse 
				a string 100 por 3*/
				//substr seria o valor restante
				return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+
				','+preco_arr[1];
			}else{
				return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+
				','+preco_arr[1];
			}
			
		}

		/*essas funções são padrões, para informar para o navegador, já que ele não entende quando 
		está sendo clickado*/

		function disableTextSelection(){
			$("body").css("-webkit-user-select","none");
			$("body").css("-moz-user-select","none");
			$("body").css("-ms-user-select","none");
			$("body").css("-o-user-select","none");
			$("body").css("user-select","none");
		}

		function enableTextSelection(){
			$("body").css("-webkit-user-select","auto");
			$("body").css("-moz-user-select","auto");
			$("body").css("-ms-user-select","auto");
			$("body").css("-o-user-select","auto");
			$("body").css("user-select","auto");
		}
/*--------- fim da funcao da barra de preço---------------*/

/*--------- Pagina veiculo teste funcao slider---------------*/

		//quantas imagens quero que mostre naquele slider
		var imgShow = 3;
		//maxIndex é pra saber o máximo que pode-se chegar
		var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
		//valor atual, que no caso é 0
		var curIndex = 0;

		initSlider();
		navigateSlider();
		clickSlider();
		function initSlider(){
			var amt = $('.mini-img-wraper').length * 33.3;
			//o elemento que se usa pra realizar o scroll da div
			var elScroll = $('.nav-galeria-wraper');			
			var elSingle = $('.mini-img-wraper');
			elScroll.css('width',amt+'%');
			elSingle.css('width',33.3*(100/amt)+'%');
		}

/*-------------------------dispararar o evento de slider no arrow-------------------*/
		function navigateSlider(){
			$('.arrow-right-nav').click(function(){
				if(curIndex < maxIndex){
					curIndex++;
					var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left
					//agora vem a animação
					$('.nav-galeria').animate({'scrollLeft':elOff+'px'});
				}else{
					console.log("Chegamos até o final");
				}
			});

			$('.arrow-left-nav').click(function(){
				//verificar se foi maior do que 0 e diminuir o incremento
				if(curIndex > 0){
					curIndex--;
					var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left
					//agora vem a animação
					$('.nav-galeria').animate({'scrollLeft':elOff+'px'});
				}else{
					console.log("Chegamos até o final");
				}
			})
		}

	
/*-----------------abrir a imagem selectionada-------------------*/
	
	function clickSlider(){
		$('.mini-img-wraper').click(function(){
			$('.mini-img-wraper').css('background-color','transparent');
			$(this).css('background-color','rgb(210,210,210)');
			//children é o filho da classe mini-img-wraper
			var img = $(this).children().css('background-image');
			$('.foto-destaque').css('background-image',img);
		})
	}

//ja deixar uma imagem pre-selecionada, antes do usuário clickar
		$('.mini-img-wraper').eq(0).click();


/*-------------------------clickar e ir para o atributo goto na pagina index----------------*/
	/*
		$('[goto=contato]').click(function(){
			$('nav a').css('color','black');
			$(this).css('color','#EB2D2D');
			$('html,body').animate({'scrollTop':$('#contato').offset().top});
				return false;
		})
	/*	
	
	//foi melhorado esse sistema aqui em baixo
/*-------------------------manipular url e direcionar para o goto da pagina index----------------*/

		var directory = '/Projetos Praticos/Projeto 05/'

		$('[goto=contato]').click(function(){
			//location.href é pra encaminhar para algum diretorio ou link
			//após o ponto de interrogação vem os parâmetros
			location.href=directory+'index.html?contato';
			return false;
		})

		checkUrl();

		function checkUrl(){

			//splitar a url completa e saparar pelo delimitador /
			var url = location.href.split('/');
			//peguei o utimo item e splitei pelo demitador ?
			var curPage = url[url.length-1].split('?');

			if(curPage[1] != undefined && curPage[1] == 'contato'){
				$('header nav a').css('color','black');
				$('footer nav a').css('color','white');
				$('[goto=contato]').css('color','#EB2D2D');
				$('html,body').animate({'scrollTop':$('#contato').offset().top});
			}

		}

/*------------------menu responsivo mobile e desktop------------------------*/
	//slideToggle é pra abrir o menu retraido
		$('.mobile').click(function(){
			$(this).find('ul').slideToggle();
		})

/*-----------------Sistema de navegação nos depoimentos no index.html-------s*/

			var amtDepoimento = $('.depoimento-single p').length
			var curIndex = 0;

			iniciarDepoimentos();
			navegarDepoimentos();

			function iniciarDepoimentos(){
				$('.depoimento-single p').hide();
				$('.depoimento-single p').eq(0).show();
			}

			function navegarDepoimentos(){
				$('[next]').click(function(){
					//alert('next');				
					curIndex++
						if(curIndex >= amtDepoimento)
							curIndex = 0;
						$('.depoimento-single p').hide();
						$('.depoimento-single p').eq(curIndex).show();
					
				})

				$('[prev]').click(function(){
					//alert('prev');
					curIndex--
						if(curIndex < 0)
							curIndex = amtDepoimento-1;
						$('.depoimento-single p').hide();
						$('.depoimento-single p').eq(curIndex).show();
				})
			}
			
			


})