import apiClient from "../utils/apiClient";
import { catchAsync } from "../utils/catchAsync";

const baseUrl = "/auth";

export const getMe = catchAsync(async () => {
  const { data } = await apiClient.get("/user/me");
  return data;
});

export const loginUser = catchAsync(async (credential) => {
  const { data } = await apiClient.post(`${baseUrl}/login`, credential);
  return data;
});

export const signUpUser = catchAsync(async (credential) => {
  const { data } = await apiClient.post(`${baseUrl}/signup`, credential);
  return data;
});

export const confirmEmail = catchAsync(async (token, id) => {
  const { data } = await apiClient.post(
    `${baseUrl}/confirm-email?token=${token}&id=${id}`,
    { token, id },
  );
  return data;
});

export const forgotPassword = catchAsync(async (email) => {
  const { data } = await apiClient.post(`${baseUrl}/forgot-password`, {
    email,
  });
  return data;
});

export const resetPassword = catchAsync(async (token, id, newPassword) => {
  const { data } = await apiClient.post(
    `${baseUrl}/reset-password?token=${token}&id=${id}`,
    { newPassword },
  );
  return data;
});
