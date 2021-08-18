import React, {useState} from 'react';

const EventPracticeFunction = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);

    const onClick = () => {
        if(username!=="" && message!=="") {
            alert(username + ": " + message);
            setUsername('');
            setMessage('');            
        }
        else(
            alert("value is empty.")
        )
    };

    const onKeyPress = (e) => {
        if(e.key==="Enter") {
            onClick();
        }
    };

    return (
        <div>
            <h1>Event Practice</h1>
            <input
              type="text"
              name="username"
              placeholder="사용자명"
              value={username}
              onChange={onChangeUsername}
            />
            <input
              type="text"
              name="message"
              placeholder="아무거나 입력해 보세요"
              value={message}
              onChange={onChangeMessage}
              onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>
                확인
            </button>
        </div>
    )
}

export default EventPracticeFunction