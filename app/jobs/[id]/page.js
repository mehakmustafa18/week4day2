import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import DarkModeToggle from '../../components/DarkModeToggle'
import TagButton from '../../components/TagButton'

async function getJob(id) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/jobs`, { cache: 'no-store' })
  const jobs = await res.json()
  return jobs.find((j) => j.id === parseInt(id)) || null
}

export default async function JobDetail({ params }) {
  const job = await getJob(params.id)

  if (!job) {
    return (
      <>
        <Header />
        <div className="detail-container">
          <Link href="/" className="back-btn">
            ← Back to Jobs
          </Link>
          <div className="no-results">Job not found.</div>
        </div>
      </>
    )
  }

  const allTags = [job.role, job.level, ...job.languages, ...job.tools]

  return (
    <>
      <Header />
      <main>
        <div className="detail-container">
          <Link href="/" className="back-btn">
            ← Back to Job Listings
          </Link>

          <div className="detail-card">
            <div className="detail-header">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={96}
                height={96}
                className="detail-logo"
                unoptimized
              />
              <div>
                <div className="detail-company">{job.company}</div>
                <div className="job-company-row" style={{ marginBottom: '0' }}>
                  {job.isNew && <span className="badge badge-new">New!</span>}
                  {job.featured && <span className="badge badge-featured">Featured</span>}
                </div>
              </div>
            </div>

            <h1 className="detail-title">{job.position}</h1>

            <div className="detail-meta">
              <span>{job.postedAt}</span>
              <span className="job-meta-dot" />
              <span>{job.contract}</span>
              <span className="job-meta-dot" />
              <span>{job.location}</span>
            </div>

            <p className="detail-description">{job.description}</p>

            <div className="detail-tags-section">
              <h3 className="detail-tags-title">Skills & Technologies</h3>
              <div className="detail-tags">
                {allTags.map((tag) => (
                  <TagButton key={tag} tag={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <DarkModeToggle />
    </>
  )
}
