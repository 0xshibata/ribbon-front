import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import {
  VaultName,
  VaultNameOptionMap,
  VaultOptions,
} from "../constants/constants";

const useVaultOption = () => {
  const [vaultOption, setVaultOption] = useState<VaultOptions>();
  const match = useRouteMatch<{ vaultSymbol: string }>(
    "/theta-vault/:vaultSymbol"
  );

  useEffect(() => {
    if (
      match &&
      match.params &&
      match.params.vaultSymbol in VaultNameOptionMap
    ) {
      setVaultOption(VaultNameOptionMap[match.params.vaultSymbol as VaultName]);
      return;
    }

    setVaultOption(undefined);
  }, [match]);

  return vaultOption;
};

export default useVaultOption;
