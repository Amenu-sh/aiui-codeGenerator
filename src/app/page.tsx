import React from "react";
import Header from "./components/Header";
import CodeTutorial from "./components/CodeTutorial";
import { CopilotKit } from "@Copilotkit/react-core";
import { CopilotSidebar } from "@Copilotkit/react-ui";
import "@Copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <>
      <Header />
      <CopilotKit url="/api/copilotkit">
        <CopilotSidebar
          instructions="Help the user generate code. Ask the user if to generate its tutorial."
          defaultOpen={true}
          labels={{
            title: "Code & Tutorial Generator",
            initial: "Hi! 👋 I can help you generate code and its tutorial.",
          }}
        >
          <CodeTutorial />
        </CopilotSidebar>
      </CopilotKit>
    </>
  );
}
