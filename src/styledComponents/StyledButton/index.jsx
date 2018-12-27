import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../lib/styleUtil";

const BorderedBtn = styled.Button`
  & {
    font-weight: 600;
    color: ${oc.cyan[6]};
    border: 1px solid ${oc.cyan[6]};
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s all;

    &:hover {
      background: ${oc.cyan[6]};
      color: white;
      ${shadow(1)};
    }

    &:active {
      /* 마우스 클릭시 아래로 미세하게 움직임 */
      transform: translateY(3px);
    }
  }
`;

const EditorBtn = styled(BorderedBtn)`
  & {
  }
`;

export { BorderedBtn, EditorBtn };
