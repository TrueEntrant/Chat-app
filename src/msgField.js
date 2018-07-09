import React from 'react';

export default function Field (props) {
    return (
        <div className='field' style={{background: 'linear-gradient(45deg, #dcb2de 0%,#b367b7 100%)'}}>
            <h2>{props.user}</h2>
            <div className='msgs'>
                {
                props.msg.map((item, iter) => 
                    <p className='sended' key={iter}>{item}</p>
                )
                }
            </div>
        </div>
    )
}