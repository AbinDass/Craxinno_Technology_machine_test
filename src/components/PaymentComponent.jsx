import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import { calculateGraph } from "../helper/helper";

const PaymentComponent = ({ updatedBalance, balance }) => {
    const [initialBalance, setInitialBalanve] = useState();
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const data = calculateGraph(updatedBalance, monthlyPayment);
    useEffect(() => {
        if (updatedBalance?.length) {
            var sum = updatedBalance.reduce((accumulator, updatedBalance) => {
                return accumulator + updatedBalance.balance;
            }, 0);
            setInitialBalanve(sum);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedBalance]);

    return (
        <div className="payment">
            <h2 className="basicFont">initial balance: {updatedBalance.length ? <span>{initialBalance}</span> : 0} INR</h2>
            <div className="basicFont balance">
                monthly payment :
                <input
                    type="number"
                    value={monthlyPayment}
                    onChange={(event) => setMonthlyPayment(event.target.value)}
                />{" "}
                <br />
            </div>
            <hr />
            <h5 className="basicFont balance">balance of Accounts after a number of months</h5>
            <div>
                <Chart data={data} />
            </div>
        </div>
    );
};
export default PaymentComponent;
