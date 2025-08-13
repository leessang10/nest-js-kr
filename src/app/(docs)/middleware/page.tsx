import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Layers, ArrowRight, Settings } from 'lucide-react'

export default function MiddlewarePage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '기본 개념', href: '/fundamentals' }, { title: '미들웨어' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">미들웨어</h1>
          <p className="text-xl text-muted-foreground mt-4">
            미들웨어는 라우트 핸들러 <strong>이전에</strong> 호출되는 함수입니다. 미들웨어 함수는 
            애플리케이션의 요청-응답 사이클에서 <code className="bg-muted px-1 py-0.5 rounded">request</code>와 
            <code className="bg-muted px-1 py-0.5 rounded">response</code> 객체, 그리고 
            <code className="bg-muted px-1 py-0.5 rounded">next()</code> 미들웨어 함수에 접근할 수 있습니다.
          </p>
        </div>

        {/* 미들웨어 플로우 시각화 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-sm font-medium text-blue-700">요청</span>
                </div>
                <span className="text-xs text-muted-foreground">Request</span>
              </div>
              
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <Layers className="h-6 w-6 text-green-700" />
                </div>
                <span className="text-xs text-muted-foreground">미들웨어</span>
              </div>
              
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <Settings className="h-6 w-6 text-purple-700" />
                </div>
                <span className="text-xs text-muted-foreground">라우트 핸들러</span>
              </div>
              
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-sm font-medium text-orange-700">응답</span>
                </div>
                <span className="text-xs text-muted-foreground">Response</span>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              미들웨어는 요청과 라우트 핸들러 사이에서 실행됩니다
            </p>
          </CardContent>
        </Card>

        {/* 개요 */}
        <section>
          <p className="text-muted-foreground mb-4">
            <strong>next</strong> 미들웨어 함수는 일반적으로 <code className="bg-muted px-1 py-0.5 rounded">next</code>라는 
            변수로 표시됩니다. Nest 미들웨어는 기본적으로 <strong>Express</strong> 미들웨어와 동일합니다. 
            다음은 공식 Express 문서에서 가져온 미들웨어 기능에 대한 설명입니다:
          </p>

          <div className="bg-muted p-4 rounded-lg mb-4">
            <p className="text-sm font-mono italic">
              미들웨어 함수는 다음 작업을 수행할 수 있습니다:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
              <li>코드를 실행</li>
              <li>요청 및 응답 객체를 변경</li>
              <li>요청-응답 사이클을 종료</li>
              <li>스택의 다음 미들웨어 함수를 호출</li>
            </ul>
          </div>

          <p className="text-muted-foreground">
            현재 미들웨어 함수가 요청-응답 사이클을 종료하지 않으면, 제어를 다음 미들웨어 함수에 전달하기 위해 
            <code className="bg-muted px-1 py-0.5 rounded">next()</code>를 호출해야 합니다. 그렇지 않으면 요청이 중단됩니다.
          </p>
        </section>

        {/* 사용자 정의 미들웨어 */}
        <section>
          <h2 id="custom-middleware" className="text-2xl font-semibold mb-4">사용자 정의 미들웨어</h2>
          <p className="text-muted-foreground mb-4">
            함수나 <code className="bg-muted px-1 py-0.5 rounded">@Injectable()</code> 데코레이터가 있는 클래스에서 
            사용자 정의 Nest 미들웨어를 구현합니다. 클래스는 <code className="bg-muted px-1 py-0.5 rounded">NestMiddleware</code> 
            인터페이스를 구현해야 하며, 함수에는 특별한 요구사항이 없습니다. 클래스 메소드를 사용하여 간단한 미들웨어 기능을 
            구현하는 것부터 시작하겠습니다.
          </p>

          <CodeBlock language="typescript" title="logger.middleware.ts">
{`import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}`}
          </CodeBlock>
        </section>

        {/* 의존성 주입 */}
        <section>
          <h2 id="dependency-injection" className="text-2xl font-semibold mb-4">의존성 주입</h2>
          <p className="text-muted-foreground mb-4">
            Nest 미들웨어는 의존성 주입을 완전히 지원합니다. 프로바이더 및 컨트롤러와 마찬가지로 
            동일한 모듈 내에서 사용 가능한 <strong>의존성을 주입</strong>할 수 있습니다. 평소와 같이 
            <code className="bg-muted px-1 py-0.5 rounded">constructor</code>를 통해 수행됩니다.
          </p>
        </section>

        {/* 미들웨어 적용 */}
        <section>
          <h2 id="applying-middleware" className="text-2xl font-semibold mb-4">미들웨어 적용</h2>
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">@Module()</code> 데코레이터에는 미들웨어를 위한 공간이 없습니다. 
            대신, 모듈 클래스의 <code className="bg-muted px-1 py-0.5 rounded">configure()</code> 메소드를 사용하여 설정합니다. 
            미들웨어가 포함된 모듈은 <code className="bg-muted px-1 py-0.5 rounded">NestModule</code> 인터페이스를 
            구현해야 합니다. <code className="bg-muted px-1 py-0.5 rounded">AppModule</code> 수준에서 
            <code className="bg-muted px-1 py-0.5 rounded">LoggerMiddleware</code>를 설정해보겠습니다.
          </p>

          <CodeBlock language="typescript" title="app.module.ts">
{`import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            위 예제에서는 이전에 <code className="bg-muted px-1 py-0.5 rounded">CatsController</code> 내에서 
            정의된 <code className="bg-muted px-1 py-0.5 rounded">/cats</code> 라우트 핸들러에 대해 
            <code className="bg-muted px-1 py-0.5 rounded">LoggerMiddleware</code>를 설정했습니다. 
            미들웨어를 구성할 때 특정 요청 메소드에 제한하려면 라우트 경로와 요청 메소드가 포함된 객체를 
            <code className="bg-muted px-1 py-0.5 rounded">forRoutes()</code> 메소드에 전달할 수도 있습니다:
          </p>

          <CodeBlock language="typescript" title="특정 HTTP 메소드에 미들웨어 적용">
{`import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> <code className="bg-blue-100 px-1 py-0.5 rounded">configure()</code> 메소드는 
              <code className="bg-blue-100 px-1 py-0.5 rounded">async/await</code>를 사용하여 비동기로 만들 수 있습니다 
              (예: <code className="bg-blue-100 px-1 py-0.5 rounded">configure()</code> 메소드 본문 내에서 
              비동기 작업의 완료를 <code className="bg-blue-100 px-1 py-0.5 rounded">await</code>할 수 있음).
            </p>
          </div>
        </section>

        {/* 라우트 와일드카드 */}
        <section>
          <h2 id="route-wildcards" className="text-2xl font-semibold mb-4">라우트 와일드카드</h2>
          <p className="text-muted-foreground mb-4">
            패턴 기반 라우트도 지원됩니다. 예를 들어, 별표는 와일드카드로 사용되며 문자의 모든 조합과 일치합니다:
          </p>

          <CodeBlock language="typescript" title="와일드카드 사용">
{`forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });`}
          </CodeBlock>

          <p className="text-muted-foreground">
            <code className="bg-muted px-1 py-0.5 rounded">&apos;ab*cd&apos;</code> 라우트 경로는 
            <code className="bg-muted px-1 py-0.5 rounded">abcd</code>, <code className="bg-muted px-1 py-0.5 rounded">ab_cd</code>, 
            <code className="bg-muted px-1 py-0.5 rounded">abecd</code> 등과 일치합니다. 문자 
            <code className="bg-muted px-1 py-0.5 rounded">?</code>, <code className="bg-muted px-1 py-0.5 rounded">+</code>, 
            <code className="bg-muted px-1 py-0.5 rounded">*</code>, <code className="bg-muted px-1 py-0.5 rounded">()</code>은 
            라우트 경로에서 사용될 수 있으며 이들은 정규표현식 대응 부분의 하위 집합입니다. 하이픈 
            (<code className="bg-muted px-1 py-0.5 rounded">-</code>)과 점 
            (<code className="bg-muted px-1 py-0.5 rounded">.</code>)은 문자열 기반 경로에서 문자 그대로 해석됩니다.
          </p>
        </section>

        {/* 미들웨어 소비자 */}
        <section>
          <h2 id="middleware-consumer" className="text-2xl font-semibold mb-4">미들웨어 소비자</h2>
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">MiddlewareConsumer</code>는 헬퍼 클래스입니다. 
            미들웨어를 관리하기 위한 몇 가지 내장 메소드를 제공합니다. 모든 메소드는 
            <strong>체이닝</strong> 방식으로 간단히 연결할 수 있습니다. <code className="bg-muted px-1 py-0.5 rounded">forRoutes()</code> 
            메소드는 단일 문자열, 여러 문자열, <code className="bg-muted px-1 py-0.5 rounded">RouteInfo</code> 객체, 
            컨트롤러 클래스 또는 여러 컨트롤러 클래스를 취할 수 있습니다. 대부분의 경우 쉼표로 구분된 
            <strong>컨트롤러</strong> 목록을 전달할 것입니다. 다음은 단일 컨트롤러를 사용한 예입니다:
          </p>

          <CodeBlock language="typescript" title="컨트롤러에 미들웨어 적용">
{`import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController);
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> <code className="bg-green-100 px-1 py-0.5 rounded">apply()</code> 메소드는 
              단일 미들웨어를 사용하거나 여러 미들웨어를 지정하기 위해 
              <strong>여러 인수</strong>를 사용할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 라우트 제외 */}
        <section>
          <h2 id="excluding-routes" className="text-2xl font-semibold mb-4">라우트 제외</h2>
          <p className="text-muted-foreground mb-4">
            때때로 특정 라우트를 미들웨어 적용에서 <strong>제외</strong>하고 싶을 수 있습니다. 
            <code className="bg-muted px-1 py-0.5 rounded">exclude()</code> 메소드로 특정 라우트를 쉽게 제외할 수 있습니다. 
            이 메소드는 아래와 같이 제외할 라우트를 식별하는 단일 문자열, 여러 문자열 또는 
            <code className="bg-muted px-1 py-0.5 rounded">RouteInfo</code> 객체를 사용할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="특정 라우트 제외">
{`consumer
  .apply(LoggerMiddleware)
  .exclude(
    { path: 'cats', method: RequestMethod.GET },
    { path: 'cats', method: RequestMethod.POST },
    'cats/(.*)',
  )
  .forRoutes(CatsController);`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> <code className="bg-blue-100 px-1 py-0.5 rounded">exclude()</code> 메소드는 
              <strong>path-to-regexp</strong> 패키지를 사용하여 와일드카드 매개변수를 지원합니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            위 예제에서 <code className="bg-muted px-1 py-0.5 rounded">LoggerMiddleware</code>는 
            <code className="bg-muted px-1 py-0.5 rounded">exclude()</code> 메소드에 전달된 세 라우트를 제외한 
            <code className="bg-muted px-1 py-0.5 rounded">CatsController</code> 내에서 정의된 모든 라우트에 바인딩됩니다.
          </p>
        </section>

        {/* 함수형 미들웨어 */}
        <section>
          <h2 id="functional-middleware" className="text-2xl font-semibend mb-4">함수형 미들웨어</h2>
          <p className="text-muted-foreground mb-4">
            우리가 사용한 <code className="bg-muted px-1 py-0.5 rounded">LoggerMiddleware</code> 클래스는 매우 간단합니다. 
            멤버, 추가 메소드 또는 의존성이 없습니다. 클래스 대신 간단한 함수로 정의할 수 없을까요? 실제로 가능합니다. 
            이러한 유형의 미들웨어를 <strong>함수형 미들웨어</strong>라고 합니다. logger 미들웨어를 클래스 기반에서 
            함수형 미들웨어로 변환하여 차이점을 보여드리겠습니다:
          </p>

          <CodeBlock language="typescript" title="logger.middleware.ts">
{`import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(\`Request...\`);
  next();
};`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">그리고 <code className="bg-muted px-1 py-0.5 rounded">AppModule</code>에서 사용합니다:</p>

          <CodeBlock language="typescript" title="app.module.ts">
{`consumer
  .apply(logger)
  .forRoutes(CatsController);`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> 미들웨어에 의존성이 필요하지 않을 때마다 더 간단한 
              <strong>함수형 미들웨어</strong> 대안을 사용하는 것을 고려해보세요.
            </p>
          </div>
        </section>

        {/* 다중 미들웨어 */}
        <section>
          <h2 id="multiple-middleware" className="text-2xl font-semibold mb-4">다중 미들웨어</h2>
          <p className="text-muted-foreground mb-4">
            앞서 언급했듯이, 순차적으로 실행되는 여러 미들웨어를 바인딩하려면 
            <code className="bg-muted px-1 py-0.5 rounded">apply()</code> 메소드 내에서 쉼표로 구분된 목록을 제공하기만 하면 됩니다:
          </p>

          <CodeBlock language="typescript" title="다중 미들웨어 적용">
{`consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);`}
          </CodeBlock>
        </section>

        {/* 글로벌 미들웨어 */}
        <section>
          <h2 id="global-middleware" className="text-2xl font-semibold mb-4">글로벌 미들웨어</h2>
          <p className="text-muted-foreground mb-4">
            등록된 모든 라우트에 한 번에 미들웨어를 바인딩하려면, 
            <code className="bg-muted px-1 py-0.5 rounded">INestApplication</code> 인스턴스에서 제공하는 
            <code className="bg-muted px-1 py-0.5 rounded">use()</code> 메소드를 사용할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="main.ts">
{`const app = await NestFactory.create(AppModule);
app.use(logger);
await app.listen(3000);`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>참고:</strong> 글로벌 미들웨어에서 DI 컨테이너에 접근하는 것은 불가능합니다. 
              <code className="bg-amber-100 px-1 py-0.5 rounded">app.use()</code>를 사용할 때는 
              <strong>함수형 미들웨어</strong>를 대신 사용할 수 있습니다. 또는, 클래스 미들웨어를 사용하고 
              <code className="bg-amber-100 px-1 py-0.5 rounded">AppModule</code> (또는 다른 모듈) 내에서 
              <code className="bg-amber-100 px-1 py-0.5 rounded">.forRoutes(&apos;*&apos;)</code>로 사용할 수 있습니다.
            </p>
          </div>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "모듈",
          href: "/modules",
          description: "애플리케이션 구조와 모듈 시스템"
        }}
        next={{
          title: "예외 필터",
          href: "/exception-filters",
          description: "예외 처리 및 필터링"
        }}
      />
    </div>
  )
}