function minCost(arr) {
    arr.sort((a, b) => a - b);
    let cost = 0;
    while (arr.length > 1) {
        let sum = arr[0] + arr[1];
        cost += sum;
        arr.splice(0, 2);
        arr.push(sum);
        arr.sort((a, b) => a - b);
    }
    return cost;
}


module.exports=mincost;
