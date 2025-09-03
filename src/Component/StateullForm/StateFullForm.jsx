import { useState } from "react";

const StateFullForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const[error, setError]=useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or more')
        }
        else{
            setError('')
        }
        console.log(name, email, password);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswrodChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleNameChange}
                type="text" name="Name" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" />
                <br />
                <input
                    onChange={handlePasswrodChange}
                    type="password" name="password" required />
                <br />
                <hr />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;