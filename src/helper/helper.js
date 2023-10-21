export const calculateGraph = (account, value) =>{
    const totalBalance = account.reduce((total,acc)=>(total+= +acc.balance), 0)

    const data=[{balance:totalBalance, index:1}]

    for(let index=2; index<=12;index++){
        let balance = totalBalance - value*(index)
        balance = balance<0?0:balance
        data.push({balance,index});
    }

    return data;
}