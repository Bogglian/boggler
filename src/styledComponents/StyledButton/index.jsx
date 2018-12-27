import styled from "styled-components";
import oc from "open-color";
import { Link } from "react-router-dom";
import { shadow } from "../../lib/styleUtil";

const BorderedBtn = styled.button`
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

const LinkBtn = styled(Link)`
  & {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    width: 90%;
    height: 3rem;
    font-size: 0.8rem;
    background-color: white;
    padding: 1rem;
    border-ratio: 1rem;
  }
`;

export { BorderedBtn, EditorBtn, LinkBtn };
