import {useState} from 'react'

export const ListRender = () => {

    const [list]= useState(["Leandresson", "Jose", "Ingrid", "Yasmim", "Miguel","Maria"]);

    const [users] = useState([
        {id: 1, nome:"Leandresson", idade: 38},
        {id: 2, nome:"Yasmim", idade: 16},
        {id: 3, nome:"Ingrid", idade: 14}

    ])

  return (
    <div>
        <ul>
            {list.map((item, i) =>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((users)=> (
                <li key={users.id}>
                    {users.nome} - {users.idade}
                </li>
            )
            
            )}
        </ul>
    </div>
  )
}
export default ListRender;