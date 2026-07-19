const mensajes = [
"Desde que apareciste todo cambió ❤️",
"Cada conversación contigo vale oro ✨",
"Gracias por existir 💜",
"Y ahora quiero preguntarte algo..."
];

let i = 0;

function siguiente(){

if(i<mensajes.length){

document.getElementById("texto").innerHTML=mensajes[i];

i++;

}else{

document.body.innerHTML=`
<div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;background:#ff9ec4;font-family:Arial;color:white;">
<h1>💜</h1>
<h2>¿Quieres seguir escribiendo esta historia conmigo?</h2>
</div>
`;

}

}
