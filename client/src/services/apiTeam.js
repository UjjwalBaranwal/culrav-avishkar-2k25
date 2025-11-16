import apiClient from "../utils/apiClient";
import { catchAsync } from "../utils/catchAsync";
const baseUrl = "/team";

export const createTeam = catchAsync(async (name, size, leader) => {
  const { data } = await apiClient.post(`${baseUrl}/createTeam`, {
    name,
    size,
    leader,
  });
  return data;
});
