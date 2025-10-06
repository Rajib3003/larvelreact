

export default function Error() {
  return (
    <div className="container-xxl vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="text-center p-5 bg-white rounded shadow">
        <h1 className="display-1 text-danger">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="mb-4">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।  
          হয়তো URL ভুল হয়েছে অথবা পেজটি মুছে ফেলা হয়েছে।
        </p>
        <a href="/" className="btn btn-primary">
          হোমে ফিরে যান
        </a>
      </div>
    </div>
  );
}

