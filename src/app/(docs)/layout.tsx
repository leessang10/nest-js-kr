import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'
import Footer from '@/components/layout/footer'
import TableOfContents from '@/components/docs/table-of-contents'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container">
        <div className="flex">
          {/* 왼쪽 사이드바 */}
          <aside className="hidden lg:block flex-none">
            <Sidebar />
          </aside>

          {/* 메인 콘텐츠 */}
          <main className="flex-1 min-w-0 lg:pl-8">
            <div className="max-w-5xl">
              {children}
            </div>
          </main>

          {/* 오른쪽 TOC */}
          <aside className="hidden xl:block flex-none w-64 pl-8">
            <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-auto py-6">
              <TableOfContents />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  )
}