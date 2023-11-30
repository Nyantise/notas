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
          <span>turma:</span>
        </div>
        <Content>
          <p>{classN}</p>
        </Content>
      </div>
      <div>
        <div>
          <RGMicon />
          <span>rgm:</span>
        </div>
        <Content>
          <p>{rgm}</p>
        </Content>
      </div>
      <div>
        <div>
          <GradeIcon />
          <span>notas:</span>
        </div>
        <Content>
          <GradeN value={Number(grade1)}>{grade1}</GradeN>
          <p> e </p>
          <GradeN value={Number(grade2)}>{grade2}</GradeN>
        </Content>
      </div>
    </StyledGrade>
  );
};

export default Grade;
