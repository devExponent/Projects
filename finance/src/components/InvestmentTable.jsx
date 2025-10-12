import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

const InvestmentTable = ({ input }) => {
  const result = calculateInvestmentResults(input);
  console.log(result);
  const format = formatter;

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
          {result.map((resultData) => {
            return (
              <tr key={resultData.year}>
                <td>{resultData.year}</td>
                <td>{format.format(resultData.valueEndOfYear)}</td>
                <td>{format.format(resultData.interest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {result.year}
    </>
  );
};

export default InvestmentTable;
