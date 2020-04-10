
var contar=0;
var ganar =0;


function cambiar(x,id)
{   
   
    if(x.style.background=="black")
    {
        x.style.background="red";
        contar=contar+1;
    }else{
        
        x.style.background="black";
        contar=contar-1;
    }
    if(contar==ganar || contar==0){
        if(contar==ganar){
           alert("fin partida gana rojo"); 
        }else{
            alert("fin partida gana negro");
        }
        
                
    }
    return false;
}

    function crear(){
        var numero=prompt("indica cuantos elementos quieres");
        ele=numero;
        for(i=0;i<ele;i++){
            var color=Math.random();
            if(color<0.5){
                color="color";
            }else{
                color="color2";
            }
            var divs=document.createElement("button");
            divs.setAttribute("class",color);
            divs.setAttribute("onclick","cambiar(this)");
            ganar=ganar+1;
            contar=contar+1;
            document.getElementById("contenedor").appendChild(divs);
    }
        }
        
        

    
    


