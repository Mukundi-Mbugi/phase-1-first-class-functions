function receivesAFunction(callBack){
    callBack();
}


function returnsANamedFunction(){
    return function add(a,b){
        return a+b;
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}
