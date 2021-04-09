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
          minHeight: "100vh",
        }}
      >
        <h2 style={{ marginBottom: "0", marginTop: "2rem" }}>My Skills</h2>
        <SkillsCard />
      </div>
    </Layout>
  );
}
