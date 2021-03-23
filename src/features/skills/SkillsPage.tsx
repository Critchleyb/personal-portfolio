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
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <SkillsCard />
      </div>
    </Layout>
  );
}
