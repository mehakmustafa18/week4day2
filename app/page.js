import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import JobsList from "./components/JobsList";
import DarkModeToggle from "./components/DarkModeToggle";
import { jobs } from "./data/jobs";

export default function Home() {
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
