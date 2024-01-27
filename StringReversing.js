function ReverseString(string){
    let newStr = "";
    for (var i= string.length - 1; i >=0 ;i--) {
        newStr += string[i];
        }
        return newStr;

        }
        console.log(ReverseString("HELLO WORLD")); 

