import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({onClick, text, completed}) => {
return (<li onClick={onClick} style={{textDecoration: completed ? 'line-through':'none'}}>
{text}
</li>);
}

ToDo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired,
}

export default ToDo