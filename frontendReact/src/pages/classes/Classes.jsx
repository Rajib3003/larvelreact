

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
            
            <SingleClass 
              image={teamImageOne} 
              classTitle={t("class-pre-play")} 
              shift1={t("preplayshift1")}
              shift2={t("preplayshift2")}
              shift3={t("preplayshift3")}              
              capacity={t("10-kids")} 
            />         
            <SingleClass 
              image={teamImageOne} 
              classTitle={t("class-play")} 
              shift1={t("playshift1")}
              shift2={t("playshift2")}
              shift3={t("playshift3")} 
              capacity={t("30-kids")} 
            />         
            <SingleClass 
              image={teamImageOne} 
              classTitle={t("class-nursery")} 
              shift1={t("nursery1")}
              shift2={t("nursery2")}
              shift3={t("nursery3")} 
              capacity={t("30-kids")} 
            />         
            <SingleClass 
            image={teamImageOne} 
            classTitle={t("class-kg")} 
            shift1={t("kg1")}
            shift2={t("kg2")}            
            capacity={t("30-kids")} 
            />                      
            <SingleClass 
            image={teamImageOne} 
            classTitle={t("class-one")} 
            shift1={t("kg1")}
            shift2={t("kg2")}  
            capacity={t("30-kids")} 
            />         
            <SingleClass 
            image={teamImageOne} 
            classTitle={t("class-two")} 
            shift1={t("kg1")}
            shift2={t("kg2")}   
            capacity={t("30-kids")} 
            />         
            <SingleClass 
            image={teamImageOne} 
            classTitle={t("class-three")} 
            shift1={t("kg1")}
            shift2={t("kg2")}  
            capacity={t("30-kids")} 
            />         
            <SingleClass 
            image={teamImageOne} 
            classTitle={t("class-four")} 
            shift1={t("kg1")}             
            capacity={t("30-kids")} 
            />         
            <SingleClass 
            image={teamImageOne} 
            classTitle={t("class-five")} 
            shift1={t("kg1")}            
            capacity={t("30-kids")} 
            />         
                     
                     
          </div>
        </div>
      </div>
    );
  }
  