import Link from 'next/link'
import { Github, Twitter, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* 브랜드 섹션 */}
          <div className="space-y-3">
            <span className="font-bold">NestJS 한국어 문서</span>
            <p className="text-sm text-muted-foreground">
              확장 가능한 Node.js 서버 측 애플리케이션을 구축하기 위한 프레임워크
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/nestjs/nest" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/nestframework" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://discord.gg/nestjs" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  <span className="sr-only">Discord</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* 시작하기 */}
          <div className="space-y-3">
            <h3 className="font-medium">시작하기</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/introduction" className="text-muted-foreground hover:text-foreground transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/first-steps" className="text-muted-foreground hover:text-foreground transition-colors">
                  첫 번째 단계
                </Link>
              </li>
              <li>
                <Link href="/cli" className="text-muted-foreground hover:text-foreground transition-colors">
                  CLI
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-muted-foreground hover:text-foreground transition-colors">
                  예제
                </Link>
              </li>
            </ul>
          </div>

          {/* 가이드 */}
          <div className="space-y-3">
            <h3 className="font-medium">가이드</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/controllers" className="text-muted-foreground hover:text-foreground transition-colors">
                  컨트롤러
                </Link>
              </li>
              <li>
                <Link href="/providers" className="text-muted-foreground hover:text-foreground transition-colors">
                  프로바이더
                </Link>
              </li>
              <li>
                <Link href="/modules" className="text-muted-foreground hover:text-foreground transition-colors">
                  모듈
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors">
                  보안
                </Link>
              </li>
            </ul>
          </div>

          {/* 커뮤니티 */}
          <div className="space-y-3">
            <h3 className="font-medium">커뮤니티</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://github.com/nestjs/nest/discussions" className="text-muted-foreground hover:text-foreground transition-colors">
                  토론
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/nestjs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/nestframework" className="text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                  지원
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 NestJS 한국어 문서. MIT 라이선스 하에 배포됩니다.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                개인정보 처리방침
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer