// export interface UserInterface {
//   // idUser: string;
//   users: string[];
//   pseudo: string | null;
//   email: string | null;
//   password: string | null;
// }

export interface UserInterface {
  users: {
    pseudo: string | null;
    email: string | null;
    password: string | null;
  };
}