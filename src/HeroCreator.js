import React, { Component } from 'react';
import './HeroCreator.css';
var FileSaver = require('file-saver');

class HeroCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroName: '',
      heroHealth: 0,
      heroMana: 0,
      heroResistance: 0,
      heroRegenHealth: 0,
      heroRegenMana: 0,
      heroBasicAttack: 0
    };

    // bind all the this to all the methods
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateHero = this.validateHero.bind(this);
    this.exportJSON = this.exportJSON.bind(this);
    this.importJSON = this.importJSON.bind(this);
  }

  exportJSON() {
    let jsonData = JSON.stringify(this.state);
    var blob = new Blob([jsonData], {type: 'text/plain;charset=utf-8'})
    FileSaver.saveAs(blob, 'hero-'+ this.state.heroName +'.json')
  }

  importJSON(event) {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];

    var fr = new FileReader();

    var that = this;
    fr.onload = function () {
      that.setState(() => JSON.parse(this.result));
      console.log(that.state);
    }

    fr.readAsText(file);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  validateHero(e) {
    e.preventDefault();
    this.exportJSON();
    // TODO: Add some validation
  }

  render() {
    return (
      <div className="HeroCreator">
        <header className="HeroCreator-header">
          <h2>Hero Creator Interface</h2>
          <h3>Now creating - {this.state.heroName}</h3>
        </header>
        <form onSubmit={this.validateHero}>
          <br />
            <p>
              <label>Import a hero file: </label>
              <input className="input" type="file" ref="fileUploader" onChange={this.importJSON} />
            </p>
            <br />
            <p>
              <label>Hero Name: </label>
              <input name="heroName" className="tCell" placeholder="Amazing Hero Name" value={this.state.heroName} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Starting Health: </label>
              <input name="heroHealth" className="tCell" placeholder="123" value={this.state.heroHealth} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Starting Mana: </label>
              <input name="heroMana" className="tCell" placeholder="123" value={this.state.heroMana} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Magic Resistance: </label>
              <input name="heroResistance" className="tCell" placeholder="123" value={this.state.heroResistance} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Basic Attack Damage: </label>
              <input name="heroBasicAttack" className="tCell" placeholder="123" value={this.state.heroBasicAttack} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Health Regen Amount: </label>
              <input name="heroRegenHealth" className="tCell" placeholder="123" value={this.state.heroRegenHealth} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Mana Regen Amount: </label>
              <input name="heroRegenMana" className="tCell" placeholder="123" value={this.state.heroRegenMana} onChange={this.handleInputChange} />
            </p>
          <br />
          <input className="center" type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default HeroCreator;