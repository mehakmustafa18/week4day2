'use client'
import { useFilterStore } from '../../store/filterStore'
import JobCard from './JobCard'

export default function JobsList({ jobs }) {
  const filters = useFilterStore((s) => s.filters)

  const filtered = filters.length === 0
    ? jobs
    : jobs.filter((job) => {
        const allTags = [job.role, job.level, ...job.languages, ...job.tools]
        return filters.every((f) => allTags.includes(f))
      })

  if (filtered.length === 0) {
    return (
      <div className="no-results">
        😕 No jobs match your filters. Try removing some filters.
      </div>
    )
  }

  return (
    <div className="jobs-list">
      {filtered.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}
