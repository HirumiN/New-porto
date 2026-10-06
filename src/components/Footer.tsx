import { profile } from '../data/portfolio'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="flex flex-col items-center justify-between gap-3 text-xs text-faint md:flex-row">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>Crafted with React, TypeScript &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}