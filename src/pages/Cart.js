import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, subCount, deleteItem, changeName, changeYear } from './store';

export default function Cart() {

  const state = useSelector((state) => {return state});
  console.log(state.name);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{state.user.name}의 장바구니</h2>
      <button onClick={() => {
        dispatch(changeName())
      }}>이름 바꾸기</button>
      
      <h3>회원가입 기간: ({state.user.memberYear})년</h3>
      <button onClick={() => {
        dispatch(changeYear(1))
      }}>가입기간+</button>
      <button onClick={() => {
        dispatch(changeYear(-1))
      }}>가입기간-</button>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>상품명</th>
          <th>개수</th>
          <th>증감</th>
        </tr>
      </thead>
      <tbody>
        {
        state.cart.map((item, i) => {
        return (
          <tr>
            <td>{state.cart[i].id}</td>
            <td>{state.cart[i].title}</td>
            <td>{state.cart[i].count}</td>
            <td>
              <button onClick={() => {
                dispatch(addCount(state.cart[i].id))
              }}>+</button>
              <button onClick={() => {
                dispatch(subCount(state.cart[i].id))
              }}>-</button>
              <button onClick={() => {
                dispatch(deleteItem(state.cart[i].id))
              }}>삭제</button>
            </td>
          </tr>
        )
        })
        }
      </tbody>
    </Table>

    </div>
  )
}