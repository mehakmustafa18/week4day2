import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import JobsList from "./components/JobsList";
import DarkModeToggle from "./components/DarkModeToggle";

// async function getJobs() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
//   const res = await fetch(`${baseUrl}/api/jobs`, { cache: "no-store" });
//   return res.json();
// }
async function getJobs() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/jobs`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch jobs: ${res.status}`);
  }

  return res.json();
}

export default async function Home() {
  const jobs = await getJobs();

  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <FilterBar />
          <JobsList jobs={jobs} />
        </div>
      </main>
      <DarkModeToggle />
    </>
  );
}
