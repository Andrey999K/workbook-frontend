import { useEffect, useState } from "react";
import { useQuestsStore } from "../store";

export const useHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(useQuestsStore.persist.hasHydrated());

    return useQuestsStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
  }, []);

  return hydrated;
};
