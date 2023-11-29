import { GradeInfo } from "../../vite-env";
import { StyledGrade } from "./style";

const Grade = ({
  grade: { classN, grade1, grade2, rgm },
}: {
  grade: GradeInfo;
}) => {
  return (
    <StyledGrade>
      <p>
        <span>classe:</span> {classN}
      </p>
      <p>
        <span>rgm:</span> {rgm}
      </p>
      <p>
        <span>notas:</span> {grade1} e {grade2}
      </p>
    </StyledGrade>
  );
};

export default Grade;
