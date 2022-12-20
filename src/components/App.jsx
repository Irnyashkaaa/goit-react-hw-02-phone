import React from "react"
import { Contacts } from "./Contacts/Contacts"
import { FilterFormInput } from "./Form/FilterForm"
import { Form } from "./Form/Form"

export class App extends React.Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    name: '',
    number: '',
    filter: ''
  }

  onSubmit = () => {
    let willAdd = true;

    this.state.contacts.map(contact => {
      if (contact.name === this.state.name) {
        return willAdd = false;
      }
    })


    if (willAdd) {
      this.setState({
        contacts: [...this.state.contacts,
        {
          name: this.state.name,
          number: this.state.number,
          id: this.state.name + this.state.number
        }],
        name: '',
        number: ''
      })
    } else {
      this.setState({name: '', number: ''})
      alert("Такий контакт уже існує у вашому записнику, спробуйте ще раз)")
    }
    
  }

  deleteUser = (name) => {
    this.setState({contacts: this.state.contacts.filter(contact => contact.name !== name)})
  };
  handleNameInputChange = event => {
    this.setState({ name: event.currentTarget.value })
  }
  handlePhoneInputChange = event => {
    this.setState({ number: event.currentTarget.value })
  }
  handleFilterInputChange = event => {
    this.setState({filter: event.currentTarget.value})
  }


  render() {
    return <div>
      <Form name={this.state.name} nameOnChange={this.handleNameInputChange}
        number={this.state.number} numberOnChange={this.handlePhoneInputChange}
        submitButton={this.onSubmit} />
      <FilterFormInput filter={this.state.filter} filterOnChange={this.handleFilterInputChange} />
      <Contacts contacts={this.state.contacts} filter={this.state.filter} deleteUser={this.deleteUser}/>

    </div>

  }
}
