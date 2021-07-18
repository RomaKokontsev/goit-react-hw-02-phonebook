import s from "./ContactsList.module.css";
import React from "react";
import PropTypes from "prop-types";
import { AiOutlineUserDelete } from "react-icons/ai";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.listItem} key={id}>
        <span className={s.listItemText}>{name}:</span>
        <span className={s.listItemText}>{number}</span>
        <button
          className={s.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete <AiOutlineUserDelete size="15px" />
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
