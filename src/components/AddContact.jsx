import { useContext } from "react";
import { ContactContext } from "../App";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const { setContacts } = useContext(ContactContext);
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://boolean-uk-api-server.fly.dev/badde00/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        street: event.target.street.value,
        city: event.target.city.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          return alert(data.error);
        }
        setContacts((prevContacts) => [...prevContacts, data]);
        navigate("/");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required />
      <label htmlFor="street">Street</label>
      <input type="text" id="street" name="street" required />
      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" required />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;