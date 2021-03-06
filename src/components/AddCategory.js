import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories, categories }) =>{

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories([inputValue, ...categories] );
            setInputValue('');
        }
        
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input
                className="gif__input"
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Search a gif..."
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
