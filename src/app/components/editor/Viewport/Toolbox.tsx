import { Element, useEditor } from "@craftjs/core";
import React, { useState } from "react";
import styled from "styled-components";
import Basics from "./tool_items/basics/Basics";

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : "")}
  ${(props) => (!props.enabled ? `opacity: 0;` : "")}
`;



export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [mode, setMode] = useState("basic");

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox transition w-[200px] h-full flex flex-col bg-white"
    >
      <div>
        <ModeButton active={mode === "basic"} onClick={() => setMode("basic")}>
          Basic
        </ModeButton>
        <ModeButton active={mode === "block"} onClick={() => setMode("block")}>
          Blocks
        </ModeButton>
      </div>

      {mode === "basic" ? <Basics /> : <div>Blocks</div>}
    </ToolboxDiv>
  );
};

const ModeButton = ({ children, active, onClick }) => {
  return (
    <div
      className={`${active && " bg-blue-500 "} rounded border p-4`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
