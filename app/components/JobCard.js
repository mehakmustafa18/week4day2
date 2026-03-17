'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useFilterStore } from '../../store/filterStore'

export default function JobCard({ job }) {
  const { addFilter, filters } = useFilterStore()

  const allTags = [job.role, job.level, ...job.languages, ...job.tools]

  return (
    <div className={`job-card ${job.featured ? 'featured' : ''}`}>
      <Image
        src={job.logo}
        alt={`${job.company} logo`}
        width={88}
        height={88}
        className="job-logo"
        unoptimized
      />

      <div className="job-info">
        <div className="job-company-row">
          <span className="company-name">{job.company}</span>
          {job.isNew && <span className="badge badge-new">New!</span>}
          {job.featured && <span className="badge badge-featured">Featured</span>}
        </div>

        <Link href={`/jobs/${job.id}`} style={{ textDecoration: 'none' }}>
          <h2 className="job-title">{job.position}</h2>
        </Link>

        <div className="job-meta">
          <span>{job.postedAt}</span>
          <span className="job-meta-dot" />
          <span>{job.contract}</span>
          <span className="job-meta-dot" />
          <span>{job.location}</span>
        </div>
      </div>

      <div className="card-divider" />

      <div className="job-tags">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`tag-btn ${filters.includes(tag) ? 'active' : ''}`}
            onClick={() => addFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
