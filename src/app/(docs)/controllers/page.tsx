import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Route, Globe, ArrowRight } from 'lucide-react'

export default function ControllersPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '기본 개념', href: '/fundamentals' }, { title: '컨트롤러' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">컨트롤러</h1>
          <p className="text-xl text-muted-foreground mt-4">
            컨트롤러는 들어오는 <strong>요청</strong>을 처리하고 클라이언트에 <strong>응답</strong>을 반환하는 역할을 합니다.
          </p>
        </div>

        {/* 개요 이미지 카드 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex flex-col items-center space-y-2">
                <Globe className="h-8 w-8 text-blue-500" />
                <span className="text-sm">클라이언트</span>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              <div className="flex flex-col items-center space-y-2">
                <Route className="h-8 w-8 text-green-500" />
                <span className="text-sm">컨트롤러</span>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              <div className="flex flex-col items-center space-y-2">
                <Globe className="h-8 w-8 text-blue-500" />
                <span className="text-sm">클라이언트</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 기본 개념 */}
        <section>
          <h2 id="routing" className="text-2xl font-semibold mb-4">라우팅</h2>
          <p className="text-muted-foreground mb-4">
            컨트롤러의 목적은 애플리케이션에 대한 특정 요청을 받는 것입니다. <strong>라우팅</strong> 메커니즘은 어떤 컨트롤러가 
            어떤 요청을 받을지 제어합니다. 종종 각 컨트롤러에는 둘 이상의 라우트가 있고, 서로 다른 라우트는 서로 다른 작업을 수행할 수 있습니다.
          </p>
          
          <p className="text-muted-foreground mb-4">
            기본 컨트롤러를 만들기 위해 클래스와 <strong>데코레이터</strong>를 사용합니다. 데코레이터는 클래스를 필수 메타데이터와 
            연관시키고 Nest가 라우팅 맵을 생성할 수 있게 합니다 (요청을 해당 컨트롤러에 연결).
          </p>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> 내장된 유효성 검사와 함께 CRUD 컨트롤러를 빠르게 만들려면 
              CLI의 CRUD 생성기인 <code className="bg-blue-100 px-1 py-0.5 rounded">nest g resource [name]</code>을 사용할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 기본 컨트롤러 */}
        <section>
          <h2 id="basic-controller" className="text-2xl font-semibold mb-4">기본 컨트롤러</h2>
          <p className="text-muted-foreground mb-4">
            기본 컨트롤러를 정의해보겠습니다. 컨트롤러를 만들기 위해 <code className="bg-muted px-1 py-0.5 rounded">@Controller()</code> 
            데코레이터를 사용합니다. 이 데코레이터는 <strong>필수</strong>입니다. 선택적 라우트 경로 접두사 <code className="bg-muted px-1 py-0.5 rounded">cats</code>를 지정하겠습니다:
          </p>
          
          <CodeBlock language="typescript" title="cats.controller.ts">
{`import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> CLI를 사용하여 컨트롤러를 생성하려면 간단히 
              <code className="bg-green-100 px-1 py-0.5 rounded">$ nest g controller cats</code> 명령을 실행하세요.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            <code className="bg-muted px-1 py-0.5 rounded">findAll()</code> 메소드 앞의 <code className="bg-muted px-1 py-0.5 rounded">@Get()</code> 
            HTTP 요청 메소드 데코레이터는 Nest에게 HTTP 요청의 특정 엔드포인트에 대한 핸들러를 만들라고 알려줍니다. 
            엔드포인트는 HTTP 요청 메소드 (이 경우 GET)와 라우트 경로에 해당합니다.
          </p>
          
          <p className="text-muted-foreground">
            라우트 경로란 무엇인가요? 핸들러의 라우트 경로는 컨트롤러에 선언된 (선택적) 접두사와 메소드 데코레이터에 지정된 경로를 
            연결하여 결정됩니다. 모든 라우트 (<code className="bg-muted px-1 py-0.5 rounded">cats</code>)에 대해 접두사를 선언하고, 
            데코레이터에 어떤 경로 정보도 추가하지 않았으므로, Nest는 <code className="bg-muted px-1 py-0.5 rounded">GET /cats</code> 
            요청을 이 핸들러에 매핑할 것입니다.
          </p>
        </section>

        {/* 요청 객체 */}
        <section>
          <h2 id="request-object" className="text-2xl font-semibold mb-4">요청 객체</h2>
          <p className="text-muted-foreground mb-4">
            핸들러는 종종 클라이언트 <strong>요청</strong> 세부사항에 접근해야 합니다. Nest는 기본 플랫폼 
            (기본적으로 Express)의 <strong>request 객체</strong>에 대한 접근을 제공합니다. 핸들러의 시그니처에 
            <code className="bg-muted px-1 py-0.5 rounded">@Req()</code> 데코레이터를 추가하여 Nest가 이를 주입하도록 지시할 수 있습니다.
          </p>
          
          <CodeBlock language="typescript" title="요청 객체 사용">
{`import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>힌트:</strong> express 타이핑을 활용하기 위해 (위의 <code className="bg-amber-100 px-1 py-0.5 rounded">request: Request</code> 매개변수 예제처럼), 
              <code className="bg-amber-100 px-1 py-0.5 rounded">@types/express</code> 패키지를 설치하세요.
            </p>
          </div>
        </section>

        {/* 리소스 */}
        <section>
          <h2 id="resources" className="text-2xl font-semibold mb-4">리소스</h2>
          <p className="text-muted-foreground mb-4">
            이전에, cats 리소스를 가져오는 엔드포인트를 정의했습니다 (<strong>GET</strong> 라우트). 
            일반적으로 새로운 레코드를 생성하는 엔드포인트도 제공하고 싶을 것입니다. 이를 위해 <strong>POST</strong> 핸들러를 만들어보겠습니다:
          </p>
          
          <CodeBlock language="typescript" title="POST 엔드포인트 추가">
{`import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}`}
          </CodeBlock>

          <p className="text-muted-foreground">
            아주 간단합니다. Nest는 모든 표준 HTTP 메소드에 대한 데코레이터를 제공합니다: 
            <code className="bg-muted px-1 py-0.5 rounded">@Get()</code>, <code className="bg-muted px-1 py-0.5 rounded">@Post()</code>, 
            <code className="bg-muted px-1 py-0.5 rounded">@Put()</code>, <code className="bg-muted px-1 py-0.5 rounded">@Delete()</code>, 
            <code className="bg-muted px-1 py-0.5 rounded">@Patch()</code>, <code className="bg-muted px-1 py-0.5 rounded">@Options()</code>, 
            <code className="bg-muted px-1 py-0.5 rounded">@Head()</code>. 또한, <code className="bg-muted px-1 py-0.5 rounded">@All()</code>은 
            모든 메소드를 처리하는 엔드포인트를 정의합니다.
          </p>
        </section>

        {/* 라우트 와일드카드 */}
        <section>
          <h2 id="route-wildcards" className="text-2xl font-semibold mb-4">라우트 와일드카드</h2>
          <p className="text-muted-foreground mb-4">
            패턴 기반 라우트도 지원됩니다. 예를 들어, 별표는 와일드카드로 사용되며 어떤 문자 조합과도 일치합니다.
          </p>
          
          <CodeBlock language="typescript" title="와일드카드 라우트">
{`@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}`}
          </CodeBlock>

          <p className="text-muted-foreground">
            <code className="bg-muted px-1 py-0.5 rounded">'ab*cd'</code> 라우트 경로는 <code className="bg-muted px-1 py-0.5 rounded">abcd</code>, 
            <code className="bg-muted px-1 py-0.5 rounded">ab_cd</code>, <code className="bg-muted px-1 py-0.5 rounded">abecd</code> 등과 일치합니다. 
            문자 <code className="bg-muted px-1 py-0.5 rounded">?</code>, <code className="bg-muted px-1 py-0.5 rounded">+</code>, 
            <code className="bg-muted px-1 py-0.5 rounded">*</code>, <code className="bg-muted px-1 py-0.5 rounded">()</code>은 라우트 경로에 사용될 수 있으며 
            이들은 정규표현식 대응 부분의 하위 집합입니다. 하이픈 (<code className="bg-muted px-1 py-0.5 rounded">-</code>)과 
            점 (<code className="bg-muted px-1 py-0.5 rounded">.</code>)은 문자열 기반 경로에서 문자 그대로 해석됩니다.
          </p>
        </section>

        {/* 상태 코드 */}
        <section>
          <h2 id="status-code" className="text-2xl font-semibold mb-4">상태 코드</h2>
          <p className="text-muted-foreground mb-4">
            언급했듯이, 응답 <strong>상태 코드</strong>는 기본적으로 항상 <strong>200</strong>이며, 201인 POST 요청은 예외입니다. 
            핸들러 레벨에서 <code className="bg-muted px-1 py-0.5 rounded">@HttpCode(...)</code> 데코레이터를 추가하여 
            이 동작을 쉽게 변경할 수 있습니다.
          </p>
          
          <CodeBlock language="typescript" title="상태 코드 설정">
{`import { Controller, Get, Post, HttpCode } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create() {
    return 'This action adds a new cat';
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> <code className="bg-blue-100 px-1 py-0.5 rounded">HttpCode</code>를 
              <code className="bg-blue-100 px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 가져오세요.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            종종 상태 코드는 정적이지 않고 다양한 요인에 의존합니다. 이 경우, 라이브러리별 <strong>response</strong> 
            (오류 시 <code className="bg-muted px-1 py-0.5 rounded">@Res()</code> 사용) 객체를 사용할 수 있습니다 
            (또는, 오류 시 예외를 던질 수 있습니다).
          </p>
        </section>

        {/* 헤더 */}
        <section>
          <h2 id="headers" className="text-2xl font-semibold mb-4">헤더</h2>
          <p className="text-muted-foreground mb-4">
            사용자 정의 응답 헤더를 지정하려면 <code className="bg-muted px-1 py-0.5 rounded">@Header()</code> 데코레이터나 
            라이브러리별 응답 객체를 사용할 수 있습니다 (그리고 직접 <code className="bg-muted px-1 py-0.5 rounded">res.header()</code>를 호출).
          </p>
          
          <CodeBlock language="typescript" title="응답 헤더 설정">
{`import { Controller, Get, Header } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create() {
    return 'This action adds a new cat';
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> <code className="bg-blue-100 px-1 py-0.5 rounded">Header</code>를 
              <code className="bg-blue-100 px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 가져오세요.
            </p>
          </div>
        </section>

        {/* 리디렉션 */}
        <section>
          <h2 id="redirection" className="text-2xl font-semibold mb-4">리디렉션</h2>
          <p className="text-muted-foreground mb-4">
            응답을 특정 URL로 리디렉션하려면 <code className="bg-muted px-1 py-0.5 rounded">@Redirect()</code> 데코레이터나 
            라이브러리별 응답 객체를 사용할 수 있습니다 (그리고 직접 <code className="bg-muted px-1 py-0.5 rounded">res.redirect()</code>를 호출).
          </p>
          
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">@Redirect()</code>는 두 개의 인수를 받습니다: 
            <code className="bg-muted px-1 py-0.5 rounded">url</code>과 <code className="bg-muted px-1 py-0.5 rounded">statusCode</code>이며, 
            둘 다 선택사항입니다. <code className="bg-muted px-1 py-0.5 rounded">statusCode</code>의 기본값은 생략되면 <code className="bg-muted px-1 py-0.5 rounded">302</code>입니다.
          </p>
          
          <CodeBlock language="typescript" title="리디렉션">
{`import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs() {
    // 리디렉션 로직
  }
}`}
          </CodeBlock>
        </section>

        <div className="border-t pt-6">
          <p className="text-sm text-muted-foreground">
            이것은 NestJS 컨트롤러의 기본 사용법을 다룹니다. 더 고급 기능과 패턴에 대해서는 다음 섹션들을 참조하세요.
          </p>
        </div>
      </div>

      <PageNavigation
        prev={{
          title: "첫 번째 단계",
          href: "/first-steps",
          description: "첫 번째 NestJS 애플리케이션 만들기"
        }}
        next={{
          title: "프로바이더",
          href: "/providers",
          description: "의존성 주입과 서비스에 대해 알아보세요"
        }}
      />
    </div>
  )
}