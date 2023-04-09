/* The viral advertising hackerrank solution is a coding problem that involves 
calculating the total number of people who are reached through a viral advertising campaign.

The problem statement can be found on the HackerRank website: https://www.hackerrank.com/challenges/strange-advertising/problem

The code solution is as follows: */

function viralAdvertising(n) {
    let shared = 5;
    let liked = 0;
    let cumulativeLikes = 0;
    
    for (let i = 1; i <= n; i++) {
         liked = Math.floor(shared / 2); // only half of the shared ads are liked
        cumulativeLikes += liked; //  # add the new set of people who liked the ad to cumulativeLikes
        shared = liked * 3;  // # each person who likes the ad shares it with 3 more people
    }
    
    return cumulativeLikes;
}

/* This function takes in one integer argument `n`, which represents the number of days the advertising campaign runs for. 
The function then returns an integer representing the total number of people who liked the ad at the end of `n` days.

The logic of the function is to first set `liked` and `cumulativeLikes` to 0 and 0 respectively, 
as that is the initial starting point in the advertising campaign. 
Then, for each subsequent day starting from day 0, 
the number of people who share the ad is calculated based on 
the number of people who liked the ad the previous day (multiplied by 3). 
The number of people who like the ad is then calculated as half of the number of shared ads,
rounded down to the nearest integer using the `math.floor()` function. 
The new set of people who like the ad is then added to `cumulativeLikes`. After `n` days, the final value of `cumulativeLikes` is returned. */