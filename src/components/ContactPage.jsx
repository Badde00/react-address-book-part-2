import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContactContext } from "../App";


function ContactPage() {
  const { id } = useParams();
  const { contacts } = useContext(ContactContext);
  const contact = contacts.find(c => c.id === parseInt(id));

  if (!contact) {
    return <h1>Contact not found</h1>;
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>{contact.street}, {contact.city}</p>
    </div>
  );
}

export default ContactPage;