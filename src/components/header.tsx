import Link from "next/link";

export default function HeaderPage() {
  return (
    <header>
      <nav>
        <ul className="p-3">
          <li>
            <Link
              href="/"
              className=" primary-rounded hover:bg-gray-400 hover:text-white"
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
