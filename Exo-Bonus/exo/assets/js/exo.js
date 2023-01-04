function add(nb1,nb2){
    
    let add = nb1 + nb2;
    return add;
}

console.log(add(5,10));

function sub(nb1,nb2){
    
    let sub = nb1 - nb2;
    return sub;
}

console.log(sub(5,10));

function mult(nb1,nb2){
    
    let mult = nb1 * nb2;
    return mult;
}

console.log(mult(5,10));

function div(nb1,nb2){
    
    let div = nb1 / nb2;
    return div;
}

console.log(div(5,10));

function mod(nb1,nb2){
    
    let mod = nb1 % nb2;
    return mod;
}

console.log(mod(10,5));

function askUserOperation(){
    
    let operation = window.prompt("Que voulez-vous faire ? Addition, Soustraction ..");
    
    if(operation === "+" || operation === "-" || operation === "*" || operation === "/" || operation === "%"){
        console.log(operation);
        return operation;
    
    }else{
        window.prompt("Que voulez-vous faire ? Addition, Soustraction ..");
    }
}

function askUserFirstNumber(){
    
    let firstNumber = window.prompt("Choississez votre premier nombre :");
    
    return parseInt(firstNumber);
}

function askUserSecondNumber(){
    
    let secondNumber = window.prompt("Choississez votre deuxième nombre :");
    
    return parseInt(secondNumber);
}

function calculator(){
    
    let userOperation = askUserOperation();
    console.log(userOperation);
    let firstNumber = askUserFirstNumber();
    console.log(firstNumber);
    let secondNumber = askUserSecondNumber();
    console.log(secondNumber);
    
    if(userOperation === "+"){
        return add(firstNumber,secondNumber);
        
    }else if(userOperation === "-"){
        return sub(firstNumber,secondNumber);
        
    }else if(userOperation === "*"){
        return mult(firstNumber,secondNumber);
        
    }else if(userOperation === "/"){
        return div(firstNumber,secondNumber);
        
    }else if(userOperation === "%"){
        return mod(firstNumber,secondNumber);
    }

}

let calc = calculator();
console.log(calc);

