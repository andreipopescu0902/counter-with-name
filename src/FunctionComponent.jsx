import { useState } from "react";

export function FunctionComponent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    function subtractAge() {
        setAge((currentAge) => currentAge - 1);
    }

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <button onClick={subtractAge}>-</button>
            {age}
            <button onClick={() => setAge((currentAge) => currentAge + 1)}>
                +
            </button>
            <br />
            <br />
            <h1>My name is {name} and I am {age} years old.</h1>
        </div>
    );
}
