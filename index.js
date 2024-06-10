const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const copyCats = [...cats, name];
    return copyCats;
}

function prependCat(name) {
    const catsCopy = [name, ...cats];
    return catsCopy;
}

function removeLastCat() {
    const minusLastCat = cats.slice(0, 2);
    return minusLastCat;
}

function removeFirstCat() {
    const minusFirstCat = cats.slice(1, 3);
    return minusFirstCat;
}
//console.log(cats.slice(1, 3))
