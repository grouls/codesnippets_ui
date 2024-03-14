import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { deleteSnippet } from "@/app/actions";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 1000));
  // parse id to int
  const id = +props.params.id;
  const snippet = await db.snippet.findFirst({ where: { id } });

  return !snippet ? (
    notFound()
  ) : (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="primary-rounded main-cta hover:main-cta-hover"
          >
            Edit
          </Link>
          <form action={deleteSnippet.bind(null, id)}>
            <button className="primary-rounded delete-cta hover:delete-cta-hover">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
