import 'pretendard-lite/style.css';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Book, Code, Shield, Zap, Github, ExternalLink } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              NestJS 한국어 문서
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              확장 가능한 Node.js 
              <span className="text-red-600"> 서버 측</span> 애플리케이션
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              NestJS는 효율적이고 확장 가능한 Node.js 서버 측 애플리케이션을 구축하기 위한 프레임워크입니다. 
              TypeScript로 구축되었으며 (순수 JavaScript도 지원) Angular에서 영감을 받은 강력한 아키텍처를 제공합니다.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/introduction">
                시작하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg" asChild>
              <Link href="https://github.com/nestjs/nest" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub에서 보기
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">핵심 특징</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              NestJS가 현대적인 웹 애플리케이션 개발을 위한 최고의 선택인 이유
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Code className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>TypeScript 우선</CardTitle>
                <CardDescription>
                  TypeScript로 구축되어 강력한 타입 안전성과 최신 JavaScript 기능을 제공합니다.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>모듈형 구조</CardTitle>
                <CardDescription>
                  모듈 기반 아키텍처로 확장 가능하고 유지보수하기 쉬운 애플리케이션을 구축할 수 있습니다.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>의존성 주입</CardTitle>
                <CardDescription>
                  강력한 의존성 주입 시스템으로 테스트 가능하고 유연한 코드를 작성할 수 있습니다.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Book className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>풍부한 생태계</CardTitle>
                <CardDescription>
                  데이터베이스, GraphQL, WebSocket 등 다양한 라이브러리와 도구를 지원합니다.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">빠른 시작</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              몇 분 안에 첫 번째 NestJS 애플리케이션을 만들어보세요
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>설치 및 실행</CardTitle>
              <CardDescription>
                NestJS CLI를 사용하여 새 프로젝트를 생성하고 실행하는 방법
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-muted-foreground"># NestJS CLI 설치</div>
                  <div>$ npm i -g @nestjs/cli</div>
                  <div className="mt-2">
                    <div className="text-muted-foreground"># 새 프로젝트 생성</div>
                    <div>$ nest new project-name</div>
                  </div>
                  <div className="mt-2">
                    <div className="text-muted-foreground"># 개발 서버 실행</div>
                    <div>$ npm run start:dev</div>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/first-steps">
                    자세한 가이드 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Documentation Links */}
      <section className="container py-16 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">문서 둘러보기</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              NestJS의 모든 기능을 단계별로 학습해보세요
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-red-600 transition-colors">기본 개념</CardTitle>
                <CardDescription>
                  컨트롤러, 프로바이더, 모듈 등 NestJS의 핵심 개념을 학습하세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/controllers" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    • 컨트롤러
                  </Link>
                  <Link href="/providers" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    • 프로바이더
                  </Link>
                  <Link href="/modules" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    • 모듈
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-red-600 transition-colors">고급 기법</CardTitle>
                <CardDescription>
                  의존성 주입, 동적 모듈, 순환 의존성 등 고급 주제를 탐구하세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/fundamentals/dependency-injection" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    • 의존성 주입
                  </Link>
                  <Link href="/fundamentals/dynamic-modules" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    • 동적 모듈
                  </Link>
                  <Link href="/fundamentals/circular-dependency" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    • 순환 의존성
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-red-600 transition-colors">보안</CardTitle>
                <CardDescription>
                  인증, 권한 부여, 보안 모범 사례를 적용하는 방법을 배우세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/security/authentication" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    • 인증
                  </Link>
                  <Link href="/security/authorization" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    • 권한 부여
                  </Link>
                  <Link href="/security/encryption-hashing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    • 암호화 및 해싱
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">커뮤니티와 함께하기</h2>
          <p className="text-muted-foreground text-lg mb-8">
            NestJS 한국 커뮤니티에 참여하여 다른 개발자들과 지식을 공유하세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="https://github.com/nestjs/nest/discussions" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub Discussions
                <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://discord.gg/nestjs" target="_blank" rel="noopener noreferrer">
                Discord 참여하기
                <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
