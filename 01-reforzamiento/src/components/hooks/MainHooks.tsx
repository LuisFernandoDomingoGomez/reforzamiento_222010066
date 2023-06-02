import React from 'react'
import Contador from './Contador';
import ContadorConCustomHook from './ContadorConCustomHook';

const MainHooks = () => {
    return (
        <div>
            <h1>Welcome to Hooks</h1>
            <hr />
            <Contador />
            <br></br>
            <ContadorConCustomHook />
            <br />
        </div>
    )
}

export default MainHooks