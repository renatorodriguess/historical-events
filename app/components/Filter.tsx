import React, { useEffect, useState } from 'react'

interface Props {
    setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

function Filter({setSelectedCategory}: Props) {

    const categories = [
        "Guerra",
        "Arte",
        "Ciência",
        "Política",
        "Religião",
        "Esporte",
        "Outro",
        
    ];

    const [theme, setTheme] = useState("dark-theme")

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    const changeTheme = () => {
        if(theme === "light-theme") {
            setTheme("dark-theme");
        }else {
            setTheme("light-theme")
        }
    };

  return (
    <div className='filter'>
        <div className="filter_select">
            <select onChange={(e) =>setSelectedCategory(e.target.value)}>
                <option value="">Todos</option>
                {
                    categories.map((category) =>(
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))
                }
            </select>
        </div>
        <div className="theme-toggler">
            <input type="checkbox" 
            id='theme-toggler_checkbox'
            className='theme-toggler_checkbox'
            />
            <label htmlFor="theme-toggler_checkbox" className='theme-toggler_label'
                onClick={changeTheme}
            >
                Toggle
            </label>
        </div>
    </div>
  )
}

export default Filter