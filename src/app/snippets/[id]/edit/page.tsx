import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippetEditForm";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = +props.params.id;

  const snippet = await db.snippet.findFirst({ where: { id } });

  return !snippet ? (
    notFound()
  ) : (
    <>
      <div className="flex m-4 justify-between items center">
        <SnippetEditForm snippet={snippet} />
      </div>
    </>
  );
}
