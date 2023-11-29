/// <reference types="vite/client" />

export type UserInfo = {
  name: string;
  cpf: string;
};

export type GradeInfo = {
  name: string;
  cpf: string;
  rgm: string;
  classN: string;
  grade1: number | undefined;
  grade2: number | undefined;
};
