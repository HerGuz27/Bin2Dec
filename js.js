
function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(){
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}
function decimal(){
    document.getElementById("dec").value="";
    let num= parseInt(document.getElementById("bi").value);
    var bin="";
    do{
        if(num==1){
            bin="1"+bin;
        }else{
            if(num%2==0){
                bin="0"+bin;
            }else{
                bin="1"+bin;
            }
           
        }
        num=num/2;
        num=Math.floor(num);
    }while(num>=1)
    document.getElementById("dec").value=bin;
}

function binario(){
    document.getElementById("bi").value="";
    var resu=0;
    let bir= (document.getElementById("dec").value);
    let i=bir.length--;
    for(var j=0;j<bir.length;j++){
        i--;
        resu=resu+((parseInt(bir.charAt(j)))*(2**i));
        }
        document.getElementById("bi").value=resu;
}
function fondo(){
    document.body.style.backgroundColor=colorHEX()
}