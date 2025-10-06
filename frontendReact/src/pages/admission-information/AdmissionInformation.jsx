import { useTranslation } from "react-i18next";
import SingleClassInformation from "./SingleClassInformation";


export default function AdmissionInformation() {
    const { t } = useTranslation();
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">         
          <div className="row g-0">
            <div className="col-lg-12 p-5 d-flex justify-content-center">
              <h2 className="btn btn-primary rounded-pill py-sm-3 px-sm-5 animated fs-2 fw-bold">
                {t('admission-information')}
              </h2>
            </div>
          </div>

          <div className="row g-0">            
            <div className="col-lg-6 p-5 ">
              <h2 className="mb-4 d-flex justify-content-center">{t('new-student-information')}</h2>
              <table className="table table-bordered">
                <thead>
                  
                  <tr>
                    <th className="text-center">{t('class')}</th>
                    <th className="text-center">{t('admission-fee')}</th>                    
                    <th className="text-center">{t('total-fee')}</th>
                  </tr>
                </thead>
                <tbody>
                    
                  <SingleClassInformation classValue={t("class-play")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-nursery")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-kg")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-one")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-two")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-three")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-four")} admissionFee={2000} totalFee={10000} />                   
                
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 p-5 ">
              <h2 className="mb-4 d-flex justify-content-center">{t('old-student-information')}</h2>
              <table className="table table-bordered">
                <thead>
                
                  <tr>
                    <th className="text-center">{t('class')}</th>
                    <th className="text-center">{t('admission-fee')}</th>                    
                    <th className="text-center">{t('total-fee')}</th>
                  </tr>
                </thead>
                <tbody>
                  <SingleClassInformation classValue={t("class-play")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-nursery")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-kg")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-one")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-two")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-three")} admissionFee={2000} totalFee={10000} />
                  <SingleClassInformation classValue={t("class-four")} admissionFee={2000} totalFee={10000} />                   
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}