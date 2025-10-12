import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

const InvestmentTable = ({ input }) => {
  const result = calculateInvestmentResults(input);
  console.log(result);
  const format = formatter;
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
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
            const totalInterest =
              resultData.valueEndOfYear -
              resultData.interest * resultData.year -
              initialInvestment;
            const totalAmountInvested =
              resultData.valueEndOfYear - totalInterest;
            return (
              <tr key={resultData.year}>
                <td>{resultData.year}</td>
                <td>{format.format(resultData.valueEndOfYear)}</td>
                <td>{format.format(resultData.interest)}</td>
                <td>{format.format(totalAmountInvested)}</td>
                <td>{format.format(resultData.annualInvestment)}</td>
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
