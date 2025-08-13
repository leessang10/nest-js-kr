'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TocItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

const TableOfContents = ({ className }: TableOfContentsProps) => {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // 페이지의 헤딩 요소들을 찾아서 TOC 생성
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const tocItems: TocItem[] = []

    headings.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
      if (!heading.id && id) {
        heading.id = id
      }
      
      const level = parseInt(heading.tagName[1])
      const title = heading.textContent || ''
      
      // h1은 제외하고 h2부터 TOC에 포함
      if (level >= 2) {
        tocItems.push({ id, title, level })
      }
    })

    setToc(tocItems)

    // 스크롤 위치에 따라 활성 섹션 추적
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0% -80% 0%',
      }
    )

    headings.forEach((heading) => {
      observer.observe(heading)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  if (toc.length === 0) return null

  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="font-medium text-sm">목차</h4>
      <div className="space-y-1">
        {toc.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={cn(
              "block w-full text-left text-sm transition-colors hover:text-foreground",
              item.level === 2 && "pl-0",
              item.level === 3 && "pl-3",
              item.level === 4 && "pl-6",
              item.level >= 5 && "pl-9",
              activeId === item.id 
                ? "text-foreground font-medium border-l-2 border-primary pl-3" 
                : "text-muted-foreground"
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TableOfContents