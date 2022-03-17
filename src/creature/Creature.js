import React, { useState, useEffect } from 'react'
import './Creature.scss';

const url = 'https://api.tibiadata.com/v3/creature/'

export default function Creature({ selected }) {
    const [creature, setCreature] = useState(null);
    const [creatureName, setCreatureName] = useState(selected || '');
    const [isFetching, setIsFetching] = useState(false);

    const handleChange = event => {
        setCreatureName(event.target.value);
    }

    const get = async () => {
        const response = await fetch(`${url}${creatureName.replace(/ /g, '').toLowerCase()}`);
        const d = await response.json();
        if (response.ok) {
            setCreature(d.creature);
            setIsFetching(false)
        }
    }

    useEffect(get, [creatureName]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsFetching(true)
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

            {(creature !== null && creature.image_url !== '') ? <div className='creatureCard'>
                <div className='creatureTitle'>
                    <h4 className='creatureName'>{creature.name}</h4>
                    <img src={creature.image_url} alt="" />
                </div>
                <div className='creatureText'>
                    <p>❤️ <strong>Hitpoints:</strong> {creature.hitpoints}</p>
                    <p>⚔️ <strong>Experience:</strong> {creature.experience_points}</p>
                    <p>{creature.description}</p>
                    <p>🧝🏻‍♂️ <strong>Behaviour:</strong> {creature.behaviour}</p>
                    <p>✨ <strong>Loot:</strong> {creature.loot_list !== null ? creature.loot_list.join(', ') : 'none.'}</p>
                </div>
            </div> : isFetching && <p>loading...</p>}
        </>
    )
}