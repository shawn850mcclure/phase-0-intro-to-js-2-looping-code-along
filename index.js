const name =  (["Guadalupe", "Ollie", "Ake"]);
function writeCards(name){
    const name2 = []
    let i = 0;
    while (i < name.length){
        console.log(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        name2.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
        i++
    }
    return name2
}
function countDown(numbers){
    if(numbers >= 0){
        console.log(numbers);
        numbers--;
        countDown(numbers)
    }
}
