import React, { useState, useEffect } from 'react'
import './Creatures.scss';

export default function Creatures() {
    const [creatures, setCreatures] = useState([])
    // const [showCreatureCard, setShowCreatureCard] = useState(false)

    useEffect(() => {
        const get = async () => {
            const response = await fetch("https://api.tibiadata.com/v3/creatures");
            const d = await response.json();
            if (response.ok) {
                setCreatures(d.creatures.creature_list)
            }
        }
        get()
    }, [])

    // const handleShowCreatureCard = () => {
    //     setShowCreatureCard(!showCreatureCard);
    // }

    return (
        <div className='creatureListHolder'>
            {creatures.map((creature, index) => (
                <div className='creatureListElement' key={index}>
                    {creature.name}
                    <img src={creature.image_url} alt="" />
                </div>
            ))}
        </div>
    )
}
