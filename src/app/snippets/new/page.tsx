"use client";
import { createSnippet } from "@/app/actions";
import { useFormState } from "react-dom";

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(createSnippet, {
    message: "",
  });

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input type="text" className="primary-rounded w-full" name="title" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea className="primary-rounded w-full" name="code" />
        </div>
        {formState.message && (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        )}
        <button
          className="primary-rounded main-cta hover:main-cta-hover"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}
