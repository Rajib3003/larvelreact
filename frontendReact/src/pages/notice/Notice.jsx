import styles from './Notice.module.css';

export default function Notice() {
    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
      };
    
      return (
        <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Notice Board</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>

        <div className={styles.noticeMarquee}>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>

        <div className={styles.searchContainer}>
          <input type="text" className="form-control" placeholder="Search By Notice Title" />
          <input type="date" className="form-control" />
          <input type="date" className="form-control" />
          <button className="btn btn-primary">Search</button>
          {/* <button className={styles.refreshButton}>Refresh</button> */}
        </div>

        <div className={styles.noticeBoardContainer}>
          <div className={styles.noticeList}>
            <div className={styles.noticeItem}>
              <div>
                <h5>2024-2025 শিক্ষা বর্ষ আভ্যন্তরীণ ভর্তি বিজ্ঞপ্তি</h5>
                <p>Published Date: 26 Nov, 2024</p>
              </div>
              
                <button 
                className="btn btn-info" 
                onClick={() => window.open(`${import.meta.env.BASE_URL}/homework`, '_blank')}
                >
                + Read More
                </button>





            </div>

            <div className={styles.noticeItem}>
              <div>
                <h5>Masters in Sociology and Social Policy (MSSP) 3rd Batch 2024–2025</h5>
                <p>Published Date: 26 Nov, 2024</p>
              </div>
              <button className="btn btn-info">+ Read More</button>
            </div>

            <div className={styles.noticeItem}>
              <div>
                <h5>Call for Applications for the 2025-26 Fulbright Visiting Scholar Program</h5>
                <p>Published Date: 25 Nov, 2024</p>
              </div>
              <button className="btn btn-info">+ Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}