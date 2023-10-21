import React from "react";
import { useDispatch } from "react-redux";
import { balanceAction } from "../redux/slice/balanceSlice";

const BalanceComponent = ({ balance, setBalance, updatedBalance }) => {
    const dispatch = useDispatch();
    function addBalance() {
        dispatch(
            balanceAction.setBalance({
                accountdata: +balance,
            })
        );
        setBalance(0);
    }
    return (
        <div className="account">
            <h1>Accounts</h1>
            count: {updatedBalance?.length}
            <div className="balance">
                balance
                <input
                    type="number"
                    value={balance}
                    placeholder="balance"
                    onChange={(event) => setBalance(event.target.value)}
                />{" "}
                <br />
                <button className="button" type="submit" onClick={addBalance}>
                    {" "}
                    submit{" "}
                </button>
            </div>
            {updatedBalance?.length ? (
                <div>
                    {updatedBalance.map((item) =>
                        item.balance > 0 ? (
                            <div>
                                <ul>
                                    <li>
                                        {" "}
                                        balance: <span>{item.balance}</span> INR{" "}
                                    </li>
                                </ul>
                            </div>
                        ) : null
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default BalanceComponent;
