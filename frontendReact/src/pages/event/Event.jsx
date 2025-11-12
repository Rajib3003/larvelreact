// ...existing code...


export default function Event() {
  return (
    <div className="container py-2">
      <div className="row wow fadeInUp" data-wow-delay="0.1s g-4">        
        <div className="col-lg-12 text-center">
          <h1 className="mb-3">আমাদের আয়োজিত অনুষ্ঠান সমূহ</h1>
          <p className="text-muted py-5">
            বিদ্যালয়ের বার্ষিক ও বিশেষ অনুষ্ঠানসমূহের সংক্ষিপ্ত বিবরণ নিচে প্রদর্শিত হলো। প্রতিটি অনুষ্ঠানে অংশ নিতে শিক্ষার্থী ও অভিভাবকদের নির্দেশনা, অংশগ্রহণের নিয়ম ও সময়সূচি ফলাফল পৃষ্ঠায় বা বিজ্ঞপ্তির মাধ্যমে জানানো হবে।
          </p>
        </div>

      
      </div>
      <div className="row g-4 pt-3 text-center">        
        <div className="col-lg-6 " >
          <div className="mb-4">
            <h4 className="mb-2">জাতীয় অনুষ্ঠান সমূহ</h4>
            <ul className="list-group shadow-sm">
              <li className="list-group-item">শহীদ দিবস</li>
              <li className="list-group-item">স্বাধীনতা দিবস</li>
              <li className="list-group-item">বাংলা নববর্ষ</li>
              <li className="list-group-item">বিজয় দিবস</li>
            </ul>
          </div>   
        </div>
        <div className="col-lg-6"> 
          <div className="mb-4">
            <h4 className="mb-2">প্রাতিষ্ঠানিক অনুষ্ঠান সমূহ</h4>
            <ul className="list-group shadow-sm">
              <li className="list-group-item">বই উৎসব</li>
              <li className="list-group-item">বার্ষিক ক্রীড়া প্রতিযোগিতা</li>
              <li className="list-group-item">শিক্ষা সফর</li>
              <li className="list-group-item">বৃত্তি পরীক্ষা</li>
              <li className="list-group-item">ক্লাস পার্টি</li>
            </ul>
          </div>
          {/* <div>
            <h5 className="mb-2">আলোচ্য অনুষ্ঠানগুলোর কার্যক্রম</h5>
            <p className="mb-0">
              প্রতিটি অনুষ্ঠানে অংশ নিতে শিক্ষার্থী ও অভিভাবকদের নির্দেশনা, অংশগ্রহণের নিয়ম ও সময়সূচি ফলাফল পৃষ্ঠায় বা বিজ্ঞপ্তির মাধ্যমে জানানো হবে।
            </p>
          </div> */}
        </div>

       
        
      </div>
    </div>
  );
}
// ...existing code...