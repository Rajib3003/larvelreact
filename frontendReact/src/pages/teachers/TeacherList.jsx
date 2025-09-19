
import { useTranslation } from "react-i18next";
import SingleTeacher from './SingleTeacher';
import aloRaniSaha from '/assets/frontend_assets/img/teachers/alo-rani-saha.png';
import kabiMowshumiMow from '/assets/frontend_assets/img/teachers/kabi-mowshumi-mow.png';
import Mansura from '/assets/frontend_assets/img/teachers/mansura.png';
import MituRaniHalder from '/assets/frontend_assets/img/teachers/mitu-rani-halder.png';
import nasimaKhan from '/assets/frontend_assets/img/teachers/nasima-khan.png';
import nironjonaGhoshProma from '/assets/frontend_assets/img/teachers/nironjona-ghosh-proma.png';
import rabeaAlamgir from '/assets/frontend_assets/img/teachers/rabea-alamgir.png';
import ritaKhatun from '/assets/frontend_assets/img/teachers/rita-khatun.png';

export default function TeacherList() {
  const { t } = useTranslation();  

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">{t('all-teachers-list')}</h1>
          <p>{t('all-teachers-description')}</p>
        </div>
          <div className="row g-4">
            <SingleTeacher teacherName={t('alo-rani-saha')} teacherDesignation={t('drawing-teacher')} teacherImage={aloRaniSaha} />
            <SingleTeacher teacherName={t('kabi-mowshumi-mow')} teacherDesignation={t('music-teacher')} teacherImage={kabiMowshumiMow} />
            <SingleTeacher teacherName={t('mansura')} teacherDesignation={t('assistant-teacher')} teacherImage={Mansura} />
            <SingleTeacher teacherName={t('mitu-rani-halder')} teacherDesignation={t('sinior-assistant-teacher')} teacherImage={MituRaniHalder} />
            <SingleTeacher teacherName={t('nironjona-ghosh-proma')} teacherDesignation={t('assistant-teacher')} teacherImage={nironjonaGhoshProma} />
            <SingleTeacher teacherName={t('nasima-khan')} teacherDesignation={t('assistant-teacher')} teacherImage={nasimaKhan} />
            <SingleTeacher teacherName={t('rabea-alamgir')} teacherDesignation={t('assistant-teacher')} teacherImage={rabeaAlamgir} />                   
            <SingleTeacher teacherName={t('rita-khatun')} teacherDesignation={t('assistant-teacher')} teacherImage={ritaKhatun} />                   
          </div>      
      </div>
    </div>
  );
}
