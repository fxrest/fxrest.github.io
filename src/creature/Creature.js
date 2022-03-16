import React, { useEffect, useState } from 'react'
import './creature.scss';

const url = 'https://api.tibiadata.com/v3/creature/'

export default function Creature() {
    const [creature, setCreature] = useState(null);
    const [creatureName, setCreatureName] = useState('')

    const handleChange = element => {
        setCreatureName(element.target.value);
    }

    const handleSubmit = (element) => {
        element.preventDefault();
        const get = async () => {
            const response = await fetch(`${url}${creatureName.replace(/ /g, '').toLowerCase()}`);
            const d = await response.json();
            setCreature(d.creature)
        }
        get();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={creatureName}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>

            {creature != null && <div className='creatureCard'>
                <div className='creatureTitle'>
                    <h4 className='creatureName'>{creature.name}</h4>
                    <img src={creature.image_url} alt="Picture of a creature." />
                </div>
                <div>
                    <p>Hitpoints: {creature.hitpoints}</p>
                </div>
            </div>}
        </>
    )
}