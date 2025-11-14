import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { confirmEmail } from "../../services/apiAuth";

export default function ConfirmEmail() {
  const [searchParams] = useSearchParams();
  const [pending, setPending] = useState(true);
  const [status, setStatus] = useState(400);
  useEffect(() => {
    async function sendConfirmationRequest() {
      try {
        confirmEmail(searchParams.get("token"), searchParams.get("id"));
      } catch (e) {
        setStatus(e.response.status);
        setPending(false);
      }
    }
    sendConfirmationRequest();
  });
  return (
    <div>
      {pending ? "Email confirmation pending..." : <GoHome status={status} />}
    </div>
  );
}

export function GoHome({ status }) {
  return (
    <div>
      {status === 200 ? (
        <Link className="text-green-500" href="/login">
          Email verified! You can now login!!
        </Link>
      ) : (
        <Link className="text-red-500" href="/">
          Verification failed :( Go Home
        </Link>
      )}
    </div>
  );
}
