let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно  

let error = document.querySelector('.error')
let iput = document.querySelector('.iput')
function sendiData(){
	let steamIn = document.querySelector(".iput").value;
	// let SteamId = document.getElementById('SteamId').value;
	if (steamIn == ''){
		iput.style.border = '5px solid red'
		error.style.transform = 'translateY(-10px)';
		//
	}
	if (steamIn != ''){
		tg.sendData(`{"check_aspect" : {"SteamID" : ${steamIn}}}`);
	}
};

var element = document.querySelector('.iput');
element.addEventListener('input', function() {
	iput.style.border = '5px solid gray'
	error.style.transform = 'translateY(-50px)';
});