let nFinal1
var nFinal2
let btn
let n1
let n2
let result

function inputBtn(value){
    
    btn=value
    
    /*btn é numero?*/
    if(typeof btn=='string'){   
                opr=btn
            if(nFinal1==null){
                console.log('digite  o primeiro Valor.  btn='+btn)
            }else{
                //chamando função para criar segundo numero da parcela
                console.log('digite outro número para a operação')
                input2()
                }
    }else{
        //Concatenando a primeira parcela da soma
        
        n1=btn
        
        if(nFinal1==null){
            nFinal1=n1
            console.log('Valor de nFinal1='+nFinal1)
        }else{
            //depois os outros numeros antes de add a operação
            n1Strg= n1.toString()
            nFinal1Strg=nFinal1.toString()
            n2=nFinal1Strg.concat(n1Strg)
            nFinal1=n2 
            console.log('Valor de nFinal1='+nFinal1)
            }
        }
}   

function input2(value,nFinal1){
    btn=value
    console.log('valor recebido da function anterior value='+btn)
    nFinal2=0
    console.log('nFinal2 recebe btn. valor de nFinal2 ='+nFinal2)
    if(typeof btn=='string'){}
     
    
    /*
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
        }*/
    
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