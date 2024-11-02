import { useEffect, useState } from 'react';

export default function Uparrow() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">

      {showButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            zIndex: 1000,
          }}
        >
          <i className="bi bi-arrow-up"></i> 
          
        </button>
      )}
    </div>
  );
}
