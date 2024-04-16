export type Credentials = {
  email: string;
  password: string;
};

export const enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}
