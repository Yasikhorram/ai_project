import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

export default function BasicCard() {
  return (
    <Card
      style={{
        width: "500px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        display: "block",
        margin: "90PX auto 100px auto",
      }}
    >
      <CardContent></CardContent>
    </Card>
  );
}
