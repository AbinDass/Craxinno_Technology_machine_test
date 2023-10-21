import React, { useEffect, useState } from "react";
import PaymentComponent from "./PaymentComponent";
import BalanceComponent from "./BalanceComponent";
import { useDispatch, useSelector } from "react-redux";
import { balanceAction } from "../redux/slice/balanceSlice";

const Landing = () => {
    const [balance, setBalance] = useState(0);
    const updatedBalance = useSelector((state) => state.account.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(balanceAction.setRemoveBalance({}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="main">
            <BalanceComponent balance={balance} setBalance={setBalance} updatedBalance={updatedBalance} />
            <PaymentComponent updatedBalance={updatedBalance} balance={balance} />
        </div>
    );
};

export default Landing;
