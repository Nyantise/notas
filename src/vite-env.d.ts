/// <reference types="vite/client" />

export type UserInfo = {
  name: string;
  rgm: string;
};

export type GradeInfo = {
  name: string;
  rgm: string;
  classN: string;
  grade1: number | undefined;
  grade2: number | undefined;
};
