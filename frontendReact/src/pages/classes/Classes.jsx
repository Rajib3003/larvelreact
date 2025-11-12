

import { useTranslation } from "react-i18next";
import SingleClass from "./SingleClass";

import classPrePlay from "/assets/frontend_assets/img/class/preplay.png";
import classPlay from "/assets/frontend_assets/img/class/play.png";
import classNursery from "/assets/frontend_assets/img/class/nursery.png";
import classKg from "/assets/frontend_assets/img/class/kg.png";
import classOne from "/assets/frontend_assets/img/class/one.png";
import classTwo from "/assets/frontend_assets/img/class/two.png";
import classThree from "/assets/frontend_assets/img/class/three.png";
import classAll from "/assets/frontend_assets/img/class/all.png";



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
              image={classPrePlay} 
              classTitle={t("class-pre-play")} 
              shift1={t("preplayshift1")}
              shift2={t("preplayshift2")}
              shift3={t("preplayshift3")}              
              capacity={t("10-kids")} 
            />         
            <SingleClass 
              image={classPlay} 
              classTitle={t("class-play")} 
              shift1={t("playshift1")}
              shift2={t("playshift2")}
              shift3={t("playshift3")} 
              capacity={t("25-kids")} 
            />         
            <SingleClass 
              image={classNursery} 
              classTitle={t("class-nursery")} 
              shift1={t("nursery1")}
              shift2={t("nursery2")}
              shift3={t("nursery3")} 
              capacity={t("25-kids")} 
            />         
            <SingleClass 
            image={classKg} 
            classTitle={t("class-kg")} 
            shift1={t("kg1")}
            shift2={t("kg2")}            
            capacity={t("25-kids")} 
            />                      
            <SingleClass 
            image={classOne} 
            classTitle={t("class-one")} 
            shift1={t("one1")}
            shift2={t("one2")}  
            capacity={t("25-kids")} 
            />         
            <SingleClass 
            image={classTwo} 
            classTitle={t("class-two")} 
            shift1={t("two1")}
            shift2={t("two2")}   
            capacity={t("25-kids")} 
            />         
            <SingleClass 
            image={classThree} 
            classTitle={t("class-three")} 
            shift1={t("three1")}
            shift2={t("three2")}  
            capacity={t("25-kids")} 
            />         
            <SingleClass 
            image={classAll} 
            classTitle={t("class-four")} 
            shift1={t("four1")}             
            capacity={t("25-kids")} 
            />         
            <SingleClass 
            image={classAll} 
            classTitle={t("class-five")} 
            shift1={t("five1")}            
            capacity={t("25-kids")} 
            />         
            <SingleClass 
            image={classAll} 
            classTitle={t("class-six")} 
            shift2={t("six2")}            
            capacity={t("25-kids")} 
            />         
            <SingleClass 
            image={classAll} 
            classTitle={t("class-seven")} 
            shift2={t("seven2")}            
            capacity={t("25-kids")} 
            />         
            <SingleClass 
            image={classAll} 
            classTitle={t("class-eight")} 
            shift2={t("eight2")}            
            capacity={t("25-kids")} 
            />         
            <SingleClass 
            image={classAll} 
            classTitle={t("class-nine")} 
            shift2={t("nine2")}            
            capacity={t("25-kids")} 
            />         
            <SingleClass 
            image={classAll} 
            classTitle={t("class-ten")} 
            shift1={t("ten1")}            
            capacity={t("25-kids")} 
            />         
                     
                     
          </div>
        </div>
      </div>
    );
  }
  