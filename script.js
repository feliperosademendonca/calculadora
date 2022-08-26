let nFinal1;
var nFinal2;
let btn;
let n1;
let n2;
let result;
let opr;

function calc(value){  
 
if (result==null){ 
    if (opr==null){ 
        if (nFinal2==null) { 
            if(nFinal1==null){ 
                if (typeof value=='string'){
                    document.getElementById("msg").innerHTML = 'informe primeiro um número';
                    document.getElementById("txtOpr").innerHTML = oprTemp;
                    
                    
                }else{
                nFinal1=value;
                document.getElementById("txtn1").innerHTML = nFinal1;
                console.log(nFinal1)
            }
            }else if(typeof value == 'number'){
                n1=value;
                let n1Str=n1.toString();
                let nFinal1Str=nFinal1.toString();
                nFinal1=nFinal1Str.concat(n1Str);
                document.getElementById("txtn1").innerHTML = nFinal1;
                console.log(nFinal1);

            }else{
                let oprTemp=value;
                nFinal2=0;
                document.getElementById("txtOpr").innerHTML = oprTemp;
                document.getElementById("txtn2").innerHTML = nFinal2;
                console.log('nFinal1'+nFinal1)
                console.log('nFinal2'+nFinal2)
                
            }

        }else if (typeof value ===String){
            opr=value
            console.log('Digite o segundo número da operação')
            document.getElementById("txtn2").innerHTML = nFinal2;
            document.getElementById("txtOpr").innerHTML = opr;
            console.log(nFinal1+opr+nFinal2)

        }else{
            n2=value;
            let n2Str=n2.toString();
            let nFinal2Str=nFinal2.toString();
            nFinal2=nFinal2Str.concat(n2Str);
            console.log(nFinal1+opr+nFinal2);
            document.getElementById("txtn2").innerHTML = nFinal2;

        }
    }else{
        //operação(nFinal1,nFinal2,opr)
        console.log('chamar function operação()')
        console.log(nFinal1+nFinal2)
    }
}else{
    nFinal1=result;
    nFinal2=value;
    result=null
}
}

function operação(nFinal1,nFinal2,opr){
    n1=nFinal1;
    n2=nFinal2;
    let result;
    if (opr=='+') { result=n1+n2} 
    else if(opr=='-'){result=n1-n2}
    else if(opr=='*'){result=n1*n2}
    else if (opr=='/'){result=n1/n2}
    else{
        if(n1==n2){console.log('Verdadeiro! '+n1+' é igual a '+n2)}
        else{console.log('Falso! '+n1+' não é igual a '+n2)}
    }
opr=null
document.getElementById("txResult").innerHTML = result;
return (result)
}
