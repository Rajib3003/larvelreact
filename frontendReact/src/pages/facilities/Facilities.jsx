import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Facilities() {
  const { t } = useTranslation(); 
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">{t('school-facilities')}</h1>
            <p>{t('our-school-provides-all-modern-facilities-to-ensure-the-overall-development-of-students-and-a-safe-environment')}</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="facility-item">
                <div className="facility-icon bg-primary">
                  <span className="bg-primary"></span>
                  <i className="fa fa-tv fa-3x text-primary"></i>
                  {/* <i className="fa fa-bus-alt fa-3x text-primary"></i> */}
                  <span className="bg-primary"></span>
                </div>
                <div className="facility-text bg-primary">
                  <h3 className="text-primary mb-3">Projector</h3>
                  <p className="mb-0">আমাদের স্কুলে প্রজেক্টরের মাধ্যমে ক্লাস নেওয়া হয়, যা পড়াশোনাকে আরও আকর্ষণীয় এবং কার্যকর করে তুলেছে।</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="facility-item">
                <div className="facility-icon bg-success">
                  <span className="bg-success"></span>
                  <i className="fa fa-futbol fa-3x text-success"></i>
                  <span className="bg-success"></span>
                </div>
                <div className="facility-text bg-success">
                  <h3 className="text-success mb-3">Playground</h3>
                  <p className="mb-0">আমাদের স্কুলে ছোট বাচ্চাদের জন্য একটি সুন্দর খেলার জায়গা আছে, যেখানে তারা মজার খেলাধুলা করে সময় কাটায়।</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="facility-item">
                <div className="facility-icon bg-warning">
                  <span className="bg-warning"></span>
                  <i className="fa fa-video fa-3x text-warning"></i>
                  <span className="bg-warning"></span>
                </div>
                <div className="facility-text bg-warning">
                  <h3 className="text-warning mb-3">CCTV</h3>
                  <p className="mb-0">আমাদের স্কুলে সিসিটিভি ক্যামেরা রয়েছে, যা সার্বক্ষণিক নজরদারি নিশ্চিত করে।</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="facility-item">
                <div className="facility-icon bg-info">
                  <span className="bg-info"></span>
                  <i className="fa fa-fingerprint fa-3x text-info"></i>
                  <span className="bg-info"></span>
                </div>
                <div className="facility-text bg-info">
                  <h3 className="text-info mb-3">Finger Attendance</h3>
                  <p className="mb-0">ফিঙ্গারপ্রিন্ট স্ক্যানের মাধ্যমে ছাত্র-শিক্ষক উভয়ের উপস্থিতি নিরাপদ এবং নির্ভুলভাবে রেকর্ড করা হয়।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  