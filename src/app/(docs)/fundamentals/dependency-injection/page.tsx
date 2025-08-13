import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { GitBranch, Package, Settings, Layers, Zap, RefreshCw } from 'lucide-react'

export default function DependencyInjectionPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '고급 기법', href: '/fundamentals' }, { title: '의존성 주입' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">의존성 주입</h1>
          <p className="text-xl text-muted-foreground mt-4">
            의존성 주입은 <strong>제어 역전</strong>(IoC) 기법으로, 의존성의 인스턴스화를 사용하는 클래스에서 
            IoC 컨테이너(이 경우 NestJS 런타임 시스템)로 위임합니다. 먼저 기본 의존성 주입 예제를 살펴본 다음, 
            Nest에서 사용할 수 있는 강력한 기능들을 살펴보겠습니다.
          </p>
        </div>

        {/* DI 개념 시각화 */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <GitBranch className="h-12 w-12 mx-auto text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold">의존성 주입의 핵심 개념</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <Package className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="text-sm font-medium mb-1">IoC 컨테이너</div>
                <div className="text-xs text-muted-foreground">의존성 관리 및 주입</div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Settings className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-sm font-medium mb-1">프로바이더</div>
                <div className="text-xs text-muted-foreground">주입 가능한 서비스</div>
              </div>
              <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <Layers className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <div className="text-sm font-medium mb-1">토큰</div>
                <div className="text-xs text-muted-foreground">의존성 식별자</div>
              </div>
              <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <Zap className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <div className="text-sm font-medium mb-1">스코프</div>
                <div className="text-xs text-muted-foreground">인스턴스 수명 관리</div>
              </div>
              <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <RefreshCw className="h-8 w-8 mx-auto mb-2 text-red-500" />
                <div className="text-sm font-medium mb-1">순환 의존성</div>
                <div className="text-xs text-muted-foreground">양방향 의존성 처리</div>
              </div>
              <div className="text-center p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <Package className="h-8 w-8 mx-auto mb-2 text-teal-500" />
                <div className="text-sm font-medium mb-1">사용자 정의 프로바이더</div>
                <div className="text-xs text-muted-foreground">고급 프로바이더 설정</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DI 기본 사항 */}
        <section>
          <h2 id="di-fundamentals" className="text-2xl font-semibold mb-4">DI 기본 사항</h2>
          <p className="text-muted-foreground mb-4">
            의존성 주입은 강력한 디자인 패턴입니다. Angular에서 자세한 내용을 읽어보는 것을 권장합니다. 
            이 글에서는 TypeScript와 Nest에 관련된 기능들을 설명하겠습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            Nest에서 TypeScript 기능 덕분에, 의존성은 <strong>타입</strong>으로 해결되기 때문에 
            의존성을 관리하는 것이 매우 쉽습니다. 아래 예제에서 Nest는 
            <code className="bg-muted px-1 py-0.5 rounded">CatsService</code>의 인스턴스를 생성하고 반환하여 
            <code className="bg-muted px-1 py-0.5 rounded">catsService</code>를 해결할 것입니다 
            (또는, 일반적인 싱글톤의 경우, 다른 곳에서 이미 요청된 경우 기존 인스턴스를 반환합니다). 
            이 의존성은 해결되어 컨트롤러의 생성자에 전달됩니다 (또는 지정된 속성에 할당됩니다):
          </p>

          <CodeBlock language="typescript" title="기본 의존성 주입">
{`constructor(private catsService: CatsService) {}`}
          </CodeBlock>
        </section>

        {/* 사용자 정의 프로바이더 */}
        <section>
          <h2 id="custom-providers" className="text-2xl font-semibold mb-4">사용자 정의 프로바이더</h2>
          <p className="text-muted-foreground mb-4">
            Nest에는 프로바이더 간의 관계를 해결하는 내장 <strong>제어 역전</strong>(&quot;IoC&quot;) 컨테이너가 있습니다. 
            이 기능은 위에서 설명한 의존성 주입 기능의 기초가 되지만, 실제로는 지금까지 설명한 것보다 훨씬 더 강력합니다. 
            프로바이더를 정의하는 여러 가지 방법이 있습니다: 일반 값, 클래스, 비동기 또는 동기 팩토리를 사용할 수 있습니다. 
            더 많은 예제는 <strong>여기서</strong> 제공됩니다.
          </p>
        </section>

        {/* 선택적 프로바이더 */}
        <section>
          <h2 id="optional-providers" className="text-2xl font-semibold mb-4">선택적 프로바이더</h2>
          <p className="text-muted-foreground mb-4">
            때때로, 반드시 해결될 필요가 없는 의존성이 있을 수 있습니다. 예를 들어, 클래스가 
            <strong>구성 객체</strong>에 의존할 수 있지만, 아무것도 전달되지 않으면 기본값이 사용되어야 합니다. 
            이러한 경우, 구성 프로바이더의 부재가 오류로 이어지지 않기 때문에 의존성은 선택적이 됩니다.
          </p>

          <p className="text-muted-foreground mb-4">
            프로바이더가 선택적임을 나타내려면, 생성자의 시그니처에서 <code className="bg-muted px-1 py-0.5 rounded">@Optional()</code> 
            데코레이터를 사용하세요.
          </p>

          <CodeBlock language="typescript" title="선택적 프로바이더">
{`import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            위의 예제에서 우리는 사용자 정의 토큰을 사용하고 있다는 점에 주목하세요. 
            사용자 정의 프로바이더와 관련된 토큰에 대한 자세한 내용은 이 장에서 확인하세요.
          </p>
        </section>

        {/* 속성 기반 주입 */}
        <section>
          <h2 id="property-based-injection" className="text-2xl font-semibold mb-4">속성 기반 주입</h2>
          <p className="text-muted-foreground mb-4">
            지금까지 사용한 기법은 생성자 기반 주입이라고 불리는데, 프로바이더가 생성자 메서드를 통해 주입되기 때문입니다. 
            매우 특정한 경우에, <strong>속성 기반 주입</strong>이 유용할 수 있습니다. 예를 들어, 최상위 클래스가 
            하나 또는 여러 프로바이더에 의존하는 경우, 생성자에서 <code className="bg-muted px-1 py-0.5 rounded">super()</code>를 
            호출하여 서브클래스까지 모두 전달하는 것은 매우 지루할 수 있습니다. 이를 피하기 위해 속성 수준에서 
            <code className="bg-muted px-1 py-0.5 rounded">@Inject()</code> 데코레이터를 사용할 수 있습니다.
          </p>

          <CodeBlock language="typescript" title="속성 기반 주입">
{`import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>주의:</strong> 클래스가 다른 클래스를 확장하지 않는 경우, 항상 <strong>생성자 기반</strong> 주입을 
              사용하는 것을 선호해야 합니다.
            </p>
          </div>
        </section>

        {/* 프로바이더 등록 */}
        <section>
          <h2 id="provider-registration" className="text-2xl font-semibold mb-4">프로바이더 등록</h2>
          <p className="text-muted-foreground mb-4">
            이제 프로바이더(<code className="bg-muted px-1 py-0.5 rounded">CatsService</code>)를 정의했고, 
            해당 서비스의 소비자(<code className="bg-muted px-1 py-0.5 rounded">CatsController</code>)가 있으므로, 
            주입이 수행될 수 있도록 Nest에 서비스를 등록해야 합니다. 모듈 파일 
            (<code className="bg-muted px-1 py-0.5 rounded">app.module.ts</code>)을 편집하고 
            <code className="bg-muted px-1 py-0.5 rounded">@Module()</code> 데코레이터의 
            <code className="bg-muted px-1 py-0.5 rounded">providers</code> 배열에 서비스를 추가하여 이를 수행합니다.
          </p>

          <CodeBlock language="typescript" title="프로바이더 등록">
{`import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            Nest는 이제 <code className="bg-muted px-1 py-0.5 rounded">CatsController</code> 클래스의 의존성을 해결할 수 있을 것입니다.
          </p>

          <p className="text-muted-foreground mt-4">이것이 우리 디렉토리 구조가 현재 어떻게 보이는지입니다:</p>

          <CodeBlock language="text" title="디렉토리 구조">
{`src
├── cats
│    ├── dto
│    │    └── create-cat.dto.ts
│    ├── interfaces
│    │    └── cat.interface.ts
│    ├── cats.controller.ts
│    └── cats.service.ts
├── app.module.ts
└── main.ts`}
          </CodeBlock>
        </section>

        {/* 수동 인스턴스화 */}
        <section>
          <h2 id="manual-instantiation" className="text-2xl font-semibold mb-4">수동 인스턴스화</h2>
          <p className="text-muted-foreground mb-4">
            지금까지, Nest가 의존성을 해결하는 대부분의 세부사항을 자동으로 처리하는 방법에 대해 논의했습니다. 
            특정 상황에서는, 내장 의존성 주입 시스템에서 벗어나 수동으로 프로바이더를 검색하거나 인스턴스화해야 할 수도 있습니다. 
            아래에서 그러한 두 가지 주제를 간략히 논의합니다.
          </p>

          <p className="text-muted-foreground mb-4">
            기존 인스턴스를 가져오거나 프로바이더를 동적으로 인스턴스화하려면, 
            <strong>Module reference</strong>를 사용할 수 있습니다.
          </p>

          <p className="text-muted-foreground">
            <code className="bg-muted px-1 py-0.5 rounded">bootstrap()</code> 함수 내에서 프로바이더를 가져오려면 
            (예를 들어, 컨트롤러가 없는 독립형 애플리케이션의 경우, 또는 부트스트랩 중에 구성 서비스를 활용하려면), 
            <strong>Standalone applications</strong>을 참조하세요.
          </p>
        </section>

        {/* 사용자 정의 프로바이더 */}
        <section>
          <h2 id="custom-providers-advanced" className="text-2xl font-semibold mb-4">사용자 정의 프로바이더 (고급)</h2>
          <p className="text-muted-foreground mb-4">
            Nest 내장 의존성 주입 시스템은 프로바이더 등록에 대한 몇 가지 방법을 제공합니다:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">값 프로바이더</h3>
              <p className="text-muted-foreground mb-2">
                상수 값을 주입하거나, 외부 라이브러리를 Nest 컨테이너에 넣을 때 유용합니다.
              </p>
              <CodeBlock language="typescript" title="값 프로바이더">
{`{
  provide: 'CONNECTION',
  useValue: connection,
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">클래스 프로바이더</h3>
              <p className="text-muted-foreground mb-2">
                동적으로 다른 클래스를 선택하여 프로바이더로 사용할 수 있습니다.
              </p>
              <CodeBlock language="typescript" title="클래스 프로바이더">
{`{
  provide: ConfigService,
  useClass: process.env.NODE_ENV === 'development' 
    ? DevelopmentConfigService 
    : ProductionConfigService,
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">팩토리 프로바이더</h3>
              <p className="text-muted-foreground mb-2">
                동적으로 프로바이더를 생성할 수 있으며, 다른 의존성을 주입받을 수 있습니다.
              </p>
              <CodeBlock language="typescript" title="팩토리 프로바이더">
{`{
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">별칭 프로바이더</h3>
              <p className="text-muted-foreground mb-2">
                기존 프로바이더에 별칭을 만들 수 있습니다.
              </p>
              <CodeBlock language="typescript" title="별칭 프로바이더">
{`{
  provide: 'AliasedLoggerService',
  useExisting: LoggerService,
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        {/* 비클래스 기반 프로바이더 토큰 */}
        <section>
          <h2 id="non-class-based-provider-tokens" className="text-2xl font-semibold mb-4">비클래스 기반 프로바이더 토큰</h2>
          <p className="text-muted-foreground mb-4">
            지금까지 클래스 이름을 프로바이더 토큰(providers 배열에 나열된 프로바이더에서 provide 속성의 값)으로 사용했습니다. 
            이는 <strong>생성자 기반 주입</strong>에 사용되는 표준 패턴과 일치하며, 
            여기서 토큰도 클래스 이름입니다. (토큰에 대한 개념적 이해가 명확하지 않다면 
            <strong>DI 기본 사항</strong>을 다시 참조하세요). 때때로, DI 토큰으로 문자열이나 심볼을 사용할 수 있는 
            유연성을 원할 수 있습니다. 예를 들어:
          </p>

          <CodeBlock language="typescript" title="문자열 토큰">
{`import { connection } from './connection';

@Module({
  providers: [
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class AppModule {}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            이 예제에서, 우리는 클래스가 아닌 문자열 값(<code className="bg-muted px-1 py-0.5 rounded">&apos;CONNECTION&apos;</code>)을 
            프로바이더 토큰과 <code className="bg-muted px-1 py-0.5 rounded">connection</code> 객체와 연결했습니다.
          </p>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>주의:</strong> 토큰 값으로 문자열을 사용하는 것 외에도, JavaScript 
              <strong>심볼</strong>이나 TypeScript <strong>열거형</strong>을 사용할 수도 있습니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            앞서 표준 <strong>생성자 기반 주입</strong> 패턴을 사용하여 프로바이더를 주입하는 방법을 봤습니다. 
            이 패턴은 의존성이 클래스 이름으로 선언되어야 <strong>합니다</strong>. 
            <code className="bg-muted px-1 py-0.5 rounded">&apos;CONNECTION&apos;</code> 사용자 정의 프로바이더는 
            문자열 값을 토큰으로 사용합니다. 그러한 프로바이더를 주입하는 방법을 살펴보겠습니다. 
            이를 위해 <code className="bg-muted px-1 py-0.5 rounded">@Inject()</code> 데코레이터를 사용합니다. 
            이 데코레이터는 단일 인수 - 토큰을 받습니다.
          </p>

          <CodeBlock language="typescript" title="문자열 토큰 주입">
{`@Injectable()
export class CatsRepository {
  constructor(@Inject('CONNECTION') connection: Connection) {}
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> <code className="bg-green-100 px-1 py-0.5 rounded">@Inject()</code> 데코레이터는 
              <code className="bg-green-100 px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 가져옵니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            위의 예제에서는 설명을 위해 <code className="bg-muted px-1 py-0.5 rounded">&apos;CONNECTION&apos;</code> 문자열을 
            직접 사용했지만, 깨끗한 코드 조직을 위해서는 별도 파일에서 토큰을 정의하는 것이 가장 좋은 관행입니다. 
            예를 들어, <code className="bg-muted px-1 py-0.5 rounded">constants.ts</code>. 
            심볼이나 열거형을 정의하고 그 파일에서 내보내는 것과 같은 방식으로 취급하세요.
          </p>
        </section>

        {/* 범위 */}
        <section>
          <h2 id="scopes" className="text-2xl font-semibold mb-4">범위</h2>
          <p className="text-muted-foreground mb-4">
            프로바이더는 보통 애플리케이션 라이프사이클과 동기화된 수명(&quot;범위&quot;)을 가집니다. 
            애플리케이션이 부트스트랩되면, 모든 의존성이 해결되어야 하므로 모든 프로바이더가 인스턴스화됩니다. 
            마찬가지로, 애플리케이션이 종료되면, 각 프로바이더가 소멸될 것입니다. 
            그러나 프로바이더 수명을 <strong>요청-스코프</strong>로 만드는 방법도 있습니다. 
            이러한 기술에 대한 자세한 내용은 <strong>여기서</strong> 읽을 수 있습니다.
          </p>
        </section>

        {/* 순환 의존성 */}
        <section>
          <h2 id="circular-dependency" className="text-2xl font-semibold mb-4">순환 의존성</h2>
          <p className="text-muted-foreground mb-4">
            순환 의존성은 두 클래스가 서로에게 의존할 때 발생합니다. 예를 들어, 클래스 A에는 클래스 B가 필요하고, 
            클래스 B에도 클래스 A가 필요합니다. Nest에서는 프로바이더 간과 모듈 간에 순환 의존성이 발생할 수 있습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            가능하면 순환 의존성을 피해야 하지만, 항상 그럴 수는 없습니다. 
            그러한 경우, Nest는 프로바이더 간의 순환 의존성을 두 가지 방법으로 해결할 수 있게 해줍니다. 
            이 장에서는 <strong>전방 참조</strong>를 사용하는 한 가지 기법을 설명하고, 
            다른 기법인 <strong>ModuleRef</strong> 클래스를 사용하여 DI 컨테이너에서 프로바이더 인스턴스를 
            검색하는 방법은 <strong>여기서</strong> 설명합니다.
          </p>

          <CodeBlock language="typescript" title="전방 참조로 순환 의존성 해결">
{`@Injectable()
export class CatsService {
  constructor(
    @Inject(forwardRef(() => CommonService))
    private commonService: CommonService,
  ) {}
}

@Injectable()
export class CommonService {
  constructor(
    @Inject(forwardRef(() => CatsService))
    private catsService: CatsService,
  ) {}
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>주의:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">forwardRef()</code> 함수는 
              <code className="bg-amber-100 px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 가져옵니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            이제 양쪽에 전방 참조가 설정되었으므로 Nest가 CatsService와 CommonService 클래스의 의존성을 해결할 수 있습니다.
          </p>
        </section>

        {/* 모듈 참조 */}
        <section>
          <h2 id="module-ref" className="text-2xl font-semibold mb-4">모듈 참조</h2>
          <p className="text-muted-foreground mb-4">
            Nest는 내부 프로바이더 목록을 탐색하고 토큰을 조회 키로 사용하여 모든 프로바이더에 대한 참조를 얻을 수 있는 
            <code className="bg-muted px-1 py-0.5 rounded">ModuleRef</code> 클래스를 제공합니다. 
            <code className="bg-muted px-1 py-0.5 rounded">ModuleRef</code> 클래스는 또한 정적 및 스코프가 지정된 
            프로바이더 모두를 동적으로 인스턴스화하는 방법을 제공합니다. 
            <code className="bg-muted px-1 py-0.5 rounded">ModuleRef</code>는 일반적인 방법으로 클래스에 주입할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="ModuleRef 사용">
{`@Injectable()
export class CatsService {
  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    const transientServices = await this.moduleRef.resolve(TransientService);
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> <code className="bg-green-100 px-1 py-0.5 rounded">ModuleRef</code> 클래스는 
              <code className="bg-green-100 px-1 py-0.5 rounded">@nestjs/core</code> 패키지에서 가져옵니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            모듈 참조에는 여러 메서드가 있습니다:
          </p>

          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">get()</code>: 현재 모듈에서 사용 가능한 
              (인스턴스화된) 프로바이더나 컨트롤러를 검색합니다.
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">resolve()</code>: 동적으로 프로바이더나 
              컨트롤러의 고유한 인스턴스를 검색합니다.
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">create()</code>: 주어진 클래스의 
              인스턴스를 동적으로 인스턴스화합니다.
            </li>
          </ul>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> 글로벌 컨텍스트에서 프로바이더를 가져오려면(예: 다른 모듈에서 프로바이더가 주입된 경우), 
              <code className="bg-blue-100 px-1 py-0.5 rounded">get()</code>이나 <code className="bg-blue-100 px-1 py-0.5 rounded">resolve()</code> 
              메서드에 <code className="bg-blue-100 px-1 py-0.5 rounded">{`{{ strict: false }}`}</code> 옵션을 두 번째 인수로 전달하세요.
            </p>
          </div>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "사용자 정의 데코레이터",
          href: "/custom-decorators",
          description: "메타데이터와 사용자 정의 데코레이터"
        }}
        next={{
          title: "비동기 프로바이더",
          href: "/fundamentals/async-providers",
          description: "비동기 프로바이더 패턴"
        }}
      />
    </div>
  )
}