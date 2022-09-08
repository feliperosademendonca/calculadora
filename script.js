let nFinal1;
let nFinal2;
let n1;
let result;
let opr;
let oprTemp;
 

function calc(value){  
    document.getElementById("msg").innerHTML = '';//reset msg

if(value=='ac'){ //redefine
    
    nFinal1=null;
    nFinal2=null;
    opr=null;
    result=null;
    console.clear() //limpa o console
    console.log('chamou AC')
    console.log('valor nFinal1 '+ nFinal1+', valor opr' +opr+ ', valor nFinal2 '+ nFinal2);
    document.getElementById("txtn1").innerHTML = '';
    document.getElementById("txtOpr").innerHTML = '';
    document.getElementById("txtn2").innerHTML =  '';
    document.getElementById("txtResultado").innerHTML = '';

}else if (value=='del') { //deleta
    nFinal1=Del(nFinal1,opr,nFinal2)
    console.log("Valor de nFinal1= " +nFinal1)
    
}else{ //calcular

if (value!='='){//chk se result é vazio
        if (nFinal2==null) { //chk se n2 é vazio
            if(nFinal1==null){ ////chk se n1 é vazio
                if (typeof value=='string'){//msg para definir numero primeiro
                    document.getElementById("txtOpr").innerHTML = 'informe primeiro um número';
                    console.clear() //limpa o console
                    console.log('Informer Primeiro Número')

                }else{ // atribue value a nFinal1 
                    nFinal1=value;
                    document.getElementById("msg").innerHTML = '';//deletou mensagens 
                    document.getElementById("txtn1").innerHTML = nFinal1;
                    console.log('nFinal1 ='+nFinal1)
                }   
            }else if(typeof value == 'number'){//concatena n1+value
                document.getElementById('txtn1').innerHTML=nFinal1=concatNumber(value,nFinal1);
                console.log('nFinal1 ='+nFinal1)

            }else{//começa a dar o resultado previo
                oprTemp=value;
                nFinal2=0;
                document.getElementById("txtn1").innerHTML = nFinal1;
                document.getElementById("txtOpr").innerHTML = oprTemp;
                document.getElementById("txtn2").innerHTML = nFinal2;
                document.getElementById("txtResultado").innerHTML = operação(nFinal1,oprTemp,nFinal2);//valor parcial
                console.log('nFinal1= '+nFinal1+', oprTemp= '+oprTemp+', nFinal2 ='+nFinal2+', resultTemp= '+resultTemp)//retorna valor parcial da operação      
                
            }
        }else if (nFinal2==0 && typeof value== 'number' ) {//Atribui value a nFinal2

            nFinal2=value
            document.getElementById("txtn1").innerHTML = nFinal1;
            document.getElementById("txtOpr").innerHTML = oprTemp;
            document.getElementById("txtn2").innerHTML = nFinal2;
            document.getElementById("txtResultado").innerHTML = operação(nFinal1,oprTemp,nFinal2);//valor parcial
            console.log('nFinal1= '+nFinal1+', oprTemp= '+oprTemp+', nFinal2 ='+nFinal2+', resultTemp= '+resultTemp)

        }else if (typeof value == 'number'){// concatena nFinal2 e da o resultado previo

            document.getElementById("txtn1").innerHTML = nFinal1;
            document.getElementById("txtOpr").innerHTML = oprTemp;
            document.getElementById('txtn2').innerHTML = nFinal2=concatNumber(value,nFinal2);
            document.getElementById("txtResultado").innerHTML = operação(nFinal1,oprTemp,nFinal2);//resultado parcial            
            console.log('nFinal1= '+nFinal1+', oprTemp= '+oprTemp+', nFinal2 ='+nFinal2+', resultTemp= '+resultTemp)


        }else{//'criando "n" parcelas para operação'
            oprTemp=value
            nFinal1=resultTemp
            nFinal2=0
            document.getElementById("txtn1").innerHTML = resultTemp;
            document.getElementById("txtOpr").innerHTML = oprTemp;
            document.getElementById("txtn2").innerHTML = '';
            document.getElementById("txtResultado").innerHTML = operação(nFinal1,oprTemp,nFinal2);//valor parcial de 'n' parcelas
            console.log('criando "n" parcelas para operação')
            console.log('nFinal1= '+nFinal1+', oprTemp= '+oprTemp+', nFinal2 ='+nFinal2+', resultTemp= '+resultTemp)
        }

}else{
    document.getElementById("msg").innerHTML = 'Valor Final';
    document.getElementById("txtn1").innerHTML = '';
    document.getElementById("txtOpr").innerHTML = '';
    document.getElementById("txtn2").innerHTML = '';
    document.getElementById("txtResultado").innerHTML = resultTemp;
    console.log('nFinal1= '+nFinal1+', oprTemp= '+oprTemp+', nFinal2 ='+nFinal2+', resultTemp= '+resultTemp)
    console.log('exibir só o valor do resultado e finalizar a operação');

}}}

function operação(nFinal1,opr,nFinal2){
    console.log('valores recebidos nFinal1= '+ nFinal1+', opr= ' +opr+ ', nFinal2= '+ nFinal2);

    n1=parseFloat(nFinal1);
    n2=parseFloat(nFinal2);
    oprValue=opr;
    result=null;
    resultTemp=result

    if (oprValue=='+') { 
        result=n1+n2; console.log(n1+opr+n2+'='+result)
        document.getElementById("txtn1").innerHTML = n1;
        document.getElementById("txtOpr").innerHTML = oprValue;
        document.getElementById("txtn2").innerHTML = n2;
        document.getElementById("txtResultado").innerHTML = result;
        

    } 
    else if(oprValue=='-'){
        result=n1-n2; console.log(n1+oprValue+n2+'='+result)
        document.getElementById("txtn1").innerHTML = n1;
        document.getElementById("txtOpr").innerHTML = oprValue;
        document.getElementById("txtn2").innerHTML = n2;
        document.getElementById("txtResultado").innerHTML = result;

    } 
    else if(oprValue=='x'){
        result=n1*n2; console.log(n1+'x'+n2+'='+result)
        document.getElementById("txtn1").innerHTML = n1;
        document.getElementById("txtOpr").innerHTML = oprValue;
        document.getElementById("txtn2").innerHTML = n2;
        document.getElementById("txtResultado").innerHTML = result;

    } 
    else if (oprValue=='÷'){
        result=n1/n2; console.log(n1+oprValue+n2+'='+result)
        document.getElementById("txtn1").innerHTML = n1;
        document.getElementById("txtOpr").innerHTML = oprValue;
        document.getElementById("txtn2").innerHTML = n2;
        document.getElementById("txtResultado").innerHTML = result;

    }
    else{
        if(n1==n2){console.log('Verdadeiro! '+n1+' é igual a '+n2)}
        else{console.log('Falso! '+n1+' não é igual a '+n2)}
    }
console.log('resultado = '+result)

resultTemp=result

return(resultTemp)

}

function concatNumber(value,nFinalTemp){//cria os números 
    let n=value;
    let nFinal=nFinalTemp
    let n1Str=n.toString();
    let nFinal1Str=nFinal.toString();
    nFinal=nFinal1Str.concat(n1Str);
    console.log('retornar nFinalTemp ='+nFinal)
    return(nFinal)
}

function Del(nFinal1,opr,nFinal2){
    n1=null
    n2=null
    oprTemp=null
    n1=nFinal1
    n2=nFinal2
    oprTemp=opr

    if(oprTemp==null){
        nFinal1=null;
        nFinal2=null;
        opr=null;
        result=null;
        console.clear() //limpa o console
        console.log('DEL chamou AC')
        console.log('valor nFinal1 '+ nFinal1+', valor opr' +opr+ ', valor nFinal2 '+ nFinal2);
        document.getElementById("txtn1").innerHTML = '';
        document.getElementById("txtOpr").innerHTML = '';
        document.getElementById("txtn2").innerHTML =  '';
        document.getElementById("txtResultado").innerHTML = '';

    }else{
    let nDel=n2.toString()
    let nFinalDel = nDel.substring(0, nDel.length - 1);
    console.log('valor de nFinalDel'+nFinalDel);
    console.log('valor de nFinal1'+n1);
    console.log('valor de nFinal1'+oprTemp);
    console.log('valor de nFinal1'+n2);
    console.log('deletou o ultimo numero');
    document.getElementById("txtn1").innerHTML = nFinalDel;
    document.getElementById("txtOpr").innerHTML = '';
    document.getElementById("txtn2").innerHTML = nFinal1;
    document.getElementById("txtResultado").innerHTML = '';
    }

return(n1)
}