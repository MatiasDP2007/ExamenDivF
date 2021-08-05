function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let ingresoPersona;
	let menorVacuna;
	let menorNombre;
	let menorEdad ;
	let contAmericana=0;
	let contRusa=0;
	let contChina=0;
	let flagEdad = 1 ;
	let acumEdad = 0 ;
	let promedioEdadChina ;
	let primeraD = 0;
	let segundaD = 0;
	let totalVacunados;
	let porcentajePD;
	let contAmericanaMenores= 0 ;
	let promedioMenoresAmericana;
	

    do {

	    nombre = prompt("Ingrese un nombre");
		while(!isNaN(nombre) || (!(nombre.length >= 3 && nombre.length <= 10)))
		{
			nombre = prompt("Error. Ingrese un nombre valido");
		}
       
		edad = parseInt (prompt  ("Ingrese una edad mayor o igual a 12 años")) ;
        
	    while (edad < 12 || isNaN(edad))
        {
		  edad = parseInt (prompt  ("Error! Ingrese una edad mayor o igual a 12 años"))
		} 
        if (edad > 18){
		 vacuna = prompt("Ingrese vacuna. Rusa/china/americana ").toLowerCase()

		 while ( !isNaN(vacuna) ||!(vacuna == "rusa" || vacuna == "china" || vacuna == "americana" ))
		 
		 {
			vacuna = prompt ("Error. Ingrese vacuna. Rusa/china/americana ").toLowerCase()
         } }
        
		 dosis = prompt ("Informe si es la primera dosis (p') o la segunda (s) ").toLowerCase();
	     
		 while (!isNaN(dosis) || !(dosis == "p" || dosis == "s" )) 
		 {
			 dosis = prompt ("Informe si es la primera dosis (p') o la segunda (s)").toLowerCase();
		 }

		 sexo = prompt ("Ingrese un sexo. M para masculino y F para femenino").toLowerCase() ;

	     while (!isNaN(sexo) || !(sexo == "m" || sexo == "f")) 
	    {
		sexo = prompt ("Error! Ingrese un sexo valido. M para masculino y F para femenino").toLowerCase() ;
	    }

		ingresoPersona = prompt ("¿Desea ingresar otra persona? Si/No" ).toLowerCase();

	   while ( !isNaN(ingresoPersona) || !(ingresoPersona == "si" || ingresoPersona == "no"))

	    {
		ingresoPersona = prompt ("Error !! ¿Desea ingresar otra persona? Si/No" ).toLowerCase();
	    }

		if (edad <= 17 )
		{
        contAmericanaMenores ++ ;
		}

        switch (vacuna) 
		{
		 case "americana" :
		 contAmericana ++ ;
         break;


		 case "china" :
		 contChina++ ;
         acumEdad =+ edad ;
		 break;


		 case "rusa" :
		 contRusa++
		 break;
             
		}
         
		

		if(flagEdad && sexo == "m")
		{
			menorEdad = edad ;
			menorNombre = nombre ;
			menorVacuna = vacuna;
			flagEdad = 0;

		} else if (edad < menorEdad && sexo == "m")
		{
			menorEdad = edad ;
			menorNombre = nombre ;
			menorVacuna = vacuna;   // punto B //
		}
          
		if (dosis == "p")
		{
		 primeraD ++ ;
		} else
		  {
			segundaD ++;
		  }

		
  if (contChina > contRusa && contChina > contAmericana)
		  {
			vacuna = "china" ;
		  } else if (contAmericana > contRusa && contAmericana > contChina)
			{
			 vacuna = "americana";
			  } else
				{  
				vacuna = "rusa" ;                
				}       // punto E
          
	
			}while (ingresoPersona != "no") ;


  
promedioEdadChina = acumEdad / contChina ; // PUNTO A //
promedioMenoresAmericana = (contAmericana + contAmericanaMenores) /  contAmericanaMenores ; //puntoC//


totalVacunados = contChina + contRusa + contAmericana;
porcentajePD = totalVacunados / primeraD ;// Punto D // 


alert ("El promedio de edad de las personas vacunadas con la variante china es de " + promedioEdadChina) ;
alert ("El hombre mas joven vacunado se llama " + menorNombre + " y la vacuna es " + menorVacuna) ;
alert ("El porcentaje de personas que recibieron la variante americana es de " + promedioMenoresAmericana + "%");
alert ("El porcentaje de personas que estan vacunadas con una dosis sobre el total de vacunados es de " + porcentajePD + "%");
alert ("La vacuna mas inoculada es la " + vacuna) ;
}

