import React from 'react';

const Apply = ({apply}) => {
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >
                {apply.name}
            </button>
        </li>
    );

}

export default Apply;