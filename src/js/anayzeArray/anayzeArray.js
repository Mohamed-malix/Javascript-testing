export function analyzeArray(arr) {
    const min= Math.min(...arr);
    const max= Math.max(...arr);
    const average= getAverage(arr);

    const object= {
        average,
        min,
        max,
        length:arr.length,
    }
    return object;
}

function getAverage(arr) {
    const sum= arr.reduce((sum, curr) => {
       return sum+curr; 
    },0);

    return sum/arr.length;
}