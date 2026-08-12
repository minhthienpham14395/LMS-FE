import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";

import { LoginForm } from "./LoginForm";

function renderLoginForm() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    </QueryClientProvider>
  );
}

describe("LoginForm", () => {
  test("hiển thị lỗi khi gửi form đăng nhập trống", async () => {
    const user = userEvent.setup();

    renderLoginForm();

    await user.click(screen.getByRole("button", { name: /đăng nhập/i }));

    expect(await screen.findByText("Vui lòng nhập email.")).toBeInTheDocument();
    expect(screen.getByText("Vui lòng nhập mật khẩu.")).toBeInTheDocument();
  });
});
