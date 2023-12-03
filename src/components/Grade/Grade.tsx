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
        <Content value={classN.length}>
          <p>{classN}</p>
        </Content>
      </div>
      <div>
        <div>
          <RGMicon />
          <span>rgm:</span>
        </div>
        <Content value={rgm.length}>
          <p>{rgm}</p>
        </Content>
      </div>
      <div>
        <div>
          <GradeIcon />
          <span>notas:</span>
        </div>
        <Content value={`${grade1} e ${grade2}`.length}>
          <GradeN value={Number(grade1)}>{grade1}</GradeN>
          <p> e </p>
          <GradeN value={Number(grade2)}>{grade2}</GradeN>
        </Content>
      </div>
    </StyledGrade>
  );
};

export default Grade;
