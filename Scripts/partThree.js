// Starting CSV Code
let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

// What do we know?
// 4 variables for cells, start with an empty string
// Cells are separated by commas
// Rows are separated by new lines

// Categories
// commas
// newline escape sequence
// EVERYTHING ELSE - ALL OTHER CHARS
// console.log(cell1, cell2, cell3, cell4);

// Variables - we using empty string so that we can concatenate
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

let commas = 0;

// All strings (and arrays) have access to the length property

for (let i = 0; i < str.length; i++) {

    if (str[i] == ',') {
        commas++;

    } else if (str[i] == '\n') {
        console.log(cell1, cell2, cell3, cell4);
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';

        commas = 0;

    } else {
        if (commas == 0) {
            cell1 += str[i];
        } else if (commas == 1) {
            cell2 += str[i];
        } else if (commas == 3) {
            cell3 += str[i];
        } else {
            cell4 += str[i];
        }



    }

    if(i + 1 == str.length){
        console.log(cell1, cell2, cell3, cell4);
    }
}
