import React from 'react';

export default function Form (props) {
    return (
        <form className='form' onSubmit={props.onClick}>
            <input 
                type='text' 
                tabIndex='10px' 
                placeholder='Type here...'
                value={props.value}
                onChange={props.onChange}
                onSubmit={props.onClick}
            />
            <input onClick={props.onClick} type="submit" value="Send" />
        </form>
    )
}
