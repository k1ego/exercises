let input1 = [[1,3], [2,6], [8,10], [15,18]]; //[[1,6], [8,10], [15,18]]
let input2 = [[1,4], [4,5]]; //[[1,5]]
let input3 = [[11,12], [2,3], [5,7], [1,4], [8,10], [6,8]]; //[ [ 1, 4 ], [ 5, 10 ], [ 11, 12 ] ]
// https://leetcode.com/problems/merge-intervals/

function merge(intervals){
    if (intervals.length < 2) {
        return intervals;
    }
    // сортируем массивы в порядке возрастания по первым значениям
    intervals.sort((a,b) => a[0] - b[0]);

    // result будет принимать значение первого отсортированного интервальчика
    let result = [intervals[0]];

    // теперь итерируемся по переданным интервалам
    for (let interval of intervals){

        // смотрим на самый последний элемент в result, то есть для первого - это [1,3] итд
        let recent = result[result.length-1];

        /* проверяем, что окончание recent, то есть это 1ый элемент в массиве
        больше начала текущего интервала interval*/
        if (recent[1] >= interval[0]){
            // нам необходимо менять окончание result, если второй массив выходит за рамки первого
            // то есть выбираем максимальное - либо recent[1], который уже записан, либо оконачание текущего интервала interval[1]
            recent[1] = Math.max(recent[1], interval[1]);
        }else {
            result.push(interval)
        }
    }
    return result;
};

console.log(merge(input1));
console.log(merge(input2));
console.log(merge(input3));