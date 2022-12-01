let cliente = prompt("Buenos dias bienvenido a Mega Ofertas, Por favor ingresa tu nombre");
let saludo = alert(`Hola ${cliente} Hoy  tenemos varios productos en oferta que te pueden interesar`);
let metodoPago = prompt(`Los mismos pueden ser abonado con efectivo o tarjeta ¿Que opcion eliges?:
1: Efectivo
2: Tarjeta
`);
switch(metodoPago){
    case "1":
        alert("Pagando en efectivo obtienes un %10 de descuento");
        break;
    case "2":
        alert("Pagando con tarjeta usted puede hacerlo en 3 cuotas, 6 cuotas o 12 cuotas");
        break;
}
let productos= prompt(`Elija uno de nuestros productos:
1: Monitor
2: Notebook
3: Teclado
4: Mouse`);

switch(productos){
    case"1":
    alert("Eligio Monitor");
    break;
    case "2":
        alert("Eligio Notebook");
    break;
    case "3":
        alert("Eligio Teclado");
    break;
    case "4":
        alert("Eligio Mouse")
    break;
    
}






        

       


