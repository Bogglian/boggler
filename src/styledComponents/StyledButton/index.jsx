import styled from "styled-components";
import oc from "open-color";
import { Link } from "react-router-dom";
import { shadow } from "../../lib/styleUtil";

const BorderedBtn = styled.button`
  & {
    padding: 0;
    font-weight: 600;
    color: ${oc.cyan[6]};
    border: 1px solid ${oc.cyan[6]};
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
    width: 10%;
    height: 5%;
  }

  &.save-btn {
    margin-top: 0.5%;
    font-size: 90%;
    margin-left: 90%;
  }

  &.write-btn {
    width: 7%;
    background: white;
    margin-top: 0.5%;
    margin-left: 93%;
    &:hover {
      background: ${oc.cyan[6]};
      color: white;
      ${shadow(1)};
    }
  }

`;

const TextMenuBtn = styled.div`
  & {
    padding-left: 1%;
    padding-right: 1%;
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

const PostItemLinkBtn = styled(Link)`
  &{
    font-size: 200%;
    display: block;
    color: black;
    line-height: 1.4em;
    text-decoration:none;
    &:hover {
      color: white;
    }
  }
`;

export { BorderedBtn, EditorBtn, LinkBtn, TextMenuBtn, PostItemLinkBtn };
