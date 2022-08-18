import { useState } from "react";

export function useTableOrForm() {
  const [visible, setVisible] = useState<"Table" | "Form">("Table");

  const displayTable = () => setVisible("Table");
  const displayForm = () => setVisible("Form");
  
  return {
    formVisible: visible === "Form",
    tableVisisble: visible === "Table",
    displayForm,
    displayTable,
  };
}
