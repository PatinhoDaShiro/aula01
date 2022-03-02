    divs =document.getElementById("section")
    btm =document.querySelectorAll(".botao")
    
    var digito=""
    btm.forEach(
    function(item){
        item.onclick=function(){
           
            opt= this.getAttribute("id")

            if(divs.style.display === 'block'){
                divs.style.display = 'none';
                
            }
            else{
                divs.style.display = 'block';
            }

            if(opt=="cel"){
            input1=document.getElementById("inp1")
            
            digito=input1.value
            
            f= parseFloat(digito*1.8+32)
                 
            k=  Number(digito)+273
            r= (Number(digito)+Number(273.15))*Number(1.8)
            document.getElementById('c').innerHTML=digito+" Graus Celsius"
            document.getElementById('f').innerHTML=f+" Graus Fahenrite"
            document.getElementById('k').innerHTML=k+" Graus Kelvin"
            document.getElementById('r').innerHTML=r+" Graus Rankine"
            
            }
            else if(opt=="fahen"){
                input2=document.getElementById("inp2")
                digito=input2.value
                c= (digito-32)/1.8
                k=(Number(digito-32))*1.8+273
                r=Number(digito)+459.67
                document.getElementById('f').innerHTML=digito+" Graus Fahenrite"
                document.getElementById('c').innerHTML=c+" Graus Celsius"
                document.getElementById('k').innerHTML=k+" Graus Kelvin"
                document.getElementById('r').innerHTML=r+" Graus Rankine"
            }
            else if(opt=="kelvin"){
                input3=document.getElementById("inp3")
                digito=input3.value
                c=  Number(digito)-273 
                f=(Number(digito-273))*1.8+32 
                r= Number(digito)*1.8 
                document.getElementById('k').innerHTML=digito+" Graus Kelvin"
                document.getElementById('f').innerHTML=f+" Graus Fahenrite"
                document.getElementById('c').innerHTML=c+" Graus Celsius"
                document.getElementById('r').innerHTML=r+" Graus Rankine"
            }
            else {
                input4=document.getElementById("inp4")
                digito=input4.value
                
                k=Number(digito)/1.8   
                f=Number(digito)-459.67 
                c=(Number(digito-491,67))*5/9 

                document.getElementById('r').innerHTML=digito+" Graus Rankine"
                document.getElementById('f').innerHTML=f+" Graus Fahenrite"
                document.getElementById('k').innerHTML=k+" Graus Kelvin"
                document.getElementById('c').innerHTML=c+" Graus Celsius"
            }
            
        }
    }
)


