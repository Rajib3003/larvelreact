

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

 const  SingleClass = ({image, classTitle,shift1,shift2,shift3, capacity }) => {
     const { t } = useTranslation();
  return (
    <div  className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.1 * 0}s`}>
        <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                <img className="img-fluid rounded-circle" src={image} alt="" />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
                <a className="d-block text-center h3 mt-3 mb-4" href=""> {classTitle}</a>  
                
                <div className="mt-4">
                    <div className="border-top border-3 border-primary pt-3 pb-2 d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="text-primary mb-1 d-inline">{t("shift")}</h6>                    
                        </div>
                        <div>
                            <h6 className="text-primary mb-1 d-inline">{t("time")}</h6>                    
                        </div>
                        <div>
                            <h6 className="text-primary mb-1 d-inline">{t("number-of-seats")}</h6>                    
                        </div>
                    </div>
                </div>
                {shift1 && (
                <div className="row g-1">
                    <div className="col-12">
                        <div className=" pt-2 d-flex justify-content-between align-items-center">
                            <small>{t("morning-a")}</small>
                            <small>{shift1}</small>
                            <small>{capacity}</small>
                        </div> 
                    </div>
                </div>
                )}
                {shift2 && (
                <div className="row g-1">
                    <div className="col-12">
                        <div className=" pt-2 d-flex justify-content-between align-items-center">
                            <small>{t("morning-b")}</small>
                            <small>{shift2}</small>
                            <small>{capacity}</small>
                        </div> 
                    </div>
                </div>
                )}
                {shift3 && (
                    <div className="row g-1">
                        <div className="col-12">
                        <div className="pt-2 d-flex justify-content-between align-items-center">
                            <small>{t("day")}</small>
                            <small>{shift3}</small>
                            <small>{capacity}</small>
                        </div>
                        </div>
                    </div>
                )}

                
            </div>
        </div>
    </div> 
  )
}

SingleClass.propTypes = {
    image: PropTypes.string.isRequired,
    classTitle: PropTypes.string.isRequired,
    shift1: PropTypes.string,
    shift2: PropTypes.string,
    shift3: PropTypes.string,   
    capacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SingleClass;
