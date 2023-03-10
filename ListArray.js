var array = [];

function AddValueList(){
    var valor = document.getElementById('inputGroupList').value;
    if(valor == 0)
    {
        alert("Caixa de texto em branco!")
    }else{
    array.push(valor);{
    console.log(valor);
    console.log(array);
    }
}
    document.getElementById('outputList').innerHTML = array;
    document.getElementById('inputGroupList').value = " ";
};

function removeLastItem(){
    var valor = document.getElementById('inputGroupList').value;
    
    if(array < 1){
        alert("Lista vazia!")
    }else{
        array.pop(valor);
    }
    document.getElementById('outputList').innerHTML = array;
    document.getElementById('inputGroupList').value = " ";
};

function removeFirstItem(){
    var valor = document.getElementById('inputGroupList').value;
    
    if(array < 1){
        alert("Lista vazia!")
    }else{
        array.shift(valor);
    }
    document.getElementById('outputList').innerHTML = array;
    document.getElementById('inputGroupList').value = " ";
};

function AddValueFirstItem(){
    var valor = document.getElementById('inputGroupList').value;
    
    if(valor == " "){
        alert("Caixa de texto em branco!")
    }else if(array < 1){
        array.push(valor);
    }else{
        array.unshift(valor);
    }
    document.getElementById('outputList').innerHTML = array;
    document.getElementById('inputGroupList').value = " ";
}