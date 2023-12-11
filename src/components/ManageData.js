import {useState} from "react"

const ManageData = () => {
    let someData = 38;

    console.log(someData);

    const [number] = useState(10);

    console.log(number);
  return (
    <div>
    <p>Valor atual: {someData}</p>
    <button onClick ={() => (someData)}>Mude o Valor</button>
    <p>Valor mais Atual: {number}</p>
    <button onClick={()=> number}>Novo Valor</button>
    </div>
  )
}

export default ManageData