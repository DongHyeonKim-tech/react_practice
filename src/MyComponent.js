import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {
    return (
    <div>
        이름 : {name} <br/>
        children : {children} <br/>
        숫자 : {favoriteNumber}
    </div>
    );
};

MyComponent.defaultProps = {
    name : "리액트",
    favoriteNumber : 7
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};


export default MyComponent;