"use client";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { editSnippet } from "@/app/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  const handleEditChange = (value: string = "") => {
    setCode(value);
  };
  const editSnippetAction = editSnippet.bind(null, snippet.id, code);
  return (
    <div className="max-w-fit">
      <Editor
        height="40vh"
        width="500px"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="primary-rounded main-cta">
          Save
        </button>
      </form>
    </div>
  );
}
