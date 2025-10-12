import { calculateInvestmentResults } from "../util/investment";

const InvestmentTable = ({ input }) => {
  const result = calculateInvestmentResults(input);

  for (let i = 0; i < 17; i++) {
    console.log(i);
  }
  // console.log(result);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((resultData) => (
            <tr key={resultData.year}>
              <td>{resultData.year}</td>
              <td>{resultData.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {result.year}
    </>
  );
};

export default InvestmentTable;
