function mensaje(event){
    event.preventDefault();
    let name=document.getElementById("nombre").value;
    let tel=document.getElementById("telefono").value;
    // convierte en entero
    let gmail=document.getElementById("email").value;
    let direction=document.getElementById("ciudad").classList;
    let old=document.getElementById("edad").value;

    alert(`su informacion es la siguiente:
        ${name}
       ${tel}
       ${gmail}
       ${direction}
       ${old}`,);
       


}