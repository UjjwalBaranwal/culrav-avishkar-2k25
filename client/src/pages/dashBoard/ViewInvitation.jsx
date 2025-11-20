import { useEffect, useState } from "react";
import { acceptInvitation, rejectInvitation } from "../../services/apiTeam";
import { toast } from "sonner";
import { getUserInvites } from "../../services/apiUser";

export default function ViewInvitation() {
  const [invites, setInvites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchInvites() {
      setLoading(true);
      try {
        const data = await getUserInvites();
        setInvites(data);
      } catch (e) {
        console.error(e);
        toast.error("Error getting invites :(");
      } finally {
        setLoading(false);
      }
    }
    fetchInvites();
  });

  const accept = async (team_id) => {
    try {
      await acceptInvitation(team_id);
      toast.success("Invitation accepted!");
    } catch (e) {
      console.error(e);
      toast.error("Error accepting invitation. Try again!");
    }
  };

  const reject = async (team_id) => {
    try {
      await rejectInvitation(team_id);
      toast.success("Invitation rejected!");
    } catch (e) {
      console.error(e);
      toast.error("Error rejecting invitation. Try again!");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your invitations</h2>
      {loading
        ? "Loading"
        : invites.map((invitation, i) => (
            <div
              key={i}
              className="bg-black/30 rounded-lg p-6 border border-white/10"
            >
              <div className="text-white/80 flex flex-col gap-5  md:flex-row justify-between">
                <span className="flex items-center">{invitation.teamName}</span>
                <span className="flex gap-5 justify-end">
                  <button
                    className="cursor-pointer w-[100px] h-10 bg-green-500 rounded-sm"
                    onClick={() => accept(invitation._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="cursor-pointer w-[100px] h-10 bg-red-500 rounded-sm"
                    onClick={() => reject(invitation._id)}
                  >
                    Reject
                  </button>
                </span>
              </div>
            </div>
          ))}
    </div>
  );
}
