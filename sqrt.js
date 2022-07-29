// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.


function mySqrt(x){

    //binary search
    // 0 1 2 3 4 5 6 7 8 9 10
                        // x


    // O(log(n))
    
    let left = 0;
    let right = x;
                       
    // the sqrt of 0 and 1 is itself, so we return x in those cases
     if (x <= 1){
         return x;
        }                   
                        
    while(left < right){

        // find the midpoint between the left and right numbers
        let middle = Math.floor((right + left)/2);
        //declare what square is
        let square = middle * middle;
        //return the middle number if it's the sqrt
        if (square == x) return middle;
        // if the squared number is less than x, then the answer is on the right
            if(square < x){
                left = middle + 1;
                } else{
                    // else if the squared number is less than x, the answer is on the left 
                    right = middle;
                }
                }
        return left -1;
};