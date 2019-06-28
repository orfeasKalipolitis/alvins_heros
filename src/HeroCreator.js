import React, { Component } from 'react';
import './HeroCreator.css';

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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateHero = this.validateHero.bind(this);
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
    // TODO: Add some validation
  }

  render() {
    return (
      <div className="HeroCreator">
        <header className="HeroCreator-header">
          <h2>Hero Creator Interface</h2>
        </header>
        <form onSubmit={this.validateHero}>
          <br />
            <p>
              <label>Hero Name: </label>
              <input name="heroName" className="tCell" placeholder="Amazing Hero Name" value={this.state.name} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Starting Health: </label>
              <input name="heroHealth" className="tCell" placeholder="123" value={this.state.health} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Starting Mana: </label>
              <input name="heroMana" className="tCell" placeholder="123" value={this.state.mana} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Magic Resistance: </label>
              <input name="heroResistance" className="tCell" placeholder="123" value={this.state.mana} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Basic Attack Damage: </label>
              <input name="heroBasicAttack" className="tCell" placeholder="123" value={this.state.mana} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Health Regen Amount: </label>
              <input name="heroRegenHealth" className="tCell" placeholder="123" value={this.state.mana} onChange={this.handleInputChange} />
            </p>
            <p>
              <label>Mana Regen Amount: </label>
              <input name="heroRegenMana" className="tCell" placeholder="123" value={this.state.mana} onChange={this.handleInputChange} />
            </p>
          <br />
          <input className="center" type="submit" />
        </form>
      </div>
    );
  }
}

export default HeroCreator;