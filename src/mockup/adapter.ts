import axios, {
  AxiosError,
  type AxiosAdapter,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

import { handleMockupRequest } from "./routes";

function createResponse(
  config: InternalAxiosRequestConfig,
  data: unknown,
  status = 200,
  statusText = "OK"
): AxiosResponse {
  return {
    data,
    status,
    statusText,
    headers: {},
    config,
    request: {
      mockup: true,
    },
  };
}

function rejectResponse(response: AxiosResponse) {
  return Promise.reject(
    new AxiosError(
      response.statusText || "Mockup request failed",
      undefined,
      response.config,
      response.request,
      response
    )
  );
}

export function createMockupAdapter(fallbackAdapter: AxiosAdapter): AxiosAdapter {
  return async (config) => {
    await new Promise((resolve) => window.setTimeout(resolve, 250));

    const mockupResponse = handleMockupRequest(config);

    if (!mockupResponse) {
      return fallbackAdapter(config);
    }

    const response = createResponse(
      config,
      mockupResponse.data,
      mockupResponse.status,
      mockupResponse.statusText
    );

    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    return rejectResponse(response);
  };
}

export function installMockupAdapter(
  adapterConfig: Parameters<typeof axios.getAdapter>[0]
) {
  return createMockupAdapter(axios.getAdapter(adapterConfig));
}
