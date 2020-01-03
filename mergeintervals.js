var merge = function(intervals) {
    let result = []

    if (intervals.length === 0) {
        return []
    } else if (intervals.length === 1) {
        return intervals
    }

    intervals.sort((a,b) => a[0] - b[0])
    result.push(intervals[0])

    for (let i = 0; i < intervals.length; i++) {
        let recentOutput = result[result.length - 1]
        if (intervals[i][0] >= recentOutput[0] && intervals[i][0] <= recentOutput[1]) {
            recentOutput[1] = Math.max(recentOutput[1], intervals[i][1]) //changes 2nd value in result
        } else {
            result.push(intervals[i])
        }
    }

    return result
};
