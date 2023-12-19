const input1 = [0,1,0,2,1,0,1,3,2,1,2,1] //6
const input2 = [4,2,0,3,2,5] //9
//https://leetcode.com/problems/trapping-rain-water/

function trap(height){
// максимум что было слева и справа соответственно
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];

// текущие значения по левому и правому краям
    let curentLeft = 1;
    let curentRight = height.length - 2;
    let total = 0;
// проверяем, что левый указатель меньше либо равен правому
    while (curentLeft <= curentRight){
        if (maxLeft <= maxRight){
// если максимум слева - текущее значение слева > 0, то значение прибавляем в total
            if (maxLeft - height[curentLeft] > 0) {
                total += maxLeft - height[curentLeft];
            }
// обновляем счетчик maxLeft наибольшим значением. Также передвигаем левое текущее значение
        maxLeft = Math.max(maxLeft, height[curentLeft]);
        curentLeft += 1;
// все то же самое мы пишем для правой стороны
        } else {
            if (maxRight - height[curentRight] > 0) {
                total += maxRight - height[curentRight];
            }
            maxRight = Math.max(maxRight, height[curentRight]);
            curentRight -= 1;
    }
    } return total;
};

console.log(trap(input1));
console.log(trap(input2));