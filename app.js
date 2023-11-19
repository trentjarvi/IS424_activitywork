// function to delete docs

function del_doc(id) {
  db.collection("people")
    .doc(id)
    .delete()
    .then(() => alert("user deleted"));
}

// function update doc
function update_doc(ele, id) {
  // console.log(ele);
  // change every input element that's hidden to become a text input box/element
  // access the parent of teh button and look inside of the parent

  let inputs = ele.parentNode.querySelectorAll("input");
  // console.log(inputs);

  // change the type from hidden to text
  // inputs.forEach((i) => {
  //   i.type = "text";
  //   db.collection("people").doc(id).update({
  //     name: i.value,
  //   });
  // });

  inputs[0].type = "text";
  inputs[1].type = "text";

  db.collection("people").doc(id).update({
    name: inputs[0].value,
    color: inputs[1].value,
  });
}
// console.log(firebase);

// attach a click event listener to the button

let btn = document.querySelector("#submit");
//console.log(btn);

btn.addEventListener("click", () => {
  // alert("hello");
  let person = {
    name: document.querySelector("#name").value,
    age: document.querySelector("#age").value,
    color: document.querySelector("#favcolor").value,
  };

  console.log(person);

  // submit the object to firestore
  db.collection("people")
    .add(person)
    .then(() => alert("new person added"));

  // .then is an asynchronous method meaning it will only take place after the add has finished execution which is a few milliseconds

  // reset the form
  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#favcolor").value = "";

  // make a call to the DB to get teh latest data - you would create a function called something like "getData()"
  // and wrap the get from teh collection from below
});

// display a list of all people
// get()

// when you call .get() there is something you get back which is represented in the data variable in .then((data))
db.collection("people")
  .get()
  .then((data) => {
    // have to call .docs to get the actual document data
    // have to call data function after you get the specific doc to get the actual data
    // can now access the name key w/ .name
    //console.log(data.docs[0].data().name);

    let docs = data.docs;
    // loop through the docs array w/ forEach
    let html = ``;
    docs.forEach((doc) => {
      //   console.log(doc.data());
      html += `<p id="${doc.id}" class="box">${doc.data().name}

      
      <input type="hidden" value="${doc.data().name}" />

      ${doc.data().color}

      <input type="hidden" value="${doc.data().color}" />

      <button onclick="update_doc(this, '${
        doc.id
      }')" class="is-pulled-right">update</button>

      <button onclick="del_doc('${
        doc.id
      }')" class="is-pulled-right">x</button></p>`;
    });

    // console.log(html);
    document.querySelector("#all_people").innerHTML = html;
  });

db.collection("people").doc("5Cj5dqdS0eM94eB5N5n8").update({
  name: "kelly j",
});

// update kelly's friends - add mike
// db.collection("people")
//   .doc("Ri0khQKv92JVZntRYWJF")
//   .update({
//     friends: firebase.firestore.FieldValue.arrayUnion("mike"),
//     friends: firebase.firestore.FieldValue.arrayUnion("julie"),
//   });

// update kelly's friends - remove jackie
// db.collection("people")
//   .doc("Ri0khQKv92JVZntRYWJF")
//   .update({
//     friends: firebase.firestore.FieldValue.arrayRemove("jackie"),
//   });

// update kelly's friends - remove john
// update kelly's document - add favorites
// db.collection("people")
//   .doc("Ri0khQKv92JVZntRYWJF")
//   .update({
//     friends: firebase.firestore.FieldValue.arrayRemove("john"),
//     favorites: {
//       color: "pink",
//       food: "pizza",
//       city: "Madison",
//     },
//   });

// update kelly's favorite color to purple in favorites field
// db.collection("people").doc("Ri0khQKv92JVZntRYWJF").update({
//   "favorites.color": "purple",
// });

// updating kelly's favorite color to new purplse in favorites field in a different way than above method
// db.collection("people")
//   .doc("Ri0khQKv92JVZntRYWJF")
//   .update({
//     favorites: {
//       color: "new purple",
//     },
//   });

// delete the user trent j
// db.collection('people').doc('bJbagEYBN6XUHaTniB9v').delete()

// what would happen if we had delete buttons

// query

// db.collection("people")
//   .where("friends", "array-contains", "jackie")
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show all people who have jackie or tom as friends
// ^ this would require adding a friends array to each doc in the collection

// db.collection("people")
//   .where("friends", "array-contains-any", ["jackie", "tom"])
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show all people with red or green as their favorite color
// db.collection("people")
//   .where("color", "in", ["red", "green"])
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// Task 1 - adding the data

// let rm = {
//   team_name: "Real Madrid",
//   city: "Madrid",
//   country: "Spain",
//   top_scorers: ["Ronaldo", "Benzema", "Hazard"],
//   worldwide_fans: 798,
// };

// let barca = {
//   team_name: "Barcelona",
//   city: "Barcelona",
//   country: "Spain",
//   top_scorers: ["Messi", "Suarez", "Puyol"],
//   worldwide_fans: 738,
// };

// let manu = {
//   team_name: "Manchester United",
//   city: "Manchester",
//   country: "England",
//   top_scorers: ["Cantona", "Rooney", "Ronaldo"],
//   worldwide_fans: 755,
// };

// let mancity = {
//   team_name: "Manchester City",
//   city: "Manchester",
//   country: "England",
//   top_scorers: ["Sterling", "Aguero", "Haaland"],
//   worldwide_fans: 537,
// };

// let brazil = {
//   team_name: "Brazil National Team",
//   city: "N/A",
//   country: "Brazil",
//   top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
//   worldwide_fans: 950,
// };

// let argentina = {
//   team_name: "Argentina National Team",
//   city: "N/A",
//   country: "Argentina",
//   top_scorers: ["Messi", "Batistuta", "Maradona"],
//   worldwide_fans: 888,
// };

// let atletico = {
//   team_name: "Atletico Madrid",
//   city: "Madrid",
//   country: "Spain",
//   top_scorers: ["Aragones", "Griezmann", "Torez"],
//   worldwide_fans: 400,
// };

// db.collection("teams").add(rm);
// db.collection("teams").add(barca);
// db.collection("teams").add(manu);
// db.collection("teams").add(mancity);
// db.collection("teams").add(brazil);
// db.collection("teams").add(argentina);
// db.collection("teams").add(atletico);

// Task 2 - Querying the data

db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = `<div id="one" class="box p-3">1.  All teams in Spain`;
    docs.forEach((d) => {
      //console.log(`1. ${d.data().team_name}`);
      html += `<p>${d.data().team_name}</p>`;
    });
    html += `</div>`;
    document.querySelector("#teams").innerHTML += html;
  });

db.collection("teams")
  .where("country", "==", "Spain")
  .where("city", "==", "Madrid")
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = `<div id="one" class="box p-3">2.  All teams in Madrid, Spain`;
    docs.forEach((d) => {
      // console.log(`2. ${d.data().team_name}`);
      html += `<p>${d.data().team_name}</p>`;
    });
    html += `</div>`;
    document.querySelector("#teams").innerHTML += html;
  });

db.collection("teams")
  .where("city", "==", "N/A")
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = `<div id="one" class="box p-3">3.  All national teams`;
    docs.forEach((d) => {
      //console.log(`3. ${d.data().team_name}`);
      html += `<p>${d.data().team_name}</p>`;
    });
    html += `</div>`;
    document.querySelector("#teams").innerHTML += html;
  });

db.collection("teams")
  .where("country", "!=", "Spain", "England")
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = `<div id="one" class="box p-3">4.  All teams not in Spain`;
    docs.forEach((d) => {
      //console.log(`5. ${d.data().team_name}`);
      html += `<p>${d.data().team_name}</p>`;
    });
    html += `</div>`;
    document.querySelector("#teams").innerHTML += html;
  });

db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = `<div id="one" class="box p-3">5.  All teams not in Spain or England`;
    docs.forEach((d) => {
      //console.log(`5. ${d.data().team_name}`);
      html += `<p>${d.data().team_name}</p>`;
    });
    html += `</div>`;
    document.querySelector("#teams").innerHTML += html;
  });

db.collection("teams")
  .where("worldwide_fans", ">", 700)
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = `<div id="one" class="box p-3">6.  All teams in Spain with more than 700M fans`;
    docs.forEach((d) => {
      //console.log(`5. ${d.data().team_name}`);
      html += `<p>${d.data().team_name}</p>`;
    });
    html += `</div>`;
    document.querySelector("#teams").innerHTML += html;
  });

db.collection("teams")
  .where("worldwide_fans", ">", 500)
  .where("worldwide_fans", "<", 600)
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = `<div id="one" class="box p-3">7.  All teams with a fan range of 500M to 600M`;
    docs.forEach((d) => {
      //console.log(`7. ${d.data().team_name}`);
      html += `<p>${d.data().team_name}</p>`;
    });
    html += `</div>`;
    document.querySelector("#teams").innerHTML += html;
  });

db.collection("teams")
  .where("top_scorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = `<div id="one" class="box p-3">8.  All teams where Ronaldo is a top scorer`;
    docs.forEach((d) => {
      //console.log(`8. ${d.data().team_name}`);
      html += `<p>${d.data().team_name}</p>`;
    });
    html += `</div>`;
    document.querySelector("#teams").innerHTML += html;
  });

db.collection("teams")
  .where("top_scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = `<div id="one" class="box p-3">9.  All teams where Ronaldo, Maradona, or Messi is a top scorer`;
    docs.forEach((d) => {
      //console.log(`9. ${d.data().team_name}`);
      html += `<p>${d.data().team_name}</p>`;
    });
    html += `</div>`;
    document.querySelector("#teams").innerHTML += html;
  });

// Task 3 - updating the data
// a. updating
db.collection("teams").doc("wEepHKDhuyp9GhmX9FB4").update({
  worldwide_fans: 811,
  team_name: "Real Madrid FC",
});

db.collection("teams").doc("p4MhGNmClQ2RtaWHNBkO").update({
  worldwide_fans: 747,
  team_name: "FC Barcelona",
});

db.collection("teams")
  .doc("wEepHKDhuyp9GhmX9FB4")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
  });

db.collection("teams")
  .doc("wEepHKDhuyp9GhmX9FB4")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
  });

db.collection("teams")
  .doc("p4MhGNmClQ2RtaWHNBkO")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
  });

db.collection("teams")
  .doc("p4MhGNmClQ2RtaWHNBkO")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
  });

// b. adding fields
db.collection("teams")
  .doc("wEepHKDhuyp9GhmX9FB4")
  .update({
    color: {
      home: "White",
      away: "Black",
    },
  });

db.collection("teams")
  .doc("p4MhGNmClQ2RtbaWHNBkO")
  .update({
    color: {
      home: "Red",
      away: "Gold",
    },
  });

// update jersey colors
db.collection("teams").doc("wEepHKDhuyp9GhmX9FB4").update({
  "color.away": "Purple",
});

db.collection("teams").doc("p4MhGNmClQ2RtaWHNBkO").update({
  "color.home": "Pink",
});
