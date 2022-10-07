import { useEffect, useState } from 'react';
import aboutImage from '../assets/cowboy.png';

export const AboutPage = () => {
   
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>This is me</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 image-container">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="col-md-8">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="row">
                    <Test></Test>
                </div>
            </div>
        </div>
    );
}

const USERS_URL: string = 'https://jsonplaceholder.typicode.com/users';
const fetchUsers = (setFn: any) => {
    console.log('mounted');
    fetch(USERS_URL).then((res) => res.json()).then((data) => setFn(data))
    
    return () => console.log('dismount')
}

function Test() {
    const [state, setState] = useState<any>({});
    const [users, setUsers] = useState<Array<any>>([])

    useEffect(() => { fetchUsers(setUsers) }, []);

    return (
        <div className="row">
            {users.map((user: any) => (<p key={user.id}>{user.name}</p>))}
            <button onClick={() => setState((previous: any) => previous)}>Minus</button>
            <button onClick={() => setState((previous: any) => {
                previous.hei = 'hei'
                return {...previous} //spread
            })}>Pluss</button>
        </div>
    );
}   

// const [users, setUsers] = useState<any[]>([])