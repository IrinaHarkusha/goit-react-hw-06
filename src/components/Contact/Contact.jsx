import s from "./Contact.module.css"
import { MdAccountCircle } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"

function Contact({contact, onDelete}) {
  const {id, name, number} = contact
  return (
      <li className={s.item}>
        <h3> <MdAccountCircle/> {name}</h3>
        <p> <FaPhone/> {number}</p>
        <button onClick={() => onDelete(id)} className={s.btn}>Delete</button>
      </li>
  )
}

export default Contact