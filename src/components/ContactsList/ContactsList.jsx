// import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

// class ContactsList extends Component {
//   static propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
//     filter: PropTypes.string.isRequired,
//   };

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.contacts.map(
//             contact =>
//               contact.name
//                 .toLowerCase()
//                 .includes(this.props.filter.toLowerCase()) && (
//                 <ContactsListItem
//                   key={contact.id}
//                   id={contact.id}
//                   name={contact.name}
//                   number={contact.number}
//                   removeContact={this.props.removeContact}
//                 ></ContactsListItem>
//               )
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// export default ContactsList;

export const ContactsList = ({ filteredContacts, removeContact }) => {
  // console.log(props.filteredContacts);
  return (
    <div>
      <ul>
        {/* {props.contacts.map(
          contact =>
            contact.name.toLowerCase().includes(props.filter.toLowerCase()) && (
              <ContactsListItem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                removeContact={props.removeContact}
              ></ContactsListItem>
            )
        )} */}
        {filteredContacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            removeContact={removeContact}
          />
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
