function drawMagnetic(data){
  let splitData = data.split("")
  const limit = 3
  splitData.forEach((str, idxStr) => {
    if (str === "i" && splitData[idxStr - 1] !== "m" && splitData[idxStr + 1] !== "m") {
      let idxLeft = -1
      let idxRight = -1
      for (let i = 2; i <= limit; i++) {
        if (splitData[idxStr - i] === "m") {
          idxLeft = idxStr - i
        }
        if (splitData[idxStr + i] === "m") {
          idxRight = idxStr + i
        }
        if (idxLeft >= 0 && idxRight === -1) {
          splitData[idxStr - i + 1] = "i"
          splitData[idxStr] = "-"
          break
        } else if (idxLeft === -1 && idxRight >= 0) {
          splitData[idxStr + i - 1] = "i"
          splitData[idxStr] = "-"
          break
        }
      }
    }
  })
  console.log(splitData.join(""))
}


drawMagnetic('m---i----m-i--m-m--i')
// m---i----mi---m-mi--
drawMagnetic('m-i---mmi-mm')
// mi----mi---m
drawMagnetic('i-m-i-mi-m-i')
//-imi----imi-
