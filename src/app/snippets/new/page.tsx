import { db } from "@/db";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // server action
    "use server";
    // validate input
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // create new db record
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // redirect to root route
    redirect("/");
  }

  return (
    <form action={createSnippet}>
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
        <button
          className="primary-rounded main-cta hover:main-cta-hover"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
