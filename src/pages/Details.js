import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { addItem } from "./store"

export default function Details(props) {
  const {bes} = props
  const {id} = useParams()
  const dispatch = useDispatch()

  return(
    <>
      <h2>Detail page</h2>
      <img src={bes[id].image} alt="" style={{width: 280}}/>
      <h4>{bes[id].title}</h4>
      <p>{bes[id].desc}</p>
      <p>{bes[id].price} 원</p>
      <button onClick={() => {
        dispatch(addItem({id: bes[id].id, title: bes[id].title, count:1 }))
      }}>장바구니</button>
    </>
  )
}