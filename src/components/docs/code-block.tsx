'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  className?: string
}

const CodeBlock = ({ 
  children, 
  language = 'typescript', 
  title, 
  showLineNumbers = true,
  className 
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = children.split('\n')

  return (
    <div className={cn("group relative rounded-lg border bg-muted/50", className)}>
      {/* 헤더 */}
      {(title || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="flex items-center space-x-2">
            {title && <span className="text-sm font-medium">{title}</span>}
            {language && (
              <Badge variant="secondary" className="text-xs">
                {language}
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
            <span className="sr-only">코드 복사</span>
          </Button>
        </div>
      )}

      {/* 코드 영역 */}
      <div className="relative">
        {!title && !language && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
            <span className="sr-only">코드 복사</span>
          </Button>
        )}
        
        <pre className="overflow-x-auto p-4 text-sm">
          <code className={`language-${language}`}>
            {showLineNumbers ? (
              <div className="table w-full">
                {lines.map((line, index) => (
                  <div key={index} className="table-row">
                    <div className="table-cell select-none text-right text-muted-foreground/70 pr-4 w-10">
                      {index + 1}
                    </div>
                    <div className="table-cell">{line}</div>
                  </div>
                ))}
              </div>
            ) : (
              children
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBlock