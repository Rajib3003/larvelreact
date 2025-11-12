import PropTypes from 'prop-types';

 const SingleTeacher = ({teacherName, teacherDesignation, teacherImage, educationalQualification })=>{
  return (
    <div  className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.01 * 0}s`}>
        <div className="classes-item">
            <div className="bg-light rounded-circle w-50 mx-auto p-3">
                <img className="img-fluid rounded-circle" src={teacherImage} alt="Teacher" />
            </div>
            <div className="bg-light rounded p-4 pt-3 mt-n5">
                <a className="d-block text-center h3 mt-3 " href="#">{teacherName}</a>
                <p className="d-block text-center mb-1">{teacherDesignation}</p>              
                <p className="d-block text-center ">{educationalQualification}</p>              
            </div>
        </div>
    </div> 
  )
}

SingleTeacher.propTypes = {
  teacherName: PropTypes.string.isRequired,
  teacherDesignation: PropTypes.string.isRequired,
  teacherImage: PropTypes.string.isRequired,
  educationalQualification: PropTypes.string,
};

export default SingleTeacher;
