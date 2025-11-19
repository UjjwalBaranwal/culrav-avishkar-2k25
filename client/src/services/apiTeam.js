import apiClient from "../utils/apiClient";
import { catchAsync } from "../utils/catchAsync";
const baseUrl = "/team";

export const createTeam = catchAsync(async (teamName, leader, size) => {
  const { data } = await apiClient.post(`${baseUrl}/createTeam`, {
    teamName,
    leader,
    size,
  });
  return data;
});


export const getMyTeams = catchAsync(async () => {
  const { data } = await apiClient.get(`${baseUrl}/myTeams`);
  return data;
});
