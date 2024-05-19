
const max3 = (cislo1,cislo2,cislo3) => {
    if (cislo1 > cislo2 && cislo1 > cislo3 && cislo1 != cislo1 && cislo2 != cislo3) {
        return cislo1   
    } else if (cislo2 > cislo1 && cislo2 > cislo3 && cislo2 != cislo1 && cislo2 != cislo3) { 
        return cislo2
    } else if (cislo3 > cislo1 && cislo3 > cislo2 && cislo3 != cislo1 && cislo3 != cislo2) {
        return cislo3
    } else if (cislo1 == cislo2 && cislo1 == cislo3) {
        return "Všechna zadaná čísla jsou stejná"
    } else {
        return "Některá zadaná čísla jsou stejná"
    }
}

document.write(max3(305,311,356))
