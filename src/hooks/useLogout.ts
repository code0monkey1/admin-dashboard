import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store";
import { logout } from "../http/api";

export const useLogout = () => {
  const { clearUser } = useAuthStore();

  const { mutate: logoutUser } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => {
      clearUser();
    },
  });

  return { logoutUser };
};
