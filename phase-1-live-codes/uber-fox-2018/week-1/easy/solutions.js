let str = "abacccccabacccceeeeddddabaeeeaba";
let str2 = "kkkmmmmooonnoooommmmxxxppaaammmm";
function count(str, length){
    let combinations = []
    for(let i=0;i<str.length;i++){
        combinations.push(str.slice(i,i+length))
    }
    console.log(combinations);
    
    let counter = {}

    for(let j=0;j<combinations.length;j++){
        let combination = combinations[j]
        let cLength = str.split(combination).length - 1
        // console.log(`ok ${combination}`, cLength);
        if(counter[combination] === undefined ){
            counter[combination] = 1
        }else{

            counter[combination] += 1
        }
        
    }

    console.log(counter)
}

count(str2, 3)


