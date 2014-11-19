
window.onload=function(){

	console.log("hoi")

	var fieldset1= document.querySelector('fieldset:nth-of-type(2)');
	var	fieldset2= document.querySelector('fieldset:nth-of-type(3)');

	fieldset1.classList.add('is-invisible');
	fieldset2.classList.add('is-invisible');
	

	document.querySelector('input[type="radio"]').onclick=function(){
		fieldset1.classList.add('is-visible');
		fieldset2.classList.remove('is-visible');
		fieldset2.classList.add('is-invisible');
	}
	document.querySelector('input[type="radio"]:last-of-type').onclick=function(){
		fieldset2.classList.add('is-visible');
		fieldset1.classList.remove('is-visible');
		fieldset1.classList.add('is-invisible');


	}

};