import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = { onSubmitContactForm: PropTypes.func.isRequired };

  inputName = nanoid();
  inputNumber = nanoid();

  handleChange = event => {
    // console.log([event.target.name]);
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmitContactForm({
      name: e.target.name.value,
      number: e.target.number.value,
    });
    e.target.reset();
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className={s.form}>
        <label htmlFor={this.inputName}>Name</label>
        <input
          type="text"
          id={this.inputName}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label htmlFor={this.inputNumber}>Number</label>
        <input
          type="tel"
          id={this.inputNumber}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button type="submit" className={s.addbutton}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
