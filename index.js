// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight='*') {
    return function(adj='special'){
        return `You are ${highlight}${adj}${highlight}!`
    }

}

const Calculator = {
    add: function(a,b) {
        return a+b
    },
    subtract: function(a,b) {
        return a-b
    },
    multiply: function(a,b) {
        return a*b
    },
    divide: function(a,b) {
        return a/b
    },
    actionApplyer: function(start,[]) {
        
    }
}


function actionApplyer(start,functions){
    if (functions.length === 0){
        return start
    } else {
        let result = functions[2](functions[1](functions[0](start)));
        return result 
    }
}