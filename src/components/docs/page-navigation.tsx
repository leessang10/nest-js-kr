import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface NavigationItem {
  title: string
  href: string
  description?: string
}

interface PageNavigationProps {
  prev?: NavigationItem
  next?: NavigationItem
}

const PageNavigation = ({ prev, next }: PageNavigationProps) => {
  return (
    <div className="grid gap-4 py-8 md:grid-cols-2">
      {/* 이전 페이지 */}
      {prev ? (
        <Card className="group">
          <CardContent className="p-0">
            <Link href={prev.href} className="block p-6 transition-colors group-hover:bg-accent/50">
              <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                <ChevronLeft className="h-4 w-4" />
                <span className="text-sm">이전</span>
              </div>
              <div className="font-medium group-hover:text-foreground transition-colors">
                {prev.title}
              </div>
              {prev.description && (
                <div className="text-sm text-muted-foreground mt-1">
                  {prev.description}
                </div>
              )}
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div />
      )}

      {/* 다음 페이지 */}
      {next ? (
        <Card className="group">
          <CardContent className="p-0">
            <Link href={next.href} className="block p-6 text-right transition-colors group-hover:bg-accent/50">
              <div className="flex items-center justify-end space-x-2 text-muted-foreground mb-2">
                <span className="text-sm">다음</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              <div className="font-medium group-hover:text-foreground transition-colors">
                {next.title}
              </div>
              {next.description && (
                <div className="text-sm text-muted-foreground mt-1">
                  {next.description}
                </div>
              )}
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div />
      )}
    </div>
  )
}

export default PageNavigation