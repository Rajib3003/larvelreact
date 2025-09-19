

import { useTranslation } from "react-i18next";
import SingleClass from "./SingleClass";

import teamImageOne from "/assets/frontend_assets/img/play-1.png";


export default function Classes() {
  const { t } = useTranslation();
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">{t("our-classes")}</h1>
            <p>{t("class-description")}</p>
          </div>
        




          <div className="row g-4">
            
            <SingleClass image={teamImageOne} classTitle={t("class-playgroup")} age={t("5-6-years")} time={t("9-10-am")} capacity={t("30-kids")} />         
            <SingleClass image={teamImageOne} classTitle={t("class-nursery")} age={t("5-6-years")} time={t("9-10-am")} capacity={t("30-kids")} />         
            <SingleClass image={teamImageOne} classTitle={t("class-lkg")} age={t("5-6-years")} time={t("9-10-am")} capacity={t("30-kids")} />         
            <SingleClass image={teamImageOne} classTitle={t("class-ukg")} age={t("5-6-years")} time={t("9-10-am")} capacity={t("30-kids")} />         
            <SingleClass image={teamImageOne} classTitle={t("class-one")} age={t("5-6-years")} time={t("9-10-am")} capacity={t("30-kids")} />         
            <SingleClass image={teamImageOne} classTitle={t("class-two")} age={t("5-6-years")} time={t("9-10-am")} capacity={t("30-kids")} />         
            <SingleClass image={teamImageOne} classTitle={t("class-three")} age={t("5-6-years")} time={t("9-10-am")} capacity={t("30-kids")} />         
            <SingleClass image={teamImageOne} classTitle={t("class-four")} age={t("5-6-years")} time={t("9-10-am")} capacity={t("30-kids")} />         
            <SingleClass image={teamImageOne} classTitle={t("class-five")} age={t("5-6-years")} time={t("9-10-am")} capacity={t("30-kids")} />         
                     
                     
          </div>
        </div>
      </div>
    );
  }
  