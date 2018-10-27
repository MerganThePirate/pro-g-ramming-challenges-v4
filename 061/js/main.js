import Rot13 from "./Rot13.js";

let unencrypted = document.getElementById("unencrypted");
let encrypted = document.getElementById("encrypted");

unencrypted.addEventListener("input", (e)=>{
	encrypted.value = Rot13.encrypt(unencrypted.value);
});