import PropTypes from 'prop-types';

// Define a PropType that can be either string or number
const number = PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired;

// New Student Class Information Component
export function NewStudentClassInformation(props) {
  const { classValue, admissionForm, admissionFee, salary, totalFee } = props;
  return (
    <tr>
      <td className="text-center fw-bold">{classValue}</td>
      <td className="text-center">{admissionForm}</td>
      <td className="text-center">{admissionFee}</td>
      <td className="text-center fw-bold">{totalFee}</td>
      <td className="text-center">{salary}</td>
    </tr>
  );
}

NewStudentClassInformation.propTypes = {
  classValue: number,
  admissionForm: number,
  salary: number,
  admissionFee: number,
  totalFee: number,
};

// Old Student Class Information Component
export function OldStudentClassInformation(props) {
  const { classValue, admissionFee, totalFee,salary } = props;
  return (
    <tr>
      <td className="text-center fw-bold">{classValue}</td>
      <td className="text-center">{admissionFee}</td>
      <td className="text-center fw-bold">{totalFee}</td>
      <td className="text-center">{salary}</td>
    </tr>
  );
}

OldStudentClassInformation.propTypes = {
  classValue: number,
  admissionFee: number,
  totalFee: number,
  salary: number,
};

export function EducationalEquipmentPrices(props) {
  const {classValue,book,ledger,dairy,syllabus,tie,payBook,bach,idCard,sports,totalFee} = props;
  return (
    <tr>
      <td className="text-center fw-bold">{classValue}</td>
      <td className="text-center">{book}</td>
      <td className="text-center">{ledger}</td>
      <td className="text-center">{dairy}</td>
      <td className="text-center">{syllabus}</td>
      <td className="text-center">{tie}</td>
      <td className="text-center">{payBook}</td>
      <td className="text-center">{bach}</td>
      <td className="text-center">{idCard}</td>
      <td className="text-center">{sports}</td>
      <td className="text-center fw-bold">{totalFee}</td>
    </tr>
  );
}
EducationalEquipmentPrices.propTypes = {
  classValue: number,
  book: number,
  ledger: number,
  dairy: number,
  syllabus: number,
  tie: number,
  payBook: number,
  bach: number,
  idCard: number,
  sports: number,
  totalFee: number,
};