(function() {
  // "use strict";

  function doAjax(url, method, callback, data) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Content-Type", "application/json");
      data = data ? JSON.stringify(data) : null;
      if (method.toLowerCase() === "post") {
        if (!data) throw new Error("bad call");
      }
      xhr.onload = evt =>
        callback(evt.target.response || evt.srcElement.response);
      xhr.send(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function createCampaign(e) {
    //return console.log(e)
    e.preventDefault();

    //        return console.log("ici tout va bien")

    const url = "http://localhost:8081/api/v1/campaign/createCampaign";
    doAjax(
      url,
      "POST",
      res => {
        window.alert("campaign created");
        // console.log(JSON.parse(res));
        console.log("app.js/res", res);
      },
      {
        name: document.getElementById("input").value,
        ft_id: 10
      }
    );
  }

  const getCampaign = function getCompaign() {
    const url = "http://localhost:8081/api/v1/campaign/displayCampaign";
    doAjax(url, "GET", res => {
      // console.log(JSON.parse(res));
      displayCampaign(JSON.parse(res));
    });
  };

  const getQuestions = function getQuestions() {
    const url = "http://localhost:8081/api/v1/campaign/displayQuestions";
    doAjax(url, "GET", res => {
      // console.log(JSON.parse(res));
      displayQuestions(JSON.parse(res));
    });
  };

  function displayCampaign(tableau) {
    if (tableau === undefined) return;

    tableau.forEach(function(e) {
      console.log(e);
      //if (e.state === 0) {
      //  e.state = "En cours";
      //}
      e.state === 0 ? (e.state = "En cours") : (e.state = "Terminée");
      var ul = document.createElement("ul");
      var li = document.createElement("li");
      document.body.appendChild(ul);
      ul.innerHTML = "";
      li.textContent = `${e.name} -  ${e.date} - statut de la campagne: ${
        e.state
      }`;
      ul.appendChild(li);
    });
  }

  function displayQuestions(tableau) {
    if (tableau === undefined) return;

    tableau.forEach(function(e) {
      console.log(e);
      var ul = document.createElement("ul");
      var li = document.createElement("li");
      document.body.appendChild(ul);
      ul.innerHTML = "";
      li.textContent = `${e.number} - ${e.wordingcat} - ${e.wordingques} : ${
        e.url
      }`;
      ul.appendChild(li);
    });
  }

  function createReponse(e) {
    //return console.log(e)
    e.preventDefault();
    //        return console.log("ici tout va bien")

    const url = "http://localhost:8081/api/v1/campaign/campaign";
    const yesNo = document.getElementsByClassName("reponse"); // tableau d'élements
    let wordingValue; // si le premier bouton radio (oui) est checked alors la valeur du bouton est true sinon c'est false (non)
    if (yesNo[0].checked === true) {
      wordingValue = true;
    } else if (yesNo[1].checked === true) {
      wordingValue = false;
    }

    doAjax(
      url,
      "POST",
      res => {
        window.alert("Reponse created");
        // console.log(JSON.parse(res));
        console.log("app.js/res", res);
      },
      {
        wording: wordingValue,
        action: document.getElementById("action").value,
        campagne_id: 23,
        question_id: 1
      }
    );
  }

  const getReponse = function getReponse() {
    const url = "http://localhost:8081/api/v1/campaign/campaignFinish";
    doAjax(url, "GET", res => {
      // console.log(JSON.parse(res));
      displayReponse(JSON.parse(res));
    });
  };

  function displayReponse(tableau) {
    if (tableau === undefined) return;
    // li.appendChild(img);
    tableau.forEach(function(e) {
      console.log(e);
      // e.wording === 0
      //   ? (e.wording = document.createElement("img").innerHTML = (
      //       <img src="/wrong.png" alt="" />
      //     ))
      //   : (e.wording = document.createElement("img").innerHTML = (
      //       <img src="/checked.png" alt="" />
      //     ));
      let ul = document.createElement("ul");
      let li = document.createElement("li");
      let imgFalse = document.createElement("img");
      let imgTrue = document.createElement("img");
      imgFalse.setAttribute("src", "./wrong.png");
      imgTrue.setAttribute("src", "./checked.png");
      document.body.appendChild(ul);
      ul.innerHTML = "";
      ul.appendChild(li);
      li.textContent = `${e.wordingques} ${e.actionres}`;
      if (e.wordingres === 0) {
        li.appendChild((e.wordingres = imgFalse));
      } else {
        li.appendChild((e.wordingres = imgTrue));
      }
    });
  }

  function start() {
    let buttonCampagne = document.getElementById("button-campagne"); // Valider Campagne
    let display = document.getElementById("display"); // Afficher campagnes
    let quest = document.getElementById("quest"); // Afficher questions
    let buttonReponse = document.getElementById("button-reponse"); // Valider reponse
    let displayReponse = document.getElementById("displayReponse"); // Afficher reponses

    if (buttonCampagne)
      buttonCampagne.onclick = function(evt) {
        createCampaign(evt);
      };

    if (display)
      display.onclick = function() {
        getCampaign();
        displayCampaign();
      };

    if (quest)
      quest.onclick = function() {
        getQuestions();
        displayQuestions();
      };

    if (buttonReponse)
      buttonReponse.onclick = function(evt) {
        createReponse(evt);
      };

    if (displayReponse)
      displayReponse.onclick = function(evt) {
        getReponse();
      };
  }

  window.addEventListener("DOMContentLoaded", start);
})();
