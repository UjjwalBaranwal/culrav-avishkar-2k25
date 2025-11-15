import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { confirmEmailToken } from "./authSlice";

export default function ConfirmEmail() {
  const [searchParams] = useSearchParams();
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      confirmEmailToken(searchParams.get("token"), searchParams.get("id")),
    );
  });

  return (
    <div>
      {loading
        ? "Email confirmation pending..."
        : error
          ? "Error verifying email!"
          : "Email verified!"}
    </div>
  );
}
