window.onload = function(){ 
	var opleiding=document.querySelector('main > section:nth-of-type(1)')
	var artikelen= document.querySelector('main > section:nth-of-type(2)')
	var projecten= document.querySelector('main > section:nth-of-type(3)')

	opleiding.classList.toggle('hide-content');
	artikelen.classList.toggle('is-invisible');
	projecten.classList.toggle("is-invisible");
	
	
	document.querySelector('main > header:nth-of-type(2)').onclick = function(){
		artikelen.classList.toggle('is-visible');
	}
	document.querySelector('main>header:nth-of-type(3)').onclick=function(){
		projecten.classList.toggle('is-visible')
	}
		document.querySelector('main>header:nth-of-type(1)').onclick=function(){
		opleiding.classList.toggle('show-content')
	}
}