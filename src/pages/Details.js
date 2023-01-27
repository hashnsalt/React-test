import { useParams } from "react-router-dom"

export default function Details(props) {
  const {bes} = props
  const {id} = useParams()

  return(
    <>
      <h2>Detail page</h2>
      <img src={bes[id].image} alt="" style={{width: 280}}/>
      <h4>{bes[id].title}</h4>
      <p>{bes[id].desc}</p>
      <p>{bes[id].price} 원</p>
    </>
  )
}