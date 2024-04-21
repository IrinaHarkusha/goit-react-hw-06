import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"
import { useDispatch, useSelector } from "react-redux"
import { deleteContact, selectContacts } from "../../redux/contactsSlice"
import { selectFilter } from "../../redux/filtersSlice"


function ContactList() {

  const contacts = useSelector(selectContacts)
  const searchStr = useSelector(selectFilter)

  const dispatch = useDispatch()

  const handleDelete = id => {
    dispatch(deleteContact(id))
  }
  const getFilteredData = () => {
    return contacts.filter(
      item => item.name.toLowerCase().includes(searchStr.toLowerCase()))
  }

  const data = getFilteredData()
  
  if (!data.length && searchStr) {
    return <h2 className={s.text}>No such contact exists...</h2>
  } else if (!data.length) {
    return <h2 className={s.text}>No available contacts...</h2>
  }
  return (
    <>
    <ul className={s.list}>
        {data.map(contact => (
          <Contact contact={contact} key={contact.id} onDelete={handleDelete} />
      ))}
      </ul>
    </>
  )
}

export default ContactList