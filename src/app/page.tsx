'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome Home!</h1>
      <Link href="/data">
        <button className="rounded-full p-5">Click to See Data</button>
      </Link>
    </main>
  );
}
