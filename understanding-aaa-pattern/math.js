// this is the file that contains the function that will be tested
//  added a comment to make sure the file is not empty
export function add(numbers){
    let sum = 0;
    
    // throw new Error("is not iterable");

    for(const number of numbers){
        sum += +number;
    }   
    return sum;
}




