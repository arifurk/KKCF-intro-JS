function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // taken from stack overflow at https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

let noun = prompt('Enter a name')
let number = getRandomInt(1, 5)
let number2 = number + 2

let boolean = true
if (getRandomInt(1,2) == 1) {
    boolean = false
} 

let sen1 = 'There was a person named ' + noun + '. '
let sen2 = 'They had ' + number + ' shovels. '
let sen3 = 'For some reason, they wanted to dig up ' + number2 + ' holes in their yard. '

let sen4 = "And so they did, because who would've stopped them. "
if (boolean) {
    sen4 = 'But all their shovels broke while trying to dig those holes. '
}
let sen5 = 'Is there something to take away from this? Probably not. '

let final = sen1 + sen2 + sen3 + sen4 + sen5
console.log(final)

document.getElementById('story').innerHTML = "<h3>"+final+"</h3>" // taken from https://codegyan.in/articles/how-to-convert-a-string-to-html-using-javascript.htm