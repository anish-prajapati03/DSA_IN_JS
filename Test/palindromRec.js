let isPallindrome = (n) => {
    let i = 0
    let j = n.length - 1

    while (i < j) {
        if (n.charAt(i) != n.charAt(j)) return false
        i++;
        j--;
    }
    return true
}
console.log(isPallindrome("AbA"))