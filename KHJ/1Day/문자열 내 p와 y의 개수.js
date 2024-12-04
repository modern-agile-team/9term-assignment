function solution(s){
	var num  =s.toUpperCase() 
    var resulta = num.split('P').length - 1;
	var resultb= num.split('Y').length - 1;
    if (resulta===resultb) {
        return true
    }
    else {return false}
}
           

