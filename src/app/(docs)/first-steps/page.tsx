import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText } from 'lucide-react'

export default function FirstStepsPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '소개', href: '/introduction' }, { title: '첫 번째 단계' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">첫 번째 단계</h1>
          <p className="text-xl text-muted-foreground mt-4">
            이 글에서는 NestJS의 핵심 기본 사항을 배우게 됩니다. NestJS 애플리케이션의 필수 구성 요소에 익숙해지기 위해 
            입문 수준에서 많은 부분을 다루는 기본 CRUD 애플리케이션을 구축하겠습니다.
          </p>
        </div>

        {/* 언어 선택 */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-sm font-medium">언어:</span>
          <Badge variant="default">TypeScript</Badge>
          <Badge variant="outline">JavaScript</Badge>
        </div>

        {/* 프로젝트 설정 */}
        <section>
          <h2 id="setup" className="text-2xl font-semibold mb-4">설정</h2>
          <p className="text-muted-foreground mb-4">
            Nest CLI를 사용하여 새 프로젝트를 설정하면 TypeScript와 Nest의 모든 상용구 코드가 포함된 
            새 프로젝트 디렉토리가 생성됩니다:
          </p>
          
          <CodeBlock language="bash" title="프로젝트 생성">
{`$ npm i -g @nestjs/cli
$ nest new project-name`}
          </CodeBlock>
          
          <p className="text-muted-foreground mb-4 mt-4">
            <code className="bg-muted px-1 py-0.5 rounded">project-name</code> 디렉토리가 생성되고, 
            노드 모듈과 다른 몇 개의 상용구 파일들이 설치되며, <code className="bg-muted px-1 py-0.5 rounded">src/</code> 디렉토리가 생성되어 몇 개의 핵심 파일로 채워집니다.
          </p>
          
          <CodeBlock language="bash" title="프로젝트 구조">
{`src
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts`}
          </CodeBlock>
          
          <p className="text-muted-foreground mt-4">핵심 파일에 대한 간단한 개요입니다:</p>
          
          <div className="grid gap-4 mt-4">
            <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
              <FileText className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <code className="text-sm font-mono">app.controller.ts</code>
                <p className="text-sm text-muted-foreground mt-1">단일 라우트가 있는 기본 컨트롤러</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
              <FileText className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <code className="text-sm font-mono">app.controller.spec.ts</code>
                <p className="text-sm text-muted-foreground mt-1">컨트롤러에 대한 단위 테스트</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
              <FileText className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <code className="text-sm font-mono">app.module.ts</code>
                <p className="text-sm text-muted-foreground mt-1">애플리케이션의 루트 모듈</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
              <FileText className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <code className="text-sm font-mono">app.service.ts</code>
                <p className="text-sm text-muted-foreground mt-1">단일 메소드가 있는 기본 서비스</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
              <FileText className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <code className="text-sm font-mono">main.ts</code>
                <p className="text-sm text-muted-foreground mt-1">핵심 함수 NestFactory를 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션 진입점</p>
              </div>
            </div>
          </div>
        </section>

        {/* main.ts 파일 */}
        <section>
          <h2 id="main-ts" className="text-2xl font-semibold mb-4">main.ts</h2>
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">main.ts</code> 파일에는 애플리케이션을 부트스트랩하는 비동기 함수가 포함되어 있습니다:
          </p>
          
          <CodeBlock language="typescript" title="main.ts">
{`import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();`}
          </CodeBlock>
          
          <p className="text-muted-foreground mt-4">
            Nest 애플리케이션 인스턴스를 만들기 위해 핵심 <code className="bg-muted px-1 py-0.5 rounded">NestFactory</code> 클래스를 사용합니다. 
            <code className="bg-muted px-1 py-0.5 rounded">NestFactory</code>는 애플리케이션 인스턴스를 생성할 수 있게 해주는 몇 가지 정적 메소드를 노출합니다. 
            <code className="bg-muted px-1 py-0.5 rounded">create()</code> 메소드는 
            <code className="bg-muted px-1 py-0.5 rounded">INestApplication</code> 인터페이스를 충족하는 애플리케이션 객체를 반환합니다.
          </p>
        </section>

        {/* 플랫폼 */}
        <section>
          <h2 id="platform" className="text-2xl font-semibold mb-4">플랫폼</h2>
          <p className="text-muted-foreground mb-4">
            Nest는 플랫폼에 구애받지 않는 프레임워크를 지향합니다. 플랫폼 독립성을 통해 개발자가 여러 종류의 애플리케이션에서 
            활용할 수 있는 재사용 가능한 논리적 부분을 만들 수 있습니다. 기술적으로 Nest는 어댑터가 생성되기만 하면 
            모든 Node HTTP 프레임워크와 함께 작동할 수 있습니다.
          </p>
          
          <p className="text-muted-foreground mb-4">
            기본적으로 지원되는 두 가지 HTTP 플랫폼이 있습니다:
          </p>
          
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Express (기본값)</CardTitle>
                <CardDescription>
                  node.js를 위한 빠르고, 제약이 없으며, 최소한의 웹 프레임워크
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fastify</CardTitle>
                <CardDescription>
                  높은 성능과 낮은 오버헤드 웹 프레임워크, 뛰어난 로깅 기능 제공
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* 애플리케이션 실행 */}
        <section>
          <h2 id="running" className="text-2xl font-semibold mb-4">애플리케이션 실행</h2>
          <p className="text-muted-foreground mb-4">
            설치 과정이 완료되면 OS 명령 프롬프트에서 다음 명령을 실행하여 HTTP 서버를 시작할 수 있습니다:
          </p>
          
          <CodeBlock language="bash" title="애플리케이션 시작">
{`$ npm run start`}
          </CodeBlock>
          
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">
              <strong>힌트:</strong> 개발 과정을 더 빠르게 하려면 (빌드 시간이 20배 빠름), 
              <code className="bg-blue-100 px-1 py-0.5 rounded">start</code> 스크립트에 <code className="bg-blue-100 px-1 py-0.5 rounded">-b swc</code> 플래그를 추가해 
              SWC 빌더를 사용할 수 있습니다.
            </p>
            <p className="text-sm text-blue-800">
              예: <code className="bg-blue-100 px-1 py-0.5 rounded">npm run start -- -b swc</code>
            </p>
          </div>
          
          <p className="text-muted-foreground mt-4">
            이 명령은 <code className="bg-muted px-1 py-0.5 rounded">src/main.ts</code> 파일에 정의된 포트에서 HTTP 서버를 시작합니다. 
            애플리케이션이 실행 중인 상태에서 브라우저를 열고 <code className="bg-muted px-1 py-0.5 rounded">http://localhost:3000/</code>으로 이동하면 
            &quot;Hello World!&quot; 메시지를 볼 수 있습니다.
          </p>
          
          <p className="text-muted-foreground">
            파일 변경 사항을 감시하려면 다음 명령을 사용할 수 있습니다:
          </p>
          
          <CodeBlock language="bash" title="개발 모드로 실행">
{`$ npm run start:dev`}
          </CodeBlock>
          
          <p className="text-muted-foreground mt-2">
            이 명령은 파일을 감시하여 자동으로 서버를 재컴파일하고 다시 로드합니다.
          </p>
        </section>

        {/* 린팅과 포맷팅 */}
        <section>
          <h2 id="linting" className="text-2xl font-semibold mb-4">린팅과 포맷팅</h2>
          <p className="text-muted-foreground mb-4">
            CLI는 규모가 있는 신뢰할 수 있는 개발 워크플로를 구축하기 위한 최선의 노력을 제공합니다. 
            따라서 생성된 Nest 프로젝트에는 코드 린터와 포맷터가 미리 설치되어 있습니다 
            (각각 eslint와 prettier).
          </p>
          
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>힌트:</strong> 포맷터와 린터의 역할에 대해 잘 모르겠다면, 
              여기서 차이점을 알아보세요.
            </p>
          </div>
          
          <p className="text-muted-foreground mt-4">
            안정성과 확장성을 최대한 보장하기 위해 CLI가 설치한 base 
            <code className="bg-muted px-1 py-0.5 rounded">eslint</code>와 <code className="bg-muted px-1 py-0.5 rounded">prettier</code> cli 패키지를 사용하는 것이 좋습니다. 
            이 설정을 통해 깔끔한 IDE 통합도 가능합니다.
          </p>
          
          <p className="text-muted-foreground">
            IDE가 중요하지 않은 헤드리스 환경(연속 통합, Git 훅 등)의 경우 Nest 프로젝트에는 즉시 사용 가능한 
            <code className="bg-muted px-1 py-0.5 rounded">npm</code> 스크립트가 함께 제공됩니다.
          </p>
          
          <CodeBlock language="bash" title="린팅과 포맷팅 명령어">
{`# Lint and autofix with eslint
$ npm run lint

# Format with prettier
$ npm run format`}
          </CodeBlock>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "시작하기",
          href: "/introduction",
          description: "NestJS 소개 및 설치 방법"
        }}
        next={{
          title: "컨트롤러",
          href: "/controllers",
          description: "HTTP 요청을 처리하는 컨트롤러에 대해 알아보세요"
        }}
      />
    </div>
  )
}