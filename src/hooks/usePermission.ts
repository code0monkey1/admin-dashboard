import { Role, User } from "../store";

export const usePermission = () => {
  const allowedRoles: Role[] = [Role.ADMIN, Role.MANAGER];

  const isAllowed = (user: User | null) => {
    if (!user) {
      return false;
    }

    return allowedRoles.includes(user.role);
  };

  return {
    isAllowed,
  };
};
