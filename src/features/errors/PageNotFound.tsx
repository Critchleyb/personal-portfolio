import React from "react";
import Layout from "../utils/Layout";

export default function PageNotFound() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <h1 style={{ marginTop: "4rem" }}>404 - Page not found</h1>
      </div>
    </Layout>
  );
}
