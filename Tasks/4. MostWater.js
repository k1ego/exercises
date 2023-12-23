// https://leetcode.com/problems/container-with-most-water/

const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
const input2 = [1, 1]; // 1
const input3 = [4, 3, 2, 1, 4]; // 16
const input4 = [1, 2, 1]; // 2

function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right){
        let currentVolume = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentVolume);

        if (height[left] < height[right]){
            left += 1;
        } else {
            right -= 1;
        }
    }
    return maxArea;
}
console.log(maxArea(input1));
console.log(maxArea(input2));
console.log(maxArea(input3));
console.log(maxArea(input4));
