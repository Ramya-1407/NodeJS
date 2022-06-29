var book={title:"Core Java",author:"Herbert Shield",price:500,publisher:"ABCD"}
var jsonbook=JSON.stringify(book)
console.log(jsonbook)


console.log(jsonbook)
var bookobj=JSON.parse(jsonbook)
for(ele in bookobj)
    //console.log(ele)
    console.log(ele+":"+bookobj[ele])