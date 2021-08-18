import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 계세요!');

    

    return (
        <div>
            <button onClick={onClickEnter} onMouseEnter={() => setColor('red')} onMouseLeave={() => setColor('blue')}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
        </div>
    )
}

export default Say