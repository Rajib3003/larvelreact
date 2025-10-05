

export default function AdmissionInformation() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            {/* Left Side: Class Information Table */}
            <div className="col-lg-6 p-5 ">
              <h2 className="mb-4">Admission Information</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th></th>
                    <th colSpan={2}>New Student</th>
                    <th colSpan={2}>Old Student</th>
                  </tr>
                  <tr>
                    <th>Class</th>
                    <th>Admission Fee</th>
                    <th>Total Fee</th>
                    <th>Admission Fee</th>
                    <th>Total Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Play</td>
                    <td>৳ 2,000</td>
                    <td>৳ 10,000</td>
                    <td>৳ 2,000</td>
                    <td>৳ 10,000</td>
                  </tr>
                  <tr>
                    <td>Nursery</td>
                    <td>৳ 2,500</td>
                    <td>৳ 12,000</td>
                    <td>৳ 2,500</td>
                    <td>৳ 12,000</td>
                  </tr>
                  <tr>
                    <td>KG</td>
                    <td>৳ 3,000</td>
                    <td>৳ 15,000</td>
                    <td>৳ 3,000</td>
                    <td>৳ 15,000</td>
                  </tr>
                  <tr>
                    <td>Class 1</td>
                    <td>৳ 3,500</td>
                    <td>৳ 18,000</td>
                    <td>৳ 3,500</td>
                    <td>৳ 18,000</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}