import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createUser } from "../http/api";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: createNewUser } = useMutation({
    mutationKey: ["user"],
    mutationFn: createUser,
    onSuccess: async () => {
      // invalidate users data
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      return;
    },
  });

  return { createNewUser };
};
