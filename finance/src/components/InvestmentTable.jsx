import { calculateInvestmentResults } from "../util/investment";

const InvestmentTable = ({ input }) => {
  const result = calculateInvestmentResults(input);
  console.log(result);
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
          <tr>
            <td>{input.initialInvestment}</td>
          </tr>
        </tbody>
      </table>
      {result.year}
    </>
  );
};

export default InvestmentTable;
