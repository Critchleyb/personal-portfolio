import React from "react";
import Layout from "../utils/Layout";
import SkillsCard from "./SkillsCard";

export default function SkillsPage() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <h2 style={{ marginBottom: "0" }}>My Skills</h2>
        <SkillsCard />
      </div>
    </Layout>
  );
}
