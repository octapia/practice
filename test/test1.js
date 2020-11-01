let str = "name=cookie;expired=2020-11-01"
let obj = {}
str.split(`;`).map(item => {
    innerArr = item.split(`=`);
    obj[innerArr[0]] = innerArr[1]
})

console.log(obj)
