function sortNames(nombres) {
    return names.sort((a, b) => a.localeCompare(b));


}

let names = ["Jon", "Kenny", "Tom", "Bob", "Dilan"];
let nombres_Ordenados = sortNames(names);
console.log("Nombres ordenados alfabeticamente:", nombres_Ordenados);