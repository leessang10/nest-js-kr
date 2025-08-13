import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Filter, Shield, Bug } from 'lucide-react'

export default function ExceptionFiltersPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '기본 개념', href: '/fundamentals' }, { title: '예외 필터' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">예외 필터</h1>
          <p className="text-xl text-muted-foreground mt-4">
            Nest는 애플리케이션 전반에서 처리되지 않은 모든 예외를 처리하는 내장 <strong>예외 레이어</strong>가 함께 제공됩니다. 
            애플리케이션 코드에서 예외가 처리되지 않으면, 이 레이어에 의해 포착되어 적절한 사용자 친화적인 응답을 자동으로 보냅니다.
          </p>
        </div>

        {/* 예외 처리 플로우 시각화 */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Filter className="h-12 w-12 mx-auto text-red-500 mb-2" />
              <h3 className="text-lg font-semibold">글로벌 예외 필터</h3>
              <p className="text-sm text-muted-foreground">모든 처리되지 않은 예외를 포착하고 처리</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <Bug className="h-6 w-6 mx-auto mb-2 text-red-500" />
                <div className="text-sm font-medium">예외 발생</div>
                <div className="text-xs text-muted-foreground">처리되지 않은 예외</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Filter className="h-6 w-6 mx-auto mb-2 text-orange-500" />
                <div className="text-sm font-medium">필터 처리</div>
                <div className="text-xs text-muted-foreground">예외 필터가 포착</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Shield className="h-6 w-6 mx-auto mb-2 text-green-500" />
                <div className="text-sm font-medium">응답 생성</div>
                <div className="text-xs text-muted-foreground">사용자 친화적 응답</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 기본 예외 처리 */}
        <section>
          <h2 id="throwing-standard-exceptions" className="text-2xl font-semibold mb-4">표준 예외 던지기</h2>
          <p className="text-muted-foreground mb-4">
            기본적으로 이 작업은 내장 <strong>글로벌 예외 필터</strong>에 의해 수행되며, 
            <code className="bg-muted px-1 py-0.5 rounded">HttpException</code> 타입 (및 하위 클래스)의 예외를 처리합니다. 
            예외가 인식되지 않으면 (예: <code className="bg-muted px-1 py-0.5 rounded">HttpException</code>이 아니거나 
            이를 상속하는 클래스가 아닌 경우) 내장 예외 필터는 다음과 같은 기본 JSON 응답을 생성합니다:
          </p>

          <CodeBlock language="json" title="기본 500 에러 응답">
{`{
  "statusCode": 500,
  "message": "Internal server error"
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> 글로벌 예외 필터는 부분적으로 <code className="bg-blue-100 px-1 py-0.5 rounded">http-errors</code> 
              라이브러리를 지원합니다. 기본적으로 <code className="bg-blue-100 px-1 py-0.5 rounded">statusCode</code>와 
              <code className="bg-blue-100 px-1 py-0.5 rounded">message</code> 속성을 포함하는 모든 던진 예외는 
              적절히 채워져 응답으로 전송됩니다 (인식되지 않은 예외의 기본 
              <code className="bg-blue-100 px-1 py-0.5 rounded">InternalServerErrorException</code> 대신).
            </p>
          </div>
        </section>

        {/* HttpException 클래스 */}
        <section>
          <h2 id="http-exception" className="text-2xl font-semibold mb-4">HttpException 클래스</h2>
          <p className="text-muted-foreground mb-4">
            Nest는 <code className="bg-muted px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 노출되는 내장 
            <code className="bg-muted px-1 py-0.5 rounded">HttpException</code> 클래스를 제공합니다. 일반적인 HTTP REST/GraphQL API 기반 애플리케이션의 경우, 
            특정 오류 조건이 발생할 때 표준 HTTP 응답 객체를 보내는 것이 모범 사례입니다.
          </p>

          <p className="text-muted-foreground mb-4">
            예를 들어, <code className="bg-muted px-1 py-0.5 rounded">CatsController</code>에서 
            <code className="bg-muted px-1 py-0.5 rounded">findAll()</code> 메소드 (GET 라우트 핸들러)가 있다고 하겠습니다. 
            이 라우트 핸들러가 어떤 이유로든 예외를 던진다고 가정해보겠습니다. 이를 보여드리기 위해 다음과 같이 하드코딩하겠습니다:
          </p>

          <CodeBlock language="typescript" title="cats.controller.ts">
{`@Get()
async findAll() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> 여기서 <code className="bg-blue-100 px-1 py-0.5 rounded">HttpStatus</code>를 사용했습니다. 
              이는 <code className="bg-blue-100 px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 가져온 헬퍼 열거형입니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">클라이언트가 이 엔드포인트를 호출하면 응답은 다음과 같습니다:</p>

          <CodeBlock language="json" title="HTTP 403 응답">
{`{
  "statusCode": 403,
  "message": "Forbidden"
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            <code className="bg-muted px-1 py-0.5 rounded">HttpException</code> 생성자는 응답을 결정하는 두 개의 필수 인수를 받습니다:
          </p>

          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">response</code> 인수는 JSON 응답 본문을 정의합니다. 
              아래에서 설명하는 대로 <code className="bg-muted px-1 py-0.5 rounded">string</code> 또는 
              <code className="bg-muted px-1 py-0.5 rounded">object</code>일 수 있습니다.
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">status</code> 인수는 
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" className="text-primary hover:underline">HTTP 상태 코드</a>를 정의합니다.
            </li>
          </ul>

          <p className="text-muted-foreground">
            기본적으로 JSON 응답 본문에는 두 개의 속성이 포함됩니다:
          </p>

          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">statusCode</code>: 
              <code className="bg-muted px-1 py-0.5 rounded">status</code> 인수에서 제공된 HTTP 상태 코드가 기본값
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">message</code>: 
              <code className="bg-muted px-1 py-0.5 rounded">status</code>를 기반으로 한 HTTP 에러에 대한 간단한 설명
            </li>
          </ul>
        </section>

        {/* 응답 본문 재정의 */}
        <section>
          <h2 id="overriding-response-body" className="text-2xl font-semibold mb-4">응답 본문 재정의</h2>
          <p className="text-muted-foreground mb-4">
            JSON 응답 본문의 메시지 부분만 재정의하려면, 
            <code className="bg-muted px-1 py-0.5 rounded">response</code> 인수에 문자열을 제공합니다. 
            전체 JSON 응답 본문을 재정의하려면, <code className="bg-muted px-1 py-0.5 rounded">response</code> 
            인수에 객체를 전달합니다. Nest는 객체를 직렬화하여 JSON 응답 본문으로 반환합니다.
          </p>

          <CodeBlock language="typescript" title="사용자 정의 응답 본문">
{`@Get()
async findAll() {
  throw new HttpException({
    status: HttpStatus.FORBIDDEN,
    error: 'This is a custom message',
  }, HttpStatus.FORBIDDEN);
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">위의 코드를 사용하면 응답은 다음과 같습니다:</p>

          <CodeBlock language="json" title="사용자 정의 응답 예시">
{`{
  "status": 403,
  "error": "This is a custom message"
}`}
          </CodeBlock>
        </section>

        {/* 내장 HTTP 예외 */}
        <section>
          <h2 id="built-in-http-exceptions" className="text-2xl font-semibold mb-4">내장 HTTP 예외</h2>
          <p className="text-muted-foreground mb-4">
            Nest는 기본 <code className="bg-muted px-1 py-0.5 rounded">HttpException</code>에서 상속하는 
            표준 예외 집합을 제공합니다. 이들은 <code className="bg-muted px-1 py-0.5 rounded">@nestjs/common</code> 
            패키지에서 노출되며, 가장 일반적인 HTTP 예외 중 많은 것을 나타냅니다:
          </p>

          <div className="grid gap-3 mb-4">
            {[
              'BadRequestException',
              'UnauthorizedException',
              'NotFoundException',
              'ForbiddenException',
              'NotAcceptableException',
              'RequestTimeoutException',
              'ConflictException',
              'GoneException',
              'HttpVersionNotSupportedException',
              'PayloadTooLargeException',
              'UnsupportedMediaTypeException',
              'UnprocessableEntityException',
              'InternalServerErrorException',
              'NotImplementedException',
              'ImATeapotException',
              'MethodNotAllowedException',
              'BadGatewayException',
              'ServiceUnavailableException',
              'GatewayTimeoutException',
              'PreconditionFailedException'
            ].map(exception => (
              <div key={exception} className="px-3 py-2 bg-muted rounded-lg">
                <code className="text-sm font-mono">{exception}</code>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground">
            모든 내장 예외는 <code className="bg-muted px-1 py-0.5 rounded">options</code> 매개변수를 사용하여 
            오류 원인과 오류 설명을 모두 제공할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="내장 예외 사용">
{`throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">위의 코드를 사용하면 응답은 다음과 같습니다:</p>

          <CodeBlock language="json" title="내장 예외 응답">
{`{
  "message": "Something bad happened",
  "error": "Some error description",
  "statusCode": 400
}`}
          </CodeBlock>
        </section>

        {/* 예외 필터 */}
        <section>
          <h2 id="exception-filters" className="text-2xl font-semibold mb-4">예외 필터</h2>
          <p className="text-muted-foreground mb-4">
            기본(내장) 예외 필터가 많은 경우를 자동으로 처리할 수 있지만, 예외 레이어에 대한 
            <strong>완전한 제어</strong>를 원할 수 있습니다. 예를 들어, 로깅을 추가하거나 일부 동적 요소를 기반으로 
            다른 JSON 스키마를 사용하고 싶을 수 있습니다. <strong>예외 필터</strong>는 정확히 이 목적을 위해 설계되었습니다. 
            정확한 제어 흐름과 클라이언트로 다시 전송되는 응답의 내용을 제어할 수 있습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">HttpException</code> 클래스의 인스턴스인 예외를 포착하고 
            이에 대한 사용자 정의 응답 로직을 구현하는 예외 필터를 만들어보겠습니다. 이를 위해 기본 플랫폼 
            <code className="bg-muted px-1 py-0.5 rounded">Request</code>와 <code className="bg-muted px-1 py-0.5 rounded">Response</code> 
            객체에 액세스해야 합니다. <code className="bg-muted px-1 py-0.5 rounded">Request</code> 객체에 액세스하여 원래 
            <code className="bg-muted px-1 py-0.5 rounded">url</code>을 가져와서 로깅 정보에 포함시킬 것입니다. 
            <code className="bg-muted px-1 py-0.5 rounded">Response</code> 객체를 사용하여 
            <code className="bg-muted px-1 py-0.5 rounded">response.json()</code> 메소드를 사용해 전송되는 응답을 직접 제어할 것입니다.
          </p>

          <CodeBlock language="typescript" title="http-exception.filter.ts">
{`import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> 모든 예외 필터는 일반 <code className="bg-green-100 px-1 py-0.5 rounded">ExceptionFilter&lt;T&gt;</code> 
              인터페이스를 구현해야 합니다. 이를 위해 <code className="bg-green-100 px-1 py-0.5 rounded">catch(exception: T, host: ArgumentsHost)</code> 
              메소드를 해당 시그니처와 함께 제공해야 합니다. <code className="bg-green-100 px-1 py-0.5 rounded">T</code>는 예외의 타입을 나타냅니다.
            </p>
          </div>
        </section>

        {/* Arguments host */}
        <section>
          <h2 id="arguments-host" className="text-2xl font-semibold mb-4">Arguments host</h2>
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">catch()</code> 메소드의 <code className="bg-muted px-1 py-0.5 rounded">host</code> 
            매개변수를 살펴보겠습니다. 이는 <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code> 객체입니다. 
            <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code>는 강력한 유틸리티 객체로, 
            <a href="/fundamentals/execution-context" className="text-primary hover:underline">execution context 장</a>에서 더 자세히 살펴보겠습니다. 
            이 코드 샘플에서는 이를 사용하여 원래 요청 핸들러(예외가 발생한 컨트롤러에서)로 전달되는 
            <code className="bg-muted px-1 py-0.5 rounded">Request</code>와 <code className="bg-muted px-1 py-0.5 rounded">Response</code> 
            객체에 대한 참조를 얻습니다.
          </p>

          <p className="text-muted-foreground">
            이 수준의 추상화에 대한 이유는 <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code>가 
            모든 컨텍스트(예: 현재 작업 중인 HTTP 서버 컨텍스트, 마이크로서비스 또는 웹소켓)에서 작동하기 때문입니다. 
            execution context 장에서 <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code>의 힘과 
            이를 사용하여 모든 실행 컨텍스트에 대한 적절한 <a href="/fundamentals/execution-context" className="text-primary hover:underline">기본 인수</a>에 
            액세스하는 방법을 살펴보겠습니다.
          </p>
        </section>

        {/* 필터 바인딩 */}
        <section>
          <h2 id="binding-filters" className="text-2xl font-semibold mb-4">필터 바인딩</h2>
          <p className="text-muted-foreground mb-4">
            새 <code className="bg-muted px-1 py-0.5 rounded">HttpExceptionFilter</code>를 
            <code className="bg-muted px-1 py-0.5 rounded">CatsController</code>의 <code className="bg-muted px-1 py-0.5 rounded">create()</code> 
            메소드에 연결해보겠습니다.
          </p>

          <CodeBlock language="typescript" title="cats.controller.ts">
{`@Post()
@UseFilters(HttpExceptionFilter)
async create(@Body() createCatDto: CreateCatDto) {
  throw new ForbiddenException();
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> <code className="bg-blue-100 px-1 py-0.5 rounded">@UseFilters()</code> 데코레이터는 
              <code className="bg-blue-100 px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 가져옵니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            여기서 <code className="bg-muted px-1 py-0.5 rounded">@UseFilters()</code> 데코레이터를 사용했습니다. 
            <code className="bg-muted px-1 py-0.5 rounded">@Catch()</code> 데코레이터와 유사하게, 단일 필터 인스턴스를 
            사용하거나 쉼표로 구분된 필터 목록을 사용할 수 있습니다. 여기서 <code className="bg-muted px-1 py-0.5 rounded">HttpExceptionFilter</code> 
            클래스를 in-place로 생성했습니다. 또는 인스턴스 대신 클래스를 전달하여 인스턴스화에 대한 책임을 프레임워크에 맡기고 
            <strong>의존성 주입</strong>을 활성화할 수 있습니다.
          </p>

          <CodeBlock language="typescript" title="클래스를 사용한 필터 바인딩">
{`@Post()
@UseFilters(new HttpExceptionFilter())
async create(@Body() createCatDto: CreateCatDto) {
  throw new ForbiddenException();
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> 가능한 경우 인스턴스 대신 클래스를 사용하여 필터를 적용하는 것을 선호합니다. 
              Nest는 전체 모듈에서 동일한 클래스의 인스턴스를 쉽게 재사용할 수 있으므로 <strong>메모리 사용량</strong>을 줄입니다.
            </p>
          </div>
        </section>

        {/* 범위가 있는 필터 */}
        <section>
          <h2 id="scoped-filters" className="text-2xl font-semibold mb-4">범위가 있는 필터</h2>
          <p className="text-muted-foreground mb-4">
            예외 필터는 다양한 수준의 범위를 가질 수 있습니다: 메소드 범위, 컨트롤러 범위 또는 글로벌 범위. 
            예를 들어, 컨트롤러 범위의 필터를 설정하려면 다음을 수행합니다:
          </p>

          <CodeBlock language="typescript" title="컨트롤러 범위 필터">
{`@UseFilters(HttpExceptionFilter)
export class CatsController {}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            이 구성은 <code className="bg-muted px-1 py-0.5 rounded">CatsController</code> 내에서 정의된 
            모든 라우트 핸들러에 대해 <code className="bg-muted px-1 py-0.5 rounded">HttpExceptionFilter</code>를 설정합니다.
          </p>

          <p className="text-muted-foreground">글로벌 범위 필터를 만들려면 다음을 수행합니다:</p>

          <CodeBlock language="typescript" title="main.ts - 글로벌 필터">
{`async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>주의:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">useGlobalFilters()</code> 메소드는 
              게이트웨이나 하이브리드 애플리케이션에 대한 필터를 설정하지 않습니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            글로벌 범위 필터는 모든 컨트롤러와 모든 라우트 핸들러에 대해 전체 애플리케이션에서 사용됩니다. 
            의존성 주입과 관련하여, 모듈 외부에서 등록된 글로벌 필터 
            (위 예제에서처럼 <code className="bg-muted px-1 py-0.5 rounded">useGlobalFilters()</code> 사용)는 
            모듈 컨텍스트 외부에서 수행되므로 의존성을 주입할 수 없습니다. 이 문제를 해결하기 위해 다음 구성을 사용하여 
            모든 모듈에서 직접 글로벌 범위 필터를 등록할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="app.module.ts - 의존성 주입을 사용한 글로벌 필터">
{`import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> 이 방법을 사용하여 필터에 대해 의존성 주입을 수행할 때, 이 구성이 사용되는 
              모듈에 관계없이 필터는 실제로 <strong>글로벌</strong>이라는 점에 유의하세요. 이 작업을 어디에서 수행해야 할까요? 
              필터 (<code className="bg-blue-100 px-1 py-0.5 rounded">HttpExceptionFilter</code>)가 정의된 모듈을 선택하세요. 
              또한, <code className="bg-blue-100 px-1 py-0.5 rounded">useClass</code>만이 사용자 정의 프로바이더 등록을 
              처리하는 유일한 방법은 아닙니다. <a href="/fundamentals/custom-providers" className="text-blue-600 hover:underline">여기서</a> 더 알아보세요.
            </p>
          </div>
        </section>

        {/* 모든 것 잡기 */}
        <section>
          <h2 id="catch-everything" className="text-2xl font-semibold mb-4">모든 것 잡기</h2>
          <p className="text-muted-foreground mb-4">
            <strong>모든</strong> 처리되지 않은 예외를 포착하려면 (예외 타입과 관계없이), 
            <code className="bg-muted px-1 py-0.5 rounded">@Catch()</code> 데코레이터의 매개변수 목록을 비워두세요 
            (예: <code className="bg-muted px-1 py-0.5 rounded">@Catch()</code>).
          </p>

          <p className="text-muted-foreground mb-4">
            아래 예제에서는 플랫폼에 구애받지 않는 코드입니다. 
            <a href="/techniques/http-adapter" className="text-primary hover:underline">HTTP 어댑터</a>를 사용하여 응답을 전달하고 
            플랫폼별 객체 (<code className="bg-muted px-1 py-0.5 rounded">Request</code>와 
            <code className="bg-muted px-1 py-0.5 rounded">Response</code>)를 직접 사용하지 않습니다:
          </p>

          <CodeBlock language="typescript" title="any-exception.filter.ts">
{`import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations \`httpAdapter\` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>주의:</strong> 모든 것을 잡는 예외 필터와 특정 타입에 바인딩된 필터를 결합할 때, 
              &quot;모든 것 잡기&quot; 필터가 특정 필터가 바인딩된 타입을 올바르게 위임할 수 있도록 하려면
              &quot;모든 것 잡기&quot; 필터를 먼저 선언해야 합니다.
            </p>
          </div>
        </section>

        {/* 상속 */}
        <section>
          <h2 id="inheritance" className="text-2xl font-semibold mb-4">상속</h2>
          <p className="text-muted-foreground">
            일반적으로 애플리케이션 요구 사항을 충족하도록 완전히 사용자 정의된 예외 필터를 만들 것입니다. 
            하지만 내장 기본 <strong>글로벌 예외 필터</strong>를 간단히 확장하고 특정 요소에 따라 동작을 
            재정의하려는 사용 사례가 있을 수 있습니다.
          </p>

          <p className="text-muted-foreground mt-4 mb-4">
            예외 처리를 기본 필터에 위임하려면 <code className="bg-muted px-1 py-0.5 rounded">BaseExceptionFilter</code>를 
            확장하고 상속된 <code className="bg-muted px-1 py-0.5 rounded">catch()</code> 메소드를 호출해야 합니다.
          </p>

          <CodeBlock language="typescript" title="all-exceptions.filter.ts">
{`import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>주의:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">BaseExceptionFilter</code>를 확장하는 
              메소드 범위 및 컨트롤러 범위 필터는 <code className="bg-amber-100 px-1 py-0.5 rounded">new</code>로 
              인스턴스화되어서는 안 됩니다. 대신, 프레임워크가 자동으로 인스턴스화하도록 해야 합니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            위의 구현은 접근 방식을 보여주는 껍데기에 불과합니다. 확장된 예외 필터의 구현에는 맞춤형 
            <strong>비즈니스</strong> 로직(예: 다양한 조건 처리)이 포함될 것입니다.
          </p>

          <p className="text-muted-foreground">
            글로벌 필터 <strong>는</strong> 기본 필터를 확장할 수 있습니다. 이는 두 가지 방법 중 하나로 수행할 수 있습니다.
          </p>

          <p className="text-muted-foreground mt-2">
            첫 번째 방법은 사용자 정의 글로벌 필터를 인스턴스화할 때 
            <code className="bg-muted px-1 py-0.5 rounded">HttpAdapter</code> 참조를 주입하는 것입니다:
          </p>

          <CodeBlock language="typescript" title="main.ts - HttpAdapter 주입">
{`async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            두 번째 방법은 <a href="#scoped-filters" className="text-primary hover:underline">여기에서</a> 
            보여준 것처럼 <code className="bg-muted px-1 py-0.5 rounded">APP_FILTER</code> 토큰을 사용하는 것입니다.
          </p>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "미들웨어",
          href: "/middleware",
          description: "요청과 응답 사이의 미들웨어 처리"
        }}
        next={{
          title: "파이프",
          href: "/pipes",
          description: "입력 데이터 변환 및 유효성 검사"
        }}
      />
    </div>
  )
}