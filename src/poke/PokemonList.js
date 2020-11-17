import React from 'react'

function PokemanList({pokemon}) {
    return (
        <div>
            {pokemon.map(p =>(
                <div key={p}>{p}</div>
            ) )}
        </div>
    )
}

export default PokemanList