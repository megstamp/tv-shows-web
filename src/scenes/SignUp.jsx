import { useState } from "react"

export default function SignUp({ setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        fetch("https://tv-shows-api-ms-web.app/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify( {email, password })
        })

        .then(resp => resp.json())
        .then(data => {
            if(data.message) {
                alert(data.message)
                return
            }
            setUser(data)
        })
        .catch(alert)
    }

    return(
        <section className="form">
        <h2>SignUp</h2>
        <form onSumbit= {handleSignUp}>
            <label htmlFor="email">Email
                <input
                    type="email"
                    value={email}
                    onChange={ (e) => { setEmail(e.target.value)}} />
            </label>

        <br />

        <label html="password">Password
            <input
                type="password"
                value={password}
                onChange= { (e) => {setPassword(e.target.value)}} />
        </label>

        <br />

        <input type="submit" value="add Sign Up" />
        </form>
        </section>
    )
}