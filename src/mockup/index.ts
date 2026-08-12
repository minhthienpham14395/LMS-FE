import type { AxiosInstance } from "axios";

import { installMockupAdapter } from "./adapter";

export function setupMockupApi(apiClient: AxiosInstance) {
  apiClient.defaults.adapter = installMockupAdapter(apiClient.defaults.adapter);

  if (import.meta.env.DEV) {
    console.info("[mockup] API mockup enabled with VITE_ENABLE_MOCK=true");
  }
}
