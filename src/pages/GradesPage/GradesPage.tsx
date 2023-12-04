import { useLocation } from "react-router-dom";
import { StyledPage } from "../style";
import {
  ColumnContainer,
  GradeForm,
  GradeInputs,
  GradesContainer,
  UlScrollContainer,
} from "./style";
import { GradeInfo, UserInfo } from "../../vite-env";
import { storage } from "../../utils/constants/storage";
import { ChangeEvent, FormEvent, useState } from "react";
import Grade from "../../components/Grade/Grade";

const GradesPage = () => {
  const { pathname } = useLocation();

  const userStorage = localStorage.getItem(storage.user);
  const { name, rgm }: UserInfo = userStorage
    ? JSON.parse(userStorage)
    : { name: "", rgm: "" };

  const defaultGradeInfo = {
    name,
    rgm,
    grade1: undefined,
    grade2: undefined,
    classN: "",
  };
  const [gradeInfo, setGradeInfo] = useState<GradeInfo>(defaultGradeInfo);
  const handleGradeInput = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    setGradeInfo((previous) => ({ ...previous, [type]: e.target.value }));
  };

  const filterGrades = (grades: GradeInfo[]) => {
    return grades.filter(({ rgm }) => rgm === gradeInfo.rgm);
  };
  const [grades, setGrades] = useState<GradeInfo[]>(() => {
    const storedGrades = localStorage.getItem(storage.grades);
    if (storedGrades) {
      return filterGrades(JSON.parse(storedGrades) as GradeInfo[]);
    } else {
      return [];
    }
  });
  const insertGrade = (e: FormEvent) => {
    e.preventDefault();
    const storedGrades = localStorage.getItem(storage.grades);
    if (storedGrades === null) {
      localStorage.setItem(storage.grades, JSON.stringify([gradeInfo]));
      setGrades([gradeInfo]);
    } else {
      const parsedStoredGrades: GradeInfo[] = JSON.parse(storedGrades);
      localStorage.setItem(
        storage.grades,
        JSON.stringify([...parsedStoredGrades, gradeInfo])
      );
      setGrades([...filterGrades(parsedStoredGrades), gradeInfo]);
    }
    setGradeInfo({ ...defaultGradeInfo, grade1: 0, grade2: 0 });
  };

  return (
    <StyledPage pathname={pathname}>
      <ColumnContainer>
        <GradeForm onSubmit={insertGrade}>
          <div>
            <label htmlFor="name">nome</label>
            <input disabled={true} value={gradeInfo.name} id="name" />
          </div>
          <div>
            <label htmlFor="rgm">rgm</label>
            <input disabled={true} value={gradeInfo.rgm} id="rgm" />
          </div>
          <div>
            <label htmlFor="class">turma</label>
            <input
              id="class"
              value={gradeInfo.classN}
              onChange={(e) => handleGradeInput(e, "classN")}
              placeholder="digite a sua turma"
            />
          </div>
          <GradeInputs>
            <div>
              <label htmlFor="grade1">nota1</label>
              <input
                required
                type="number"
                id="grade1"
                min={0}
                value={gradeInfo.grade1}
                onChange={(e) => handleGradeInput(e, "grade1")}
                placeholder="digite a sua 1 nota"
              />
            </div>
            <div>
              <label htmlFor="grade2">nota2</label>
              <input
                required
                type="number"
                id="grade2"
                min={0}
                max={10}
                value={gradeInfo.grade2}
                onChange={(e) => handleGradeInput(e, "grade2")}
                placeholder="digite a sua 2 nota"
              />
            </div>
          </GradeInputs>
          <button type="submit">
            <p>Inserir</p>
          </button>
        </GradeForm>
        {grades.length > 0 && (
          <UlScrollContainer>
            <GradesContainer>
              {grades.map((grade, i) => (
                <Grade key={i} grade={grade} />
              ))}
            </GradesContainer>
          </UlScrollContainer>
        )}
      </ColumnContainer>
    </StyledPage>
  );
};

export default GradesPage;
