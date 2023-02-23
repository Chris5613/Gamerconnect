import { useState } from 'react'

function BootstrapInput(props) {
    const {id, placeholder, labelText, value, onChange, type } = props;

    return (
      <div className="mb-3">
        <label htmlFor={id} className="form-label">{labelText}
        </label>
        <input
          value={value}
          onChange={onChange}
          required type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
        />
      </div>
    );

}


function UserLoginForm(props) {

    // const [usernames, setUsernames] = useState([])
    const [username, setUsername] = useState('');
    // const [passwords, setPasswords] = useState([])
    const [password, setPassword] = useState('');


    // useEffect(() => {
    //     async function getUsernames() {
    //     const userUrl = 'http://localhost:8001/users/all'
    //     // make endpoint + double check that it is correct
    //     const response = await fetch(userUrl);
    //     if(response.ok) {
    //         const data = await response.json();
    //         console.log("HEREE---------AAA", data)
    //         let usernameList = []
    //         let userPasswordList = []
    //         for(let i = 0; i < data.length; i++ ) {
    //             usernameList.push(i.username)
    //             userPasswordList.push(i.password)
    //         }
    //         console.log("USERNAMES----!!!!!!:", usernameList)
    //         setUsernames(usernameList);
    //     }
    //     }
    //     getUsernames()
    // }, [setUsernames])

    // function validateForm() {
    //   if (usernames.includes(username)) {
    //         return true;
    //   }
    // }

    // function userLogin() {
    //     if (validateForm.response === true) {

    //     }
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const userLogin = {
    //         "username" : username,
    //         "password" : password,
    //     }
    //     console.log(userLogin)

    //     if(usernames.includes(userLogin.username)){
    //         return true
    //     }
    // }
    // fetch(userUrl)
    //     .then(response => response.json())
    //     .then(() => {

    //     })

    return (
      <form>
        <BootstrapInput
          id="username"
          placeholder="Username"
          labelText="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="username"
        />
        <BootstrapInput
          id="password"
          placeholder="Password"
          labelText="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <button disabled ={username.length === 0 && password.length === 0} type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
}

export default UserLoginForm
