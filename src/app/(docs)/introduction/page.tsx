import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Zap, Shield, Code } from 'lucide-react'

export default function IntroductionPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '소개', href: '/introduction' }, { title: '시작하기' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">NestJS 소개</h1>
          <p className="text-xl text-muted-foreground mt-4">
            효율적이고 확장 가능한 Node.js 서버 측 애플리케이션을 구축하기 위한 프레임워크
          </p>
        </div>

        {/* 핵심 특징 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>TypeScript 우선</span>
              </CardTitle>
              <CardDescription>
                TypeScript로 구축되었으며 강력한 타입 안전성을 제공합니다.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>모듈형 구조</span>
              </CardTitle>
              <CardDescription>
                모듈 기반 아키텍처로 확장 가능한 애플리케이션을 구축할 수 있습니다.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>의존성 주입</span>
              </CardTitle>
              <CardDescription>
                강력한 의존성 주입 컨테이너로 테스트 가능한 코드를 작성할 수 있습니다.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>데코레이터</span>
              </CardTitle>
              <CardDescription>
                Angular에서 영감을 받은 데코레이터를 사용한 선언적 프로그래밍을 지원합니다.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* 철학 */}
        <section>
          <h2 id="philosophy" className="text-2xl font-semibold mb-4">철학</h2>
          <p className="text-muted-foreground mb-4">
            최근 몇 년간 Node.js 덕분에 JavaScript는 프론트엔드와 백엔드 애플리케이션 모두에서 웹의 &quot;공용어&quot;가 되었습니다.
            이로 인해 Angular, React, Vue와 같은 훌륭한 프로젝트들이 등장하여 개발자 생산성을 향상시키고 빠르고 테스트 가능하며 
            확장 가능한 프론트엔드 애플리케이션을 만들 수 있게 되었습니다.
          </p>
          <p className="text-muted-foreground mb-4">
            하지만 Node.js를 위한 수많은 훌륭한 라이브러리, 헬퍼, 도구들이 존재하지만, 이들 중 어느 것도 주요 문제인 
            <strong>&quot;아키텍처&quot;</strong>를 효과적으로 해결하지 못합니다.
          </p>
          <p className="text-muted-foreground">
            NestJS는 개발자와 팀이 고도로 테스트 가능하고, 확장 가능하며, 느슨하게 결합되고, 
            유지보수가 쉬운 애플리케이션을 만들 수 있는 즉시 사용 가능한 애플리케이션 아키텍처를 제공합니다.
          </p>
        </section>

        {/* 설치 */}
        <section>
          <h2 id="installation" className="text-2xl font-semibold mb-4">설치</h2>
          <p className="text-muted-foreground mb-4">
            새로운 프로젝트를 설정하려면 NestJS CLI를 사용하는 것이 매우 간단합니다. 
            npm이 설치되어 있다면, OS 터미널에서 다음 명령어로 새로운 NestJS 프로젝트를 만들 수 있습니다:
          </p>
          
          <CodeBlock language="bash" title="NestJS CLI 설치">
{`$ npm i -g @nestjs/cli
$ nest new project-name`}
          </CodeBlock>
          
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> TypeScript의 더 엄격한 기능 세트로 새 프로젝트를 만들려면 
              <code className="bg-blue-100 px-1 py-0.5 rounded">nest new</code> 명령에 <code className="bg-blue-100 px-1 py-0.5 rounded">--strict</code> 플래그를 전달하세요.
            </p>
          </div>
        </section>

        {/* 대안 */}
        <section>
          <h2 id="alternatives" className="text-2xl font-semibold mb-4">대안</h2>
          <p className="text-muted-foreground mb-4">
            또는 Git을 사용해 TypeScript 시작 프로젝트를 설치할 수 있습니다:
          </p>
          
          <CodeBlock language="bash" title="Git을 사용한 설치">
{`$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start`}
          </CodeBlock>
          
          <p className="text-muted-foreground mb-4 mt-4">
            브라우저를 열고 <code className="bg-muted px-1 py-0.5 rounded">http://localhost:3000/</code>로 이동하세요.
          </p>
          
          <p className="text-muted-foreground">
            JavaScript 버전의 시작 프로젝트를 로드하려면 위 명령 시퀀스에서 
            <code className="bg-muted px-1 py-0.5 rounded">javascript-starter.git</code>을 사용하세요.
          </p>
        </section>

        {/* 수동 설치 */}
        <section>
          <h2 id="manual-installation" className="text-2xl font-semibold mb-4">수동 설치</h2>
          <p className="text-muted-foreground mb-4">
            핵심 패키지와 지원 파일들을 수동으로 설치해 프로젝트를 처음부터 만들 수도 있습니다. 
            물론 이 경우 프로젝트 상용구 파일들을 직접 만들어야 합니다.
          </p>
          
          <CodeBlock language="bash" title="수동 설치">
{`$ npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata`}
          </CodeBlock>
        </section>
      </div>

      <PageNavigation
        next={{
          title: "첫 번째 단계",
          href: "/first-steps",
          description: "첫 번째 NestJS 애플리케이션을 만들어보세요"
        }}
      />
    </div>
  )
}