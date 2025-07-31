"use client"

import type { ReactNode } from "react"

interface DocContentProps {
  children: ReactNode
}

export function DocContent({ children }: DocContentProps) {
  return (
    <div className="prose prose-invert prose-blue max-w-none">
      <style jsx global>{`
        .prose h1 {
          @apply text-4xl font-bold text-white mb-6 border-b border-gray-800 pb-4;
        }
        .prose h2 {
          @apply text-2xl font-semibold text-white mt-8 mb-4;
        }
        .prose h3 {
          @apply text-xl font-semibold text-gray-200 mt-6 mb-3;
        }
        .prose h4 {
          @apply text-lg font-semibold text-gray-300 mt-4 mb-2;
        }
        .prose p {
          @apply text-gray-300 leading-relaxed mb-4;
        }
        .prose ul {
          @apply text-gray-300 space-y-2;
        }
        .prose li {
          @apply text-gray-300;
        }
        .prose code {
          @apply bg-gray-800 text-blue-400 px-2 py-1 rounded text-sm;
        }
        .prose pre {
          @apply bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto;
        }
        .prose pre code {
          @apply bg-transparent text-gray-300 p-0;
        }
        .prose blockquote {
          @apply border-l-4 border-blue-500 pl-4 italic text-gray-400;
        }
        .prose table {
          @apply w-full border-collapse border border-gray-700;
        }
        .prose th {
          @apply bg-gray-800 text-white p-3 border border-gray-700 font-semibold;
        }
        .prose td {
          @apply p-3 border border-gray-700 text-gray-300;
        }
        .prose a {
          @apply text-blue-400 hover:text-blue-300 underline;
        }
      `}</style>
      {children}
    </div>
  )
}
