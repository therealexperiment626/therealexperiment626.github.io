
var table = prompt('Enter a number');             // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table<h2>'; 

if (operator === 'addition') {
  // Do addition
//   while (i < 11) {
//     msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
//     i++;
//   }
// } else {
//   // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;