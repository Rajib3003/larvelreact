import { useTranslation } from "react-i18next";
import { EducationalEquipmentPrices, NewStudentClassInformation, OldStudentClassInformation } from "./SingleClassInformation";


export default function AdmissionInformation() {
    const { t } = useTranslation();
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">         
          {/* <div className="row g-0">
            <div className="col-lg-12 p-3 d-flex justify-content-center">
              <h2 className="  py-sm-3 px-sm-5 animated fs-2 fw-bold">
                {t('admission-information')}
              </h2>
            </div>
          </div> */}

   <div className="d-flex justify-content-center">
  <div className="bg-success  d-inline-block px-4 py-3 rounded">
    <h2 className="fs-2  m-0 fw-bold text-center text-white">
      {t("admission-information")}
    </h2>
  </div>
</div>




          <div className="row g-0">            
            <div className="col-lg-6 p-lg-5 p-0 pt-3">
              <h2 className="mb-4 d-flex justify-content-center">{t('new-student-information')}</h2>
              <table className="table table-bordered table-striped">
                <thead>
                  
                  <tr>
                    <th className="text-center">{t('class')}</th>
                    <th className="text-center">{t('admission-form')}</th>                    
                    <th className="text-center">{t('admission-fee')}</th>
                    <th className="text-center">{t('total-fee')}</th>
                    <th className="text-center">{t('salary')}</th>
                  </tr>
                </thead>
                <tbody>
                    
                  <NewStudentClassInformation classValue={t("class-pre-play")} admissionForm={200} admissionFee={6000} totalFee={6200} salary={1000} />
                  <NewStudentClassInformation classValue={t("class-play")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-nursery")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-kg")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-one")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-two")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-three")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-four")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-five")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-six")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-seven")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-eight")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-nine")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                  <NewStudentClassInformation classValue={t("class-ten")} admissionForm={200} admissionFee={5500} totalFee={5700} salary={800} />
                 
                 
                
                  
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 p-lg-5 p-0 pt-3 ">
              <h2 className="mb-4 d-flex justify-content-center">{t('old-student-information')}</h2>
              <table className="table table-bordered table-striped">
                <thead>
                
                  <tr>
                    <th className="text-center">{t('class')}</th>
                    <th className="text-center">{t('admission-fee')}</th>                    
                    <th className="text-center">{t('total-fee')}</th>
                    <th className="text-center">{t('salary')}</th>
                  </tr>
                </thead>
                <tbody>
                  <OldStudentClassInformation classValue={t("class-pre-play")} admissionFee={"-"} totalFee={"-"} salary={"-"} />
                  <OldStudentClassInformation classValue={t("class-play")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-nursery")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-kg")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-one")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-two")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-three")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-four")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-five")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-six")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-seven")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-eight")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-nine")} admissionFee={4500} totalFee={4500} salary={800} />
                  <OldStudentClassInformation classValue={t("class-ten")} admissionFee={4500} totalFee={4500} salary={800} />            
                </tbody>
              </table>
            </div>
            <div className="col-lg-12 p-lg-5 p-0 pt-3 table-responsive">
              <h2 className="mb-4 d-flex justify-content-center">{t('educational-equipment-prices')}</h2>             
              <table className="table table-bordered table-striped">
                <thead>                
                  <tr>                    
                    <th className="text-center">{t('class')}</th>
                    <th className="text-center">{t('book')}</th>                    
                    <th className="text-center">{t('ledger')}</th>
                    <th className="text-center">{t('diary')}</th>
                    <th className="text-center">{t('syllabus')}</th>
                    <th className="text-center">{t('tie')}</th>
                    <th className="text-center">{t('payBook')}</th>                    
                    <th className="text-center">{t('bach')}</th>  
                    <th className="text-center">{t('idCard')}</th>
                    <th className="text-center">{t('sports')}</th>
                    <th className="text-center">{t('total-fee')}</th>
                  </tr>
                </thead>
                <tbody>
                  <EducationalEquipmentPrices
                  classValue={t("class-pre-play")} 
                  book={170} 
                  ledger={160} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1170} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-play")} 
                  book={t("pending")} 
                  ledger={560} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1400} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-nursery")} 
                  book={t("pending")} 
                  ledger={560} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1400} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-kg")} 
                  book={t("pending")} 
                  ledger={600} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1440} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-one")} 
                  book={t("pending")} 
                  ledger={680} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1520} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-two")} 
                  book={t("pending")} 
                  ledger={720} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1560} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-three")} 
                  book={t("pending")} 
                  ledger={840} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1590} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-four")} 
                  book={t("pending")} 
                  ledger={840} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1590} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-five")} 
                  book={t("pending")} 
                  ledger={540} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1390} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-six")} 
                  book={t("pending")} 
                  ledger={900} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1750} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-seven")} 
                  book={t("pending")} 
                  ledger={900} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1750} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-eight")} 
                  book={t("pending")} 
                  ledger={900} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1750} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-nine")} 
                  book={t("pending")} 
                  ledger={900} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1750} 
                  />
                  <EducationalEquipmentPrices
                  classValue={t("class-ten")} 
                  book={t("pending")} 
                  ledger={900} 
                  diary={120} 
                  syllabus={50}
                  tie={120}
                  payBook={50}
                  bach={50}
                  idCard={200}
                  sports={250}
                  totalFee={1750} 
                  />                            
                </tbody>
              </table>
            </div>           
          </div>
        </div>
      </div>
    </div>
  );
}