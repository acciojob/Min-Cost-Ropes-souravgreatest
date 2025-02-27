function minCost(arr) {
    const pq = new MinPriorityQueue({ priority: x => x });
    
    // Insert all elements into the priority queue
    arr.forEach(num => pq.enqueue(num));
    
    let cost = 0;
    
    // While there's more than one element in the queue
    while (pq.size() > 1) {
        const a = pq.dequeue().element;
        const b = pq.dequeue().element;
        
        const sum = a + b;
        cost += sum;
        
        pq.enqueue(sum);
    }
    
    return cost;
}
/*

1 2 3 4 5
5 5 5 -> 10
10 5  -> 10
15

*/

module.exports=mincost;
