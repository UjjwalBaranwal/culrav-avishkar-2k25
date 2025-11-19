import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { confirmEmailToken } from "./authSlice";

export default function ConfirmEmail() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    const id = searchParams.get("id");

    if (token && id) {
      const run = async () => {
        try {
          await dispatch(confirmEmailToken({ token, id })).unwrap();
        } finally {
          navigate("/login");
        }
      };
      run();
    }
  }, [dispatch, searchParams, navigate]);
}
