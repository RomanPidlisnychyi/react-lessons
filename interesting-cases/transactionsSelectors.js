import { createSelector } from "reselect";
import colorSwitcher from "../../utils/colorsSwitcher";

export const transactionsListSelector = (state) => state.transactions.items;
export const totalBalanceSelector = (state) => state.transactions.balance;

export const incomeTransactionsListSelector = createSelector(
  transactionsListSelector,
  (transactionsList) => transactionsList.filter((item) => item.type === "+")
);
export const costTransactionsListSelector = createSelector(
  transactionsListSelector,
  (transactionsList) => transactionsList.filter((item) => item.type === "-")
);

export const totalIncomeBalanceSelector = createSelector(
  incomeTransactionsListSelector,
  (transactionsList) =>
    transactionsList.reduce((sum, item) => sum + item.amount, 0)
);
export const totalCostBalanceSelector = createSelector(
  costTransactionsListSelector,
  (transactionsList) =>
    transactionsList.reduce((sum, item) => sum + item.amount, 0)
);

export const costTransactionsByCategorySelector = createSelector(
  costTransactionsListSelector,
  (transactionsList) => {
    const transactionsByCategory = transactionsList.reduce((acc, item) => {
      if (acc[item.category]) {
        return {
          ...acc,
          [item.category]: {
            ...acc[item.category],
            amount: item.amount + acc[item.category].amount,
          },
        };
      } else {
        return {
          ...acc,
          [item.category]: item,
        };
      }
    }, {});

    return Object.values(transactionsByCategory);
  }
);

export const UIStatisticsTransactionsListSelector = createSelector(
    costTransactionsByCategorySelector,
  (transactionsList) => {
    return transactionsList.map((item) => ({
      ...item,
      y: item.amount,
      label: item.category,
      color: colorSwitcher(item.category),
    }));
  }
);
