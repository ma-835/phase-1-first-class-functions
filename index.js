function receivesAFunction (Spy){
return Spy();
}
receivesAFunction(function(){return 'Spy'});

function callme (){
    return history;
}

function returnsANamedFunction(){
   return callme;
}

function returnsAnAnonymousFunction () {
   return function () { return hamada}
}