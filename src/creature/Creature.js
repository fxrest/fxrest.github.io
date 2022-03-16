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
            setCreature(d.creature);
        }
        get();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='creatureNameInput'
                    type="text"
                    value={creatureName}
                    onChange={handleChange}
                />
                <button className='creatureSearchButton' type="submit">Search</button>
            </form>

            {(creature != null && creature.image_url != '') && <div className='creatureCard'>
                <div className='creatureTitle'>
                    <h4 className='creatureName'>{creature.name}</h4>
                    <img src={creature.image_url} alt="Picture of a creature." />
                </div>
                <div className='creatureText'>
                    <p>Hitpoints: {creature.hitpoints} Experience: {creature.experience_points}</p>
                </div>
            </div>}
        </>
    )
}