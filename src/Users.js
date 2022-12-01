import { ChevronRightIcon } from '@heroicons/react/solid'

const Users = (props) => {
    const users = props.users;
    //const handleClick = props.handleClick;
    
    const handleClick = () => {
        //this.setState({name: 'Fortunato'});
        console.log('testando');
    }

  return (
    <ul className="shadow border rounded-xl ">
        <li className="px-5 py-6 border-b-2 border-gray-400 bg-gray-100 rounded-t-xl">
            <h1 className="text-lg font-bold text-gray-700">Usuários</h1>
        </li>
        {users.map(user => (
            <li onClick={handleClick} role="button" className="list-none p-5 border-b border-gray-300 bg-white flex hover:bg-gray-100" key={user.id}>
                <span className="grow">{user.name}</span>
                <ChevronRightIcon className="flex-none h-5 w-5 text-blue-500"/>
            </li>
        ))}
    </ul>
  )
}

export default Users