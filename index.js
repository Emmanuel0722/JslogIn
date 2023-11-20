const btnLogin = document.querySelector(".btnLogin");
const containerLogin = document.querySelector(".containerLogin");
const closeBtn = document.querySelector(".closeBtn");
const login = document.querySelector(".login");
const btnSave = document.querySelector(".btnSave");

btnLogin.addEventListener("click", () => {
	containerLogin.style.display = "flex";
});

closeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	containerLogin.style.display = "none";
	login.reset();
});

containerLogin.addEventListener("click", (e) => {
	if (e.target.className === "containerLogin") {
		containerLogin.style.display = "none";
		login.reset();
	}
});

const formStop = (e) => {
	e.preventDefault();
	login.reset();
}

login.addEventListener("submit", formStop);
btnSave.addEventListener("click", () => {
	const user = document.querySelector(".user");
	const pass = document.querySelector(".pass");

	if (user.value === "" && pass.value === "") {
		alert("Debe llenar todos los campos...");
	}else{
		alert("Eres un Crack!!")
	}
});