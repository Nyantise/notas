import { GradeInfo } from "../../vite-env";
import {
  ClassIcon,
  Content,
  GradeIcon,
  GradeN,
  RGMicon,
  StyledGrade,
} from "./style";

const Grade = ({
  grade: { classN, grade1, grade2, rgm },
}: {
  grade: GradeInfo;
}) => {
  return (
    <StyledGrade>
      <div>
        <div>
          <ClassIcon />
          <span>Turma:</span>
        </div>
        <Content>
          <p>{classN}</p>
        </Content>
      </div>
      <div>
        <div>
          <RGMicon />
          <span>RGM:</span>
        </div>
        <Content>
          <p>{rgm}</p>
        </Content>
      </div>
      <div>
        <div>
          <GradeIcon />
          <span>Notas:</span>
        </div>
        <Content>
          <GradeN value={Number(grade1)}>{grade1}</GradeN>
          <p> | </p>
          <GradeN value={Number(grade2)}>{grade2}</GradeN>
        </Content>
      </div>
    </StyledGrade>
  );
};

export default Grade;
