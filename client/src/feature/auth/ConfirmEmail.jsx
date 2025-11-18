import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { confirmEmailToken } from "./authSlice";

export default function ConfirmEmail() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = searchParams.get("token");
    const id = searchParams.get("id");

    if (token && id) {
      dispatch(confirmEmailToken({ token, id }));
    }
  }, [dispatch, searchParams]);

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
