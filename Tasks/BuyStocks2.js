let prices1 = [7, 1, 5, 3, 6, 4]; //7
let prices2 = [7, 6, 4, 3, 1]; //0
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

let maxProfit = function (prices){
    let sell = 0;
    for (let i = 0; i < prices.length; i++)
        if (prices[i] <= prices[i+1])
            sell += prices[i+1] - prices[i];
    return sell;
};

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));