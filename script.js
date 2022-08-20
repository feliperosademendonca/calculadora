let nFinal1
let nFinal2
let btn
let n1
let n2
let result

function inputBtn(value){
    
    btn=value
    
    /*btn é numero?*/
    if(typeof btn=='string'){   

            if(nFinal1==null){
                console.log('digite  o primeiro Valor.  btn='+btn)
            }else{
                opr=btn
                console.log('digite outro número.' +opr)
                //criando a segunda parcela da soma

                n2=btn
                console.log('n2 recebe btn. valor de n2 ='+n2)
        
                if(nFinal2==null){
                    nFinal2=n2
                    console.log('Valor de nFinal2='+nFinal2)
                }else{
                    //depois dos outros numeros antes de add a operação
                    console.log('Valor atual de nFinal1='+nFinal2)
                    n2Strg= n2.toString()
                    nFinal2Strg=nFinal2.toString()
                    n2=nFinal2Strg.concat(n2Strg)
                    nFinal2=n2 
                    console.log('Valor de nFinal2='+nFinal2)
                    }
                }
    }else{
        //Concatenando a primeira parcela da soma
        n1=btn
        console.log('n1 recebe btn. valor de n1 ='+n1)

        if(nFinal1==null){
            nFinal1=n1
            console.log('Valor de nFinal1='+nFinal1)
        }else{
            //depois dos outros numeros antes de add a operação
            console.log('Valor atual de nFinal1='+nFinal1)
            n1Strg= n1.toString()
            nFinal1Strg=nFinal1.toString()
            n2=nFinal1Strg.concat(n1Strg)
            nFinal1=n2 
            console.log('Valor de nFinal1='+nFinal1)
            }
        }
}   
     
 
 

/*Operações
    function sum(n1,n2){
        let result= n1+n2
        console.log(result)
        }sum(n1,nfinal)

    function sub(n1,n2){
        let result = n1-n2
        console.log(result)
        }sub(n1,nfinal)

    function mult(n1,n2){
        let result = n1*n2
        console.log(result)
        }mult(n1,nfinal)

    function div(n1,n2){
        let result= n1/n2
        console.log(result)
        }div(n1,nfinal)

    function perc(n1,n2){
        var result =(n1*n2)/100;
        console.log(result)
        }perc(n1,nfinal)
        
    function iterar(n1,result){
        let newResult= (n1*result)/100;
        console.log(newResult)
        }perc(n1,nfinal)*/