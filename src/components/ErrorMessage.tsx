export default function ErrorMessage({
  message,
  role,
}: {
  message?: string;
  role?: string;
}) {
  if (!message) return null;

  return (
    <p role={role} className="text-sm text-red-400">
      {message}
    </p>
  );
}
