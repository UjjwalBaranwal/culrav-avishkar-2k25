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


export const deleteTeam = catchAsync(async (teamId) => {
  const { data } = await apiClient.delete(`${baseUrl}/deleteTeam`, {
    data: { teamId },
  });
  return data;
});


export const teamDetail = catchAsync(async (teamId) => {
  const { data } = await apiClient.post(`${baseUrl}/teamDetails`, { teamId });
  return data;
});