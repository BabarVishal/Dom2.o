// Higher Order Functions and Passing Functions as Arguments

function vishal(h1,h2){
      return h1 + h2;
}

function babar(h1,h2){
    return h1 - h2;
}

function multi(h1,h2){
    return h1 * h2;
}

function div(h1,h2){
    return h1 / h2;
}

function modulo(h1,h2){
    return h1 % h2;
}

function all(h1,h2,operator){
    return operator(h1,h2);
}

all(2,3,vishal);   // 5

all(2,3,babar);    // -1