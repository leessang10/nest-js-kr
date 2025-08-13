'use client'

import Link from 'next/link'
import { Menu, Search, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Badge } from '@/components/ui/badge'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* 모바일 메뉴 버튼 */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">메뉴 토글</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>

        {/* 로고 */}
        <div className="mr-4 hidden lg:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">NestJS 한국어 문서</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 lg:justify-end">
          {/* 데스크톱 네비게이션 */}
          <div className="w-full flex-1 lg:w-auto lg:flex-none">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>소개</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="grid gap-3">
                        <Link href="/introduction" className="block space-y-1 p-2 hover:bg-accent rounded-md">
                          <div className="text-sm font-medium">시작하기</div>
                          <p className="text-xs text-muted-foreground">NestJS 소개 및 설치 방법</p>
                        </Link>
                        <Link href="/first-steps" className="block space-y-1 p-2 hover:bg-accent rounded-md">
                          <div className="text-sm font-medium">첫 번째 단계</div>
                          <p className="text-xs text-muted-foreground">첫 번째 NestJS 애플리케이션 만들기</p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>기본 개념</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="grid gap-3">
                        <Link href="/controllers" className="block space-y-1 p-2 hover:bg-accent rounded-md">
                          <div className="text-sm font-medium">컨트롤러</div>
                          <p className="text-xs text-muted-foreground">HTTP 요청 처리하기</p>
                        </Link>
                        <Link href="/providers" className="block space-y-1 p-2 hover:bg-accent rounded-md">
                          <div className="text-sm font-medium">프로바이더</div>
                          <p className="text-xs text-muted-foreground">의존성 주입과 서비스</p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>고급 기법</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="grid gap-3">
                        <Link href="/authentication" className="block space-y-1 p-2 hover:bg-accent rounded-md">
                          <div className="text-sm font-medium">인증</div>
                          <p className="text-xs text-muted-foreground">사용자 인증 및 권한 부여</p>
                        </Link>
                        <Link href="/database" className="block space-y-1 p-2 hover:bg-accent rounded-md">
                          <div className="text-sm font-medium">데이터베이스</div>
                          <p className="text-xs text-muted-foreground">TypeORM과 Prisma 사용법</p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-2">
            {/* 검색 버튼 */}
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-4 w-4" />
              <span className="sr-only">검색</span>
            </Button>

            {/* 언어 변경 */}
            <Badge variant="outline">KR</Badge>

            {/* GitHub 링크 */}
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Link href="https://github.com/nestjs/nest" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

const MobileNav = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Link href="/" className="flex items-center space-x-2">
        <div className="h-6 w-6 bg-red-600 rounded"></div>
        <span className="font-bold">NestJS 한국어 문서</span>
      </Link>
      <div className="flex flex-col space-y-2 text-sm">
        <div className="font-medium">소개</div>
        <Link href="/introduction" className="ml-4 text-muted-foreground hover:text-foreground">시작하기</Link>
        <Link href="/first-steps" className="ml-4 text-muted-foreground hover:text-foreground">첫 번째 단계</Link>
        
        <div className="font-medium pt-2">기본 개념</div>
        <Link href="/controllers" className="ml-4 text-muted-foreground hover:text-foreground">컨트롤러</Link>
        <Link href="/providers" className="ml-4 text-muted-foreground hover:text-foreground">프로바이더</Link>
        
        <div className="font-medium pt-2">고급 기법</div>
        <Link href="/authentication" className="ml-4 text-muted-foreground hover:text-foreground">인증</Link>
        <Link href="/database" className="ml-4 text-muted-foreground hover:text-foreground">데이터베이스</Link>
      </div>
    </div>
  )
}

export default Header