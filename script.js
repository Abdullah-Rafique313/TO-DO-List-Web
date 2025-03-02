let btn=document.querySelector("#addNote");
btn.addEventListener('click',addNote);
function addNote(){
	let note=document.querySelector("#Userinput").value;
	if(note.trim()==""){
		alert("Field is required");
		return false;
	}
	let li=document.createElement('li');
	li.innerHTML=`${note}<button onclick='deleteLi(this)' 
	class='removebtn'><i class="fa fa-trash-o" aria-hidden="true"></i> 
	Remove</button>`;
	let ol=document.querySelector("#list");
	ol.appendChild(li);
	document.querySelector("#userInput").value="";
}
function deleteLi(button){
	let li=button.parentElement;
	li.remove();
}