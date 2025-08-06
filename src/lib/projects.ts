import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'projects')

export type Project = {
  metadata: ProjectMetadata
  content: string
}

export type ProjectMetadata = {
  title?: string
  description?: string
  image?: string
  technologies?: string[]
  category?: string
  status?: 'completed' | 'in-progress' | 'planned'
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  createdAt?: string
  slug: string
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const projects = files
    .map(file => getProjectMetadata(file))
    .sort((a, b) => {
      // Sort by featured first, then by date
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      
      if (new Date(a.createdAt ?? '') < new Date(b.createdAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
