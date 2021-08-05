function mostrar()
{
 
let nacionalidad ;
let resultado;
let edad;
let cepa;
let contPositivos = 0 ;
let contNegativos = 0;

let acumDelta = 0;
let acumAlfa =0;
let acumBeta =0 ;
let acumNinguna = 0;
let flagEdad = 1 ;

let menorEdad;
let extranjerosDelta = 0 ;
let porcentajePositivos ;
let porcentajeNegativos ;
 
for (let i = 0 ; i < 8 ; i ++)
{

nacionalidad = prompt ("Ingrese su nacionalidad Argentina/Extranjero").toLowerCase();

while (!(nacionalidad == "argentina" || nacionalidad == "extranjero" || isNaN(nacionalidad)))
{
nacionalidad = prompt ("Error !!Ingrese una nacionalidad valida").toLowerCase();
}

resultado = prompt ("Ingrese el resultado del test. Positivo/Negativo").toLowerCase();

while (!(resultado == "positivo" || resultado == "negativo" || isNaN(resultado)))
{
resultado = prompt ("Error. Ingrese el resultado del test. Positivo/Negativo").toLowerCase();
}

edad = parseInt (prompt ("Ingrese una edad entre 18 y 65 años"));

while (isNaN(edad) || !(edad >= 18 && edad <= 65))
{
    edad = parseInt (prompt ("Ingrese una edad entre 18 y 65 años")) ;
}

cepa = prompt ("Ingrese la cepa delta/alfa/beta/ninguna").toLowerCase();

while (!(isNaN(cepa) ||cepa == "delta" || cepa == "alfa" || cepa == "beta" || (cepa == "ninguna" && resultado == "negativo" ) ))
      
cepa = prompt ("Error!! Ingrese la cepa valida. delta/alfa/beta/ninguna").toLowerCase();

if (resultado = "positivo")
{
    contPositivos ++ ;
    
   
    if(flagEdad && nacionalidad == "argentina")
    { 
       menorEdad = edad;
        flagEdad = 0 ; 
      } else if (edad < menorEdad && nacionalidad == "argentina")
    {
    menorEdad = edad ;
    }
}

else if (resultado = "negativo")
{
    contNegativos ++ ;
    
}

switch (cepa)
{
    case "delta" : 
    acumDelta ++ ;
    if (nacionalidad = "delta")
    {
     extranjerosDelta ++ ;
    }
    break;

    case "alfa" :
    acumAlfa++ ;
    break;

    case "beta" :
    acumBeta ++ ;
    break;

    case "ninguna" : 
    acumNinguna ++;
    break;
 }
 
 if (acumDelta < acumAlfa && acumDelta < acumBeta)
		  {
			cepa = "delta" ;
		  } else if (acumBeta < acumAlfa && acumBeta < acumDelta)
			{
			 cepa = "beta";
			  } else
				{  
				cepa = "alfa" ;                
				}
            }
porcentajePositivos = 8 / contPositivos ;
porcentajeNegativos = 8 / contNegativos ;

alert ("El porcentaje de positivos es de " + porcentajePositivos +"%");
alert ("el porcentaje de negativos es de " + porcentajeNegativos + "%") ;
alert ("La cepa menos encontrada es " + cepa);
alert ("La cantidad de personas extranjeras contagiadas es de " + extranjerosDelta) ;
}
