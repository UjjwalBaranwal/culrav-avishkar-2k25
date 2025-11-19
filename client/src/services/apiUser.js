import apiClient from "../utils/apiClient";
import { catchAsync } from "../utils/catchAsync";

const baseUrl = "/user";

export const updateMe = catchAsync(async (payload) => {
	const { data } = await apiClient.patch(`${baseUrl}/update`, payload);
	return data;
});
