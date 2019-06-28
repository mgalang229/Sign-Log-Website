var subBtn = document.querySelector('#subBtn');
var passw2 = document.querySelector('#pwd');

if(passw2){
	passw2.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
		 event.preventDefault();
		 subBtn.click();
		}
	});
}

if(subBtn){
	subBtn.addEventListener('click', getButton);
}

function getButton(){
	var usr = document.getElementById('usr').value;
	var pwd = document.getElementById('pwd').value;

	var account = {
		name: usr,
		password: pwd
	}

	if(localStorage.getItem('accounts') === null){
		var accounts = [];
		accounts.push(account);
		localStorage.setItem('accounts', JSON.stringify(accounts));
	}else{
		var accounts = JSON.parse(localStorage.getItem('accounts'));
		accounts.push(account);
		localStorage.setItem('accounts', JSON.stringify(accounts));
	}

	alert('Account Created Successfully!');

	document.getElementById('myForm').reset();
}

var logBtn = document.querySelector('#logBtn');
var passw = document.querySelector('#pwdLG');

if(passw){
	passw.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
		 event.preventDefault();
		 logBtn.click();
		}
	});
}

if(logBtn){
	logBtn.addEventListener('click', logIn);
}

function logIn(){
	var usrLG = document.querySelector('#usrLG');
	var pwdLG = document.querySelector('#pwdLG');

	var accounts = JSON.parse(localStorage.getItem('accounts'));

	for(var i = 0; i < accounts.length; i++){
		var name = accounts[i].name;
		var password = accounts[i].password;

		var usrV = usrLG.value;
		var pwdV = pwdLG.value;

		if(usrV === name && pwdV === password){
			alert('Successfully Logged In');
			document.getElementById('myForm2').reset();
			localStorage.setItem("firstname", usrV);
			window.location.href = 'home.html';
			return
		}
	}
	alert('Please try again');

	document.getElementById('myForm2').reset();
}

//localStorage.clear();

var heading = document.querySelector('h1');
try{
	heading.textContent += localStorage.getItem("firstname") +"!";
}
catch(err){
	console.log(err);
}

var outBtn = document.querySelector('#outBtn');
if(outBtn){
	outBtn.addEventListener('click', function hello(){
		window.location.href = 'index.html';
	});
}