"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center">
      <div className="text-center py-32 prose">
        <h2>Something went wrong!</h2>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}
