function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Exemplo de uso:
const array = [10, 5, 2, 3, 7, 6, 8, 1, 9, 4];
console.log('Array original:', array);
console.log('Array ordenado:', quickSort(array));