import { useAuth, useUser } from "@clerk/react";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { syncUser } from "../lib/api";

// the best way to implement this is by using webhooks
function useUserSync() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  
  // 1. Use a Ref to track if we've already attempted a sync in this session
  // This prevents the "multiple times" loop error
  const syncStarted = useRef(false);
  
  const { mutate: syncUserMutation, isPending, isSuccess } = useMutation({ mutationFn: syncUser });

  useEffect(() => {
    // 2. Only run if Clerk is loaded, user is signed in, and we haven't synced yet
    if (isSignedIn && user && !isPending && !isSuccess && !syncStarted.current) {
      
      syncStarted.current = true; // Mark as started immediately

      syncUserMutation({
        email: user.primaryEmailAddress?.emailAddress,
        name: user.fullName ?? user.firstName ?? user.primaryEmailAddress?.emailAddress.split('@')[0] ?? "User",
        imageUrl: user.imageUrl,
      });
    }
  }, [isSignedIn, user, syncUserMutation, isPending, isSuccess]);

  return { isSynced: isSuccess };
}

export default useUserSync;
