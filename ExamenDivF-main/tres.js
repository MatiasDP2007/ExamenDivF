function mostrar()
{
	let origen;
let costo;
let cantidad;
let ingresar;

let contOriente = 0;
let contOccidente = 0;
let contSecreto = 0;
let menor;

let promedioOccidente;
let acumOccidente= 0;
let acumCosto = 0;

let acumVacunas = 0;
let costoDescuento;
let descuento = 0;

	do
	{
	origen = prompt("ingrese origen del vuelo (oriente/occidente/secreto)").toLowerCase();
	while (!isNaN(origen) || origen != "oriente" && origen != "occidente" && origen !="secreto")
	{
		origen = prompt("error! ingrese un origen correcto (oriente, occidente o secreto)").toLowerCase();
	}
	cantidad = parseInt(prompt("ingrese cantidad de vacunas (Entre 500000 y 2500000)"));
		while(isNaN(cantidad) || cantidad < 500000 && cantidad < 2500000)
		{
			cantidad = parseInt(prompt("error! ngrese cantidad de vacunas (Entre 500000 y 2500000)"));
		}
	
	costo = parseInt(prompt("ingrese costo del vuelo ( entre 1 millon y 5 millones"));
	while (isNaN(costo) || costo < 1000000 && costo > 5000000 )
	{
		costo = parseInt(prompt("error! Ingrese un costo entre 1 millon o 5 millones)"));
	}

	ingresar = prompt("quiere seguir ingresando datos? Si/No").toLowerCase();
	while (!isNaN(ingresar) || ingresar != "si" && ingresar != "no")
	{
	   ingresar = prompt("error! Quiere seguir ingresando datos? Si/No").toLowerCase();
	}
	     switch(origen)
	   {

		case "oriente":
			contOriente++;

			break;
		case "occidente":
			contOccidente++;
			acumOccidente = acumOccidente + cantidad;


			break;
		case "secreto":
			contSecreto++;
			break;

	   }

	acumCosto = acumCosto + costo;
	acumVacunas = acumVacunas + cantidad;

} while (ingresar != "no");

	if(contOriente < contOccidente && contOriente< contSecreto)
	{
		menor = "Oriente";
	}
	else if (contOccidente< contSecreto && contOccidente < contOriente)
	{
		menor = "Occidente";
	}
	else
	{
		menor = "Secreto";

	}
	
	promedio = acumOccidente / contOriente;
		
	if (acumVacunas > 10000000)
	{
		costoDescuento =  acumCosto * 0.75;
		descuento = 25;
	} else if( acumVacunas >= 5000000 && acumVacunas <10000000)
	{
		costoDescuento = acumCosto * 0.85;
		descuento = 15;
	}
	alert ( "Se le aplica un descuneto del " + descuento +"% y el precio es de $" + costoDescuento);
alert("El origen que envio menor cantidad de vacunas es " + menor);
alert("El promedio por vuelo de vacunas llegas de occidente es de " + promedio);
alert("El total sin descuentos a pagar por los gastos de los viajes es de $" + acumCosto);



}
