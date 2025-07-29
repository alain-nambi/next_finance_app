import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <UserButton />
      </div>
    </div>
  );
}
