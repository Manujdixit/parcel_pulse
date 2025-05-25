import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 bg-black">
      <Link className="text-white" href={"/dashboard"}>
        Go to dashboard
      </Link>
    </div>
  );
}
