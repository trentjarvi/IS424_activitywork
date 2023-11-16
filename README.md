# IS424_activitywork
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
  .doc("p4MhGNmClQ2RtaWHNBkO")
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
