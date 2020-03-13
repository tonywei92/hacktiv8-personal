function mountainView(heights, landscapeHeight, landscapeWidth) {
  const minimumWidth = heights.reduce((carry, height) => carry + (height * 2 - 1), 0)

  if (landscapeWidth < minimumWidth) {
    return `Landscape Width tidak memenuhi nilai minimal, nilai minimal ${minimumWidth}`
  }

  if (landscapeHeight !== landscapeWidth) {
    return 'Landscape Width dan Landscape height harus sama'
  }

  const landscape = Array.from({length: landscapeHeight}).map(() => Array.from({length: landscapeWidth}).fill(' '))

  heights.forEach((height, index) => {
    const beforeHeight = index === 0 ? -1 : heights[index - 1] + (heights[index - 1] - 1) - 1
    const peekPoint = [landscapeHeight - height, height + beforeHeight]
    const arrayOfPosition = []

    const loopIndex = index === 0 ? 0 : heights[index - 1] + (heights[index - 1] - 1)

    for (let i = 0; i < height - 1; i++) {
      arrayOfPosition.push([landscapeWidth - 1 - i, i + loopIndex])
    }

    arrayOfPosition.push(peekPoint)

    for (let i = peekPoint[0] - 1; i > peekPoint[0] - height; i--) {
      const lastPost = arrayOfPosition[arrayOfPosition.length - 1]
      console.log({lastPost})
      arrayOfPosition.push([lastPost[0] + 1, lastPost[1] + 1])
    }

    for (let i = 0; i < landscapeHeight; i++) {
      for (let j = 0; j < landscapeWidth; j++) {
        const findPos = arrayOfPosition.find(pos => pos[0] === i && pos[1] === j)

        if (findPos) {
          landscape[i][j] = '🏔'
        }
      }
    }
  })

  return landscape
}

console.log(mountainView([3, 4], 12, 12))
