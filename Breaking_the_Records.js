

function breakingRecords(scores) {    /* The function breakingRecords takes an array of scores 
                                         and returns an array containing the total number of times 
                                         the highest and lowest scores are broken.*/
    // Write your code here
    let highest = scores[0]; // Inside the function, the first element of the array is assigned to the 'highest' variable.
    let lowest = scores[0]; // Inside the function, the first element of the array is assigned to the 'lowest' variable.

                         // Then the 'countHigh' and 'countLow' variables are initialized with the value of 0.
    let countHigh = 0; 
    let countLow = 0;

for (let i = 1; i < scores.length; i++) {  // The for loop starts from index 1 and loops till the end of the 'scores' array.
    if (scores[i] > highest) {            // Inside the for loop, if the score at index 'i' is greater than the 'highest' score, 
                                         // then it replaces the 'highest' score with the score at index 'i' and increment 
                                        // the 'countHigh' variable.
                            
        highest = scores[i];
        countHigh++;
    } else if (scores[i] < lowest) {     //  Similarly, if the score at index 'i' is less than the 'lowest' score, then it replaces
                                        // the 'lowest' score with the score at index 'i' and increment the 'countLow' variable.

        lowest = scores[i];
        countLow++;
    }
}

return [countHigh, countLow];   // Finally, the function returns [countHigh, countLow] which contains 
                               // the number of times the highest and lowest scores were broken. 

}