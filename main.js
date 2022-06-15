//exercie 1

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }

//exercice 2
function isSameNum(a,b){
    if(a===b){
    return true;
}
else{
    return false;
}
}

console.log(isSameNum(a,b));

//exercice 3

function filterArray(arr) {
	var newArr = []
	
	for(var i=0; i < arr.length; i++){
		if (typeof arr[i] === 'number'){
			newArr.push(arr[i])
		} 
	}
	
	return newArr;
}
filterArray([]);


//exercice 4

let ABSUM = function(arr) {
    var x=0;
    for (var i=0;i<arr.length; i++){

        x+= Math.abs(arr[i]);
    }
 return x;
}
ABSUM([]);


//exercice 5

let countTrue = function(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === true){
			count++;
		}
        
	}
	return count;
}
countTrue([]);

//exercice 6

function inkLevel(inks) {
    return Math.min(...Object.values(inks))
}
inkLevel({ });


//exerice 7

function ObjectToArray(obj){
	var keys = Object.keys(obj);
	var values = Object.values(obj);
	var flist =[];
	
	for(i=0;i<keys.length;i++)
	{
		var slist =[keys[i],values[i]];
		flist.push(slist);
	}
	return flist;
	
	} 

//exercice 8

