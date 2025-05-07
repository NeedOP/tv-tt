import './Pricing.css';

const Pricing = () => (
  <div className="pricing-container">
    <h2 className="pricing-title">Våra priser</h2>
    <div className="pricing-table-container">
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Tjänst</th>
            <th>Pris</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Skjortor</td>
            <td>50 kr/st</td>
          </tr>
          <tr>
            <td>Byxor</td>
            <td>70 kr/st</td>
          </tr>
          <tr>
            <td>Kostym</td>
            <td>150 kr/st</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Pricing;