// https://leetcode.com/problems/group-anagrams/description/
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
strs = ["eat","tea","tan","ate","nat","bat"]
var groupAnagrams = function(strs) {
    let myMap = new Map();
    strs.forEach((el) => {
        let sortEl = el.split("").sort().join("");
        if (myMap.has(sortEl)){
            myMap.set(sortEl, [el, ...myMap.get(sortEl)])
        }
        else
        myMap.set(sortEl, [el])
    });
    return (Array.from(myMap.values()))
};
console.log(groupAnagrams(strs))