import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div className="question-form">
        <div className="question-form-menu">
          <hr/><hr/><hr/>
        </div>
        <div className="question-form-card">
          <h3>01 <span>/ 49</span></h3>
          <hr/>
          <h2>A - Process: Les bases</h2>
          <p>L'équipe s'est elle réunie au moins une fois les 2 derniers
            mois pour améliorer ses méthodes de travail ?
          </p>
          <form className="form">
           <div className="form-inputs">
             <div className="inputGroup">
               <input id="radio1" name="radio" type="radio"/>
               <label htmlFor="radio1">Oui</label>
             </div>
             <div className="inputGroup">
               <input id="radio2" name="radio" type="radio"/>
               <label htmlFor="radio2">Non</label>
             </div>
           </div>
          </form>
        </div>
      </div>
    )
  }
}