/**
 * GitHub API utilities for fetching user repositories
 */

const GITHUB_USERNAME = 'ATTARAYOUB'
const GITHUB_API_BASE = 'https://api.github.com'

/**
 * Fetch user repositories from GitHub
 * @returns {Promise<Array>} Array of repository objects
 */
export async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos = await response.json()

    // Filter and transform repos
    return repos
      .filter(repo => !repo.fork && !repo.archived) // Exclude forks and archived repos
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description provided',
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics || [],
        updatedAt: new Date(repo.updated_at),
        createdAt: new Date(repo.created_at),
      }))
      .sort((a, b) => b.updatedAt - a.updatedAt)
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error)
    return []
  }
}

/**
 * Get technology color based on language
 */
export function getTechColor(language) {
  const colors = {
    'JavaScript': '#f7df1e',
    'TypeScript': '#3178c6',
    'Python': '#3776ab',
    'Java': '#007396',
    'React': '#61dafb',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Dart': '#0175c2',
    'Kotlin': '#7f52ff',
    'Go': '#00add8',
    'Rust': '#ce422b',
    'PHP': '#777bb4',
    'Ruby': '#cc342d',
    'C++': '#00599c',
    'C#': '#239120',
  }
  return colors[language] || '#00d4ff'
}

/**
 * Format date to readable string
 */
export function formatDate(date) {
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}
