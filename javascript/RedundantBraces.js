module.exports = { 
	braces : function(A){
    var input = [];
    var isredundant = 0;
    A.split('').forEach(char => {
        if (char == ')') {
            var top = input[input.length-1];
            input.pop();
            var status = true;
 
            while (input.length!=0 && top != '(') {
                if (top == '+' || top == '-' ||
                    top == '*' || top == '/')
                    status = false;
                top = input[input.length-1];
                input.pop();
            }
            if (status == true)
            isredundant = 1;
        }
        else
            input.push(char);
    });
    return isredundant;
	}
};
