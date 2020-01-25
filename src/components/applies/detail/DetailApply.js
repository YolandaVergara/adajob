import React, { Fragment } from 'react';

const DetailApply = ({ apply }) => {
  return (
    <Fragment>
      <li>
        <button
          type="button"
          className="btn btn-blank"
        >
          {apply.contact}
        </button>
      </li>
      <li>
        <button
          type="button"
          className="btn btn-blank"
        >
          {apply.date}
        </button>
      </li>
    </Fragment>
  );

}

export default DetailApply;