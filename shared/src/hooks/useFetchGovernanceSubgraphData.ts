import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useWeb3React } from "@web3-react/core";

import {
  defaultVaultSubgraphData,
  GovernanceSubgraphDataContextType,
} from "./subgraphDataContext";
import { impersonateAddress } from "../utils/development";
import { isProduction } from "../utils/env";
import {
  rbnTokenGraphql,
  resolveRBNTokenAccountSubgraphResponse,
  resolveRBNTokenSubgraphResponse,
} from "./useRBNTokenSubgraph";

import { usePendingTransactions } from "./pendingTransactionsContext";

import { getGovernanceSubgraphURI } from "../utils/env";

const useFetchGovernanceSubgraphData = () => {
  const { account: acc } = useWeb3React();
  const account = impersonateAddress || acc;
  const [data, setData] = useState<GovernanceSubgraphDataContextType>(
    defaultVaultSubgraphData
  );
  const { transactionsCounter } = usePendingTransactions();
  const [, setMulticallCounter] = useState(0);

  const doMulticall = useCallback(async () => {
    if (!isProduction()) {
      console.time("Subgraph Data Fetch");
    }

    /**
     * We keep track with counter so to make sure we always only update with the latest info
     */
    let currentCounter: number;
    setMulticallCounter((counter) => {
      currentCounter = counter + 1;

      setData((prev) => ({
        ...prev,
        loading: true,
      }));

      return currentCounter;
    });

    const response = (
      await axios.post(getGovernanceSubgraphURI(), {
        query: `{
              ${rbnTokenGraphql(account)}
            }`.replaceAll(" ", ""),
      })
    ).data.data;

    setMulticallCounter((counter) => {
      if (counter === currentCounter) {
        setData((prev) => ({
          ...prev,
          rbnToken: resolveRBNTokenSubgraphResponse(response),
          rbnTokenAccount: resolveRBNTokenAccountSubgraphResponse(response),

          loading: false,
        }));
      }

      return counter;
    });

    if (!isProduction()) {
      console.timeEnd("Subgraph Data Fetch");
    }
  }, [account]);

  useEffect(() => {
    doMulticall();
  }, [doMulticall, transactionsCounter]);

  return data;
};

export default useFetchGovernanceSubgraphData;
