

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

 const  SingleClass = ({image, classTitle, age, time, capacity }) => {
     const { t } = useTranslation();
  return (
    <div  className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.1 * 0}s`}>
        <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
            <img className="img-fluid rounded-circle" src={image} alt="" />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
            <a className="d-block text-center h3 mt-3 mb-4" href=""> {classTitle}</a>                
            <div className="row g-1">
                <div className="col-4">
                <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">{t("age")}:</h6>
                    <small>{age}</small>
                </div>
                </div>
                <div className="col-4">
                <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">{t("time")}:</h6>
                    <small>{time}</small>
                </div>
                </div>
                <div className="col-4">
                <div className="border-top border-3 border-warning pt-2">
                    <h6 className="text-warning mb-1">{t("capacity")}:</h6>
                    <small>{capacity}</small>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div> 
  )
}

SingleClass.propTypes = {
  image: PropTypes.string.isRequired,
  classTitle: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  time: PropTypes.string.isRequired,
  capacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SingleClass;
