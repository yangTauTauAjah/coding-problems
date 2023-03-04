function jumpingOnClouds(c: number[]): number {
    let counter = 0
    let i = 0

    while (true) {
        if (c[i += 2] === 1) c[i -= 1]
        counter++
        if (i === c.length || i === c.length - 1) break
    }
    
    return counter
}
