import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Layers2, Clock, Filter, Repeat, Zap, FileText } from 'lucide-react'

export default function InterceptorsPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '기본 개념', href: '/fundamentals' }, { title: '인터셉터' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">인터셉터</h1>
          <p className="text-xl text-muted-foreground mt-4">
            인터셉터는 <code className="bg-muted px-1 py-0.5 rounded">@Injectable()</code> 데코레이터로 어노테이션된 클래스입니다. 
            인터셉터는 <code className="bg-muted px-1 py-0.5 rounded">NestInterceptor</code> 인터페이스를 구현해야 합니다.
          </p>
        </div>

        {/* 인터셉터 기능 시각화 */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Layers2 className="h-12 w-12 mx-auto text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold">인터셉터의 다양한 기능</h3>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>AOP(Aspect Oriented Programming)</strong> 기법에서 영감을 받은 유용한 기능 세트
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-3 bg-green-50 border border-green-200 rounded-lg">
                <Zap className="h-6 w-6 mx-auto mb-1 text-green-500" />
                <div className="text-xs font-medium mb-1">추가 로직 바인딩</div>
                <div className="text-xs text-muted-foreground">메서드 실행 전/후</div>
              </div>
              <div className="text-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <Repeat className="h-6 w-6 mx-auto mb-1 text-blue-500" />
                <div className="text-xs font-medium mb-1">결과 변환</div>
                <div className="text-xs text-muted-foreground">반환값 수정</div>
              </div>
              <div className="text-center p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <Filter className="h-6 w-6 mx-auto mb-1 text-purple-500" />
                <div className="text-xs font-medium mb-1">예외 변환</div>
                <div className="text-xs text-muted-foreground">예외 처리 수정</div>
              </div>
              <div className="text-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <Zap className="h-6 w-6 mx-auto mb-1 text-orange-500" />
                <div className="text-xs font-medium mb-1">기능 확장</div>
                <div className="text-xs text-muted-foreground">기본 함수 동작 확장</div>
              </div>
              <div className="text-center p-3 bg-red-50 border border-red-200 rounded-lg">
                <Filter className="h-6 w-6 mx-auto mb-1 text-red-500" />
                <div className="text-xs font-medium mb-1">함수 재정의</div>
                <div className="text-xs text-muted-foreground">특정 조건에 따라</div>
              </div>
              <div className="text-center p-3 bg-teal-50 border border-teal-200 rounded-lg">
                <FileText className="h-6 w-6 mx-auto mb-1 text-teal-500" />
                <div className="text-xs font-medium mb-1">로깅, 캐싱</div>
                <div className="text-xs text-muted-foreground">횡단 관심사</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 개요 */}
        <section>
          <p className="text-muted-foreground mb-4">
            인터셉터는 <strong>Aspect Oriented Programming</strong>(AOP) 기법에서 영감을 받은 유용한 기능 세트를 가지고 있습니다. 
            이것들은 다음을 가능하게 합니다:
          </p>

          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>메서드 실행 전/후에 추가 로직 바인딩</li>
            <li>함수에서 반환된 결과를 변환</li>
            <li>함수에서 발생한 예외를 변환</li>
            <li>기본 함수 동작 확장</li>
            <li>특정 조건에 따라 함수를 완전히 재정의 (예: 캐싱 목적)</li>
          </ul>
        </section>

        {/* 기본 사항 */}
        <section>
          <h2 id="basics" className="text-2xl font-semibold mb-4">기본 사항</h2>
          <p className="text-muted-foreground mb-4">
            각 인터셉터는 두 개의 매개변수를 받는 <code className="bg-muted px-1 py-0.5 rounded">intercept()</code> 메서드를 구현합니다. 
            첫 번째는 <code className="bg-muted px-1 py-0.5 rounded">ExecutionContext</code> 인스턴스입니다 
            (가드와 정확히 동일한 객체). <code className="bg-muted px-1 py-0.5 rounded">ExecutionContext</code>는 
            <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code>에서 상속됩니다. 
            <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code>를 이전에 예외 필터 장에서 보았습니다. 
            거기서 원본 핸들러에 전달된 인수를 래핑하는 래퍼이고, 애플리케이션 유형에 따라 다른 인수 배열을 포함한다고 보았습니다. 
            이 주제에 대한 자세한 내용은 <strong>예외 필터</strong>를 다시 참조할 수 있습니다.
          </p>
        </section>

        {/* 실행 컨텍스트 */}
        <section>
          <h2 id="execution-context" className="text-2xl font-semibold mb-4">실행 컨텍스트</h2>
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code>를 확장함으로써, 
            <code className="bg-muted px-1 py-0.5 rounded">ExecutionContext</code>는 현재 실행 프로세스에 대한 
            추가 세부정보를 제공하는 몇 가지 새로운 헬퍼 메서드를 추가합니다. 이러한 세부정보는 광범위한 컨트롤러, 메서드 및 
            실행 컨텍스트에서 작동할 수 있는 더 일반적인 인터셉터를 구축하는 데 도움이 될 수 있습니다. 
            <code className="bg-muted px-1 py-0.5 rounded">ExecutionContext</code>에 대한 자세한 내용은 
            <strong>여기서</strong> 확인하세요.
          </p>
        </section>

        {/* 호출 핸들러 */}
        <section>
          <h2 id="call-handler" className="text-2xl font-semibold mb-4">호출 핸들러</h2>
          <p className="text-muted-foreground mb-4">
            두 번째 매개변수는 <code className="bg-muted px-1 py-0.5 rounded">CallHandler</code>입니다. 
            <code className="bg-muted px-1 py-0.5 rounded">CallHandler</code> 인터페이스는 
            <code className="bg-muted px-1 py-0.5 rounded">handle()</code> 메서드를 구현합니다. 
            이 메서드를 사용하여 인터셉터의 어떤 지점에서 라우트 핸들러 메서드를 호출할 수 있습니다. 
            <code className="bg-muted px-1 py-0.5 rounded">intercept()</code> 메서드 구현에서 
            <code className="bg-muted px-1 py-0.5 rounded">handle()</code> 메서드를 호출하지 않으면, 
            라우트 핸들러 메서드가 전혀 실행되지 않습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            이 접근법은 <code className="bg-muted px-1 py-0.5 rounded">intercept()</code> 메서드가 요청/응답 스트림을 
            효과적으로 <strong>래핑</strong>한다는 것을 의미합니다. 결과적으로, 최종 라우트 핸들러의 실행 
            <strong>전과 후</strong> 모두에 사용자 정의 로직을 구현할 수 있습니다. 
            <code className="bg-muted px-1 py-0.5 rounded">handle()</code> 호출 <strong>전에</strong> 실행되는 
            <code className="bg-muted px-1 py-0.5 rounded">intercept()</code> 메서드에 코드를 작성할 수 있다는 것은 명확하지만, 
            그 후에는 어떻게 영향을 줄까요? <code className="bg-muted px-1 py-0.5 rounded">handle()</code> 메서드가 
            <code className="bg-muted px-1 py-0.5 rounded">Observable</code>을 반환하기 때문에, 
            강력한 <strong>RxJS</strong> 연산자를 사용하여 응답을 추가로 조작할 수 있습니다.
          </p>

          <p className="text-muted-foreground">
            Aspect Oriented Programming 용어를 사용하면, 라우트 핸들러의 호출 (즉, <code className="bg-muted px-1 py-0.5 rounded">handle()</code> 호출)은 
            <strong>Pointcut</strong>이라고 불리며, 이는 추가 로직이 삽입되는 지점임을 나타냅니다.
          </p>

          <p className="text-muted-foreground mt-4">
            예를 들어, 들어오는 <code className="bg-muted px-1 py-0.5 rounded">POST /cats</code> 요청을 생각해보세요. 
            이 요청은 <code className="bg-muted px-1 py-0.5 rounded">CatsController</code> 내에서 정의된 
            <code className="bg-muted px-1 py-0.5 rounded">create()</code> 핸들러를 목표로 합니다. 
            도중에 <code className="bg-muted px-1 py-0.5 rounded">handle()</code> 메서드를 호출하지 않는 인터셉터가 호출되면, 
            <code className="bg-muted px-1 py-0.5 rounded">create()</code> 메서드는 실행되지 않습니다. 
            <code className="bg-muted px-1 py-0.5 rounded">handle()</code>이 호출되면 (그리고 그 <code className="bg-muted px-1 py-0.5 rounded">Observable</code>이 반환되면), 
            <code className="bg-muted px-1 py-0.5 rounded">create()</code> 핸들러가 트리거됩니다. 
            그리고 <code className="bg-muted px-1 py-0.5 rounded">Observable</code>을 통해 응답 스트림이 수신되면, 
            스트림에서 추가 작업을 수행할 수 있으며 최종 결과가 호출자에게 반환됩니다.
          </p>
        </section>

        {/* Aspect 인터셉션 */}
        <section>
          <h2 id="aspect-interception" className="text-2xl font-semibold mb-4">Aspect 인터셉션</h2>
          <p className="text-muted-foreground mb-4">
            첫 번째 사용 사례는 사용자 상호 작용을 로깅하는 것입니다 (예: 사용자 호출 저장, 비동기적으로 이벤트 발송 또는 타임스탬프 계산). 
            아래에서 간단한 <code className="bg-muted px-1 py-0.5 rounded">LoggingInterceptor</code>를 보여드리겠습니다:
          </p>

          <CodeBlock language="typescript" title="logging.interceptor.ts">
{`import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(\`After... \${Date.now() - now}ms\`)),
      );
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> <code className="bg-blue-100 px-1 py-0.5 rounded">NestInterceptor&lt;T, R&gt;</code>은 
              제네릭 인터페이스이며, 여기서 <code className="bg-blue-100 px-1 py-0.5 rounded">T</code>는 
              <code className="bg-blue-100 px-1 py-0.5 rounded">Observable&lt;T&gt;</code>의 타입을 나타내고 
              (응답 스트림 지원), <code className="bg-blue-100 px-1 py-0.5 rounded">R</code>은 
              <code className="bg-blue-100 px-1 py-0.5 rounded">Observable&lt;R&gt;</code>에 래핑된 값의 타입입니다.
            </p>
          </div>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> 인터셉터는, 컨트롤러, 프로바이더, 가드 등과 같이, 생성자를 통해 의존성을 주입할 수 있습니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            <code className="bg-muted px-1 py-0.5 rounded">handle()</code>이 RxJS <code className="bg-muted px-1 py-0.5 rounded">Observable</code>을 
            반환하므로, 스트림을 조작하는 데 사용할 수 있는 다양한 연산자를 선택할 수 있습니다. 
            위 예제에서는 observable 스트림의 정상적 또는 예외적 종료를 관찰하는 <code className="bg-muted px-1 py-0.5 rounded">tap()</code> 
            연산자를 사용했지만, 응답 사이클을 변경하지는 않습니다.
          </p>
        </section>

        {/* 인터셉터 바인딩 */}
        <section>
          <h2 id="binding-interceptors" className="text-2xl font-semibold mb-4">인터셉터 바인딩</h2>
          <p className="text-muted-foreground mb-4">
            인터셉터를 설정하기 위해, <code className="bg-muted px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 
            가져온 <code className="bg-muted px-1 py-0.5 rounded">@UseInterceptors()</code> 데코레이터를 사용합니다. 
            파이프 및 가드와 마찬가지로, 인터셉터는 컨트롤러-스코프, 메서드-스코프 또는 글로벌-스코프일 수 있습니다.
          </p>

          <CodeBlock language="typescript" title="cats.controller.ts">
{`@UseInterceptors(LoggingInterceptor)
export class CatsController {}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> <code className="bg-green-100 px-1 py-0.5 rounded">@UseInterceptors()</code> 데코레이터는 
              <code className="bg-green-100 px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 가져옵니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            위의 구성을 사용하면, <code className="bg-muted px-1 py-0.5 rounded">CatsController</code>에서 정의된 각 라우트 핸들러는 
            <code className="bg-muted px-1 py-0.5 rounded">LoggingInterceptor</code>를 사용할 것입니다. 
            누군가가 <code className="bg-muted px-1 py-0.5 rounded">GET /cats</code> 엔드포인트를 호출하면, 
            표준 출력에서 다음 출력을 볼 수 있습니다:
          </p>

          <CodeBlock language="bash" title="로그 출력">
{`Before...
After... 1ms`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            클래스 대신 인스턴스를 전달할 수도 있으며, 인플레이스 사용자 정의를 위해 의존성 주입을 떠날 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="인스턴스 전달">
{`@UseInterceptors(new LoggingInterceptor())
export class CatsController {}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            언급했듯이, 위의 구성은 이 컨트롤러에서 선언된 모든 핸들러에 인터셉터를 첨부합니다. 
            인터셉터의 범위를 단일 메서드로 제한하려면, 단순히 <strong>메서드 수준</strong>에서 데코레이터를 적용하면 됩니다.
          </p>

          <p className="text-muted-foreground mt-4">
            글로벌 인터셉터를 설정하려면, Nest 애플리케이션 인스턴스의 <code className="bg-muted px-1 py-0.5 rounded">useGlobalInterceptors()</code> 메서드를 사용합니다:
          </p>

          <CodeBlock language="typescript" title="글로벌 인터셉터">
{`const app = await NestFactory.create(AppModule);
app.useGlobalInterceptors(new LoggingInterceptor());`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            글로벌 인터셉터는 전체 애플리케이션에서, 모든 컨트롤러와 모든 라우트 핸들러에 사용됩니다. 
            의존성 주입 측면에서, 모듈 외부에서 등록된 글로벌 인터셉터 (위 예제에서처럼 <code className="bg-muted px-1 py-0.5 rounded">useGlobalInterceptors()</code>로) 
            는 모듈의 컨텍스트 외부에서 수행되었기 때문에 의존성을 주입할 수 없습니다. 이 문제를 해결하기 위해, 
            다음 구성을 사용하여 모듈에서 직접 인터셉터를 설정할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="모듈에서 글로벌 인터셉터 설정">
{`import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> 인터셉터에 대한 의존성 주입을 수행하기 위해 이 접근법을 사용할 때, 
              이 구조가 사용되는 모듈에 관계없이 인터셉터는 실제로 글로벌이라는 점에 유의하세요. 
              이는 어디서 수행되어야 할까요? 인터셉터 (<code className="bg-blue-100 px-1 py-0.5 rounded">LoggingInterceptor</code>가 
              위 예제에서)가 정의된 모듈을 선택하세요. 또한, <code className="bg-blue-100 px-1 py-0.5 rounded">useClass</code>가 
              사용자 정의 프로바이더 등록을 처리하는 유일한 방법은 아닙니다. 
              <strong>여기서</strong> 더 알아보세요.
            </p>
          </div>
        </section>

        {/* 응답 매핑 */}
        <section>
          <h2 id="response-mapping" className="text-2xl font-semibold mb-4">응답 매핑</h2>
          <p className="text-muted-foreground mb-4">
            우리는 이미 <code className="bg-muted px-1 py-0.5 rounded">handle()</code>이 <code className="bg-muted px-1 py-0.5 rounded">Observable</code>을 
            반환한다는 것을 알고 있습니다. 스트림은 라우트 핸들러에서 <strong>반환된</strong> 값을 포함하므로, 
            RxJS의 <code className="bg-muted px-1 py-0.5 rounded">map()</code> 연산자를 사용하여 쉽게 변경할 수 있습니다.
          </p>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>주의:</strong> 응답 매핑 기능은 라이브러리별 응답 전략과 작동하지 않습니다 
              (직접 <code className="bg-amber-100 px-1 py-0.5 rounded">@Res()</code> 객체 사용은 금지됨).
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            데모 목적으로, 각 응답을 사소한 방식으로 수정하는 <code className="bg-muted px-1 py-0.5 rounded">TransformInterceptor</code>를 
            만들어 보겠습니다. RxJS <code className="bg-muted px-1 py-0.5 rounded">map()</code> 연산자를 사용하여 
            응답 객체를 새로 생성된 객체의 <code className="bg-muted px-1 py-0.5 rounded">data</code> 속성에 할당하고, 
            새 객체를 클라이언트에 반환합니다.
          </p>

          <CodeBlock language="typescript" title="transform.interceptor.ts">
{`import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => ({ data })));
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> Nest 인터셉터는 동기 및 비동기 <code className="bg-green-100 px-1 py-0.5 rounded">intercept()</code> 
              메서드와 모두 작동합니다. 필요한 경우 메서드를 <code className="bg-green-100 px-1 py-0.5 rounded">async</code>로 
              간단히 전환할 수 있습니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            위의 구성에서, 누군가가 <code className="bg-muted px-1 py-0.5 rounded">GET /cats</code> 엔드포인트를 호출하면, 
            응답은 다음과 같습니다 (라우트 핸들러가 빈 배열 <code className="bg-muted px-1 py-0.5 rounded">[]</code>을 반환한다고 가정):
          </p>

          <CodeBlock language="json" title="변환된 응답">
{`{
  "data": []
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            인터셉터는 전체 애플리케이션에서 발생하는 요구사항에 대한 재사용 가능한 솔루션을 만드는 데 큰 가치가 있습니다. 
            예를 들어, <code className="bg-muted px-1 py-0.5 rounded">null</code> 값이 발생할 때마다 
            빈 문자열 <code className="bg-muted px-1 py-0.5 rounded">&apos;&apos;</code>로 변환해야 한다고 상상해보세요. 
            한 줄의 코드를 사용하고 인터셉터를 전역으로 바인딩하여 이를 수행할 수 있습니다. 
            따라서 등록된 각 핸들러에서 자동으로 재사용됩니다.
          </p>

          <CodeBlock language="typescript" title="null 변환 인터셉터">
{`import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ExcludeNullInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map(value => value === null ? '' : value ));
  }
}`}
          </CodeBlock>
        </section>

        {/* 예외 매핑 */}
        <section>
          <h2 id="exception-mapping" className="text-2xl font-semibold mb-4">예외 매핑</h2>
          <p className="text-muted-foreground mb-4">
            또 다른 흥미로운 사용 사례는 RxJS의 <code className="bg-muted px-1 py-0.5 rounded">catchError()</code> 연산자를 
            활용하여 발생한 예외를 재정의하는 것입니다:
          </p>

          <CodeBlock language="typescript" title="errors.interceptor.ts">
{`import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError(err => throwError(() => new BadGatewayException())),
      );
  }
}`}
          </CodeBlock>
        </section>

        {/* 스트림 재정의 */}
        <section>
          <h2 id="stream-overriding" className="text-2xl font-semibold mb-4">스트림 재정의</h2>
          <p className="text-muted-foreground mb-4">
            핸들러를 완전히 방지하고 대신 다른 값을 반환하려는 여러 가지 이유가 있습니다. 
            명백한 예는 응답 시간을 개선하기 위해 캐시를 구현하는 것입니다. 캐시에서 응답을 반환하는 간단한 
            <strong>캐시 인터셉터</strong>를 살펴보겠습니다. 현실적인 예에서, 
            TTL, 캐시 무효화, 캐시 크기 등과 같은 다른 요소를 고려하고 싶을 것이지만, 이는 이 논의의 범위를 벗어납니다. 
            여기서는 주요 개념을 보여주는 기본적인 예제를 제공하겠습니다.
          </p>

          <CodeBlock language="typescript" title="cache.interceptor.ts">
{`import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isCached = true;
    if (isCached) {
      return of([]);
    }
    return next.handle();
  }
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            우리의 <code className="bg-muted px-1 py-0.5 rounded">CacheInterceptor</code>는 하드코딩된 
            <code className="bg-muted px-1 py-0.5 rounded">isCached</code> 변수와 하드코딩된 응답 
            <code className="bg-muted px-1 py-0.5 rounded">[]</code>을 가지고 있습니다. 
            여기서 주목할 핵심 포인트는 RxJS <code className="bg-muted px-1 py-0.5 rounded">of()</code> 연산자로 
            생성된 새 스트림을 반환하므로, 라우트 핸들러가 <strong>전혀 호출되지 않을</strong> 것이라는 점입니다. 
            누군가가 <code className="bg-muted px-1 py-0.5 rounded">CacheInterceptor</code>를 사용하는 엔드포인트를 호출하면, 
            응답 (하드코딩된 빈 배열)이 즉시 반환됩니다. 
            일반적인 솔루션을 생성하려면, <code className="bg-muted px-1 py-0.5 rounded">Reflector</code>를 활용하고 
            사용자 정의 데코레이터를 생성할 수 있습니다. <code className="bg-muted px-1 py-0.5 rounded">Reflector</code>는 
            <strong>가드</strong> 장에서 잘 설명되었습니다.
          </p>
        </section>

        {/* 더 많은 연산자 */}
        <section>
          <h2 id="more-operators" className="text-2xl font-semibold mb-4">더 많은 연산자</h2>
          <p className="text-muted-foreground mb-4">
            RxJS 연산자를 사용하여 스트림을 조작할 가능성은 우리에게 많은 능력을 제공합니다. 
            다른 일반적인 사용 사례를 고려해보겠습니다. 라우트 요청에 <strong>timeout</strong>을 처리하고 싶다고 상상해보세요. 
            엔드포인트가 일정 시간 후에 아무것도 반환하지 않으면 오류 응답으로 종료하고 싶습니다. 
            다음 구성이 이를 가능하게 합니다:
          </p>

          <CodeBlock language="typescript" title="timeout.interceptor.ts">
{`import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(5000),
      catchError(err => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => err);
      }),
    );
  };
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            5초 후에 요청 처리가 취소됩니다. <code className="bg-muted px-1 py-0.5 rounded">RequestTimeoutException</code>을 
            발생시키기 전에 사용자 정의 로직을 추가할 수도 있습니다 (예: 리소스 해제).
          </p>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "가드",
          href: "/guards",
          description: "인증 및 권한 부여"
        }}
        next={{
          title: "사용자 정의 데코레이터",
          href: "/custom-decorators",
          description: "메타데이터와 사용자 정의 데코레이터"
        }}
      />
    </div>
  )
}