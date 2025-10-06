

import PropTypes from 'prop-types';

export default function SingleClassInformation(props) {
  const { classValue, admissionFee, totalFee } = props;
  return (
    <tr>
        <td className='text-center'>{classValue}</td>
        <td className='text-center'>{admissionFee}</td>
        <td className='text-center'>{totalFee}</td>        
    </tr>
  )
}

SingleClassInformation.propTypes = {
  classValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  admissionFee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  totalFee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
