// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let priceSum =0
  let sum= 0
  for (let i = 0; i < data.length; i++) {
      sum += data[i].price;
  }
  priceSum= sum / data.length;
  let total = priceSum.toFixed(2);
  console.log("The average price is $"+ total );
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let range14to18= [];
  for (let i = 0; i < data.length; i++) {
    if ((data [i].currency_code == "USD" && (data [i].price <=18) && (data [i].price >=14))){ range14to18.push(data[i].title);
}
}

for (let i = 0; i < range14to18.length; i++) {
    console.log(range14to18[i]);

}
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let gBp = [];
  for (let i = 0; i < data.length; i++) {
    if (data [i].currency_code === "GBP"){
    gBp.push(data[i]);
  }
}
console.log(gBp[0].title +" "+ "costs" + " "+ gBp[0].price + " " +  "pounds.")
}

// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  for (var i = 0; i < data.length; i++) {
for (var t = 0; t < data[i].materials.length; t++) {
  if (data[i].materials[t] ==="wood"){
  console.log(data[i].title + "is made of wood");
}
}
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  for (var i = 0; i< data.length; i++){
    if (data [i].materials.length >=8){
    console.log( data [ i ].title + "has" + data[ i ].materials.length + "materials:");
  for (var t = 0; t < data[i].materials.length; t++ ){
    console.log("-"+ " " + data[i].materials[t]);
  }
}
}
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let creators = 0 ;
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made="i_did"){
      creators +=1;
    }
    }
    console.log(creators + " " + "items were made by their sellers.");

  }
