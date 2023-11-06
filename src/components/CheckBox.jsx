import { useState, useEffect } from 'react'

function CheckBox({ imgKey, selected, handleChange }) {
    const [stateSelected, setStateSelected] = useState(selected)
    useEffect(() => { setStateSelected(selected) }, [selected]);

    return (
        <label htmlFor={imgKey} className={`absolute w-full h-full rounded-md duration-500 cursor-pointer ${stateSelected ? "bg-gray-200 opacity-50" : "hover:bg-gray-800 opacity-50"}`}>
            <input id={imgKey} type="checkbox" checked={stateSelected} onChange={() => handleChange(imgKey)} className={`${!stateSelected && "hidden"} w-5 h-5 hover:inline cursor-pointer relative top-5 left-5`} />
        </label>
    )
}

export default CheckBox