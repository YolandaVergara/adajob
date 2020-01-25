import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const EditApply = ({ apply }) => {
  return (
    <Fragment>
      <td className="p-4 bg-white text-center"><Link>{apply.name}</Link></td>
      <td className="p-4 bg-white text-center"><Link>{apply.contact}</Link></td>
      <td className="p-4 bg-white text-center"><Link>{apply.date}</Link></td>

    </Fragment>
  );
}
export default EditApply;