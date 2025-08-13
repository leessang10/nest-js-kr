import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Package, ArrowDownUp, Settings, Database } from 'lucide-react'

export default function ProvidersPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '기본 개념', href: '/fundamentals' }, { title: '프로바이더' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">프로바이더</h1>
          <p className="text-xl text-muted-foreground mt-4">
            프로바이더는 Nest의 기본 개념입니다. 많은 기본 Nest 클래스들은 서비스, 리포지토리, 팩토리, 헬퍼 등 
            프로바이더로 취급될 수 있습니다. 프로바이더의 주요 아이디어는 의존성으로 <strong>주입</strong>될 수 있다는 것입니다.
          </p>
        </div>

        {/* 프로바이더 개념 카드 */}
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Package className="h-8 w-8 text-blue-500" />
                <span className="text-sm font-medium">서비스</span>
                <span className="text-xs text-muted-foreground">비즈니스 로직</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Database className="h-8 w-8 text-green-500" />
                <span className="text-sm font-medium">리포지토리</span>
                <span className="text-xs text-muted-foreground">데이터 액세스</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Settings className="h-8 w-8 text-purple-500" />
                <span className="text-sm font-medium">팩토리</span>
                <span className="text-xs text-muted-foreground">객체 생성</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <ArrowDownUp className="h-8 w-8 text-orange-500" />
                <span className="text-sm font-medium">헬퍼</span>
                <span className="text-xs text-muted-foreground">유틸리티 함수</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 서비스 */}
        <section>
          <h2 id="services" className="text-2xl font-semibold mb-4">서비스</h2>
          <p className="text-muted-foreground mb-4">
            간단한 <code className="bg-muted px-1 py-0.5 rounded">CatsService</code>를 만드는 것으로 시작해보겠습니다. 
            이 서비스는 데이터 저장 및 검색을 담당하며, <code className="bg-muted px-1 py-0.5 rounded">CatsController</code>에서 
            사용하도록 설계되었으므로 프로바이더로 정의하기에 좋은 후보입니다.
          </p>
          
          <CodeBlock language="typescript" title="cats.service.ts">
{`import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> CLI를 사용하여 서비스를 생성하려면 간단히 
              <code className="bg-green-100 px-1 py-0.5 rounded">$ nest g service cats</code> 명령을 실행하세요.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            <code className="bg-muted px-1 py-0.5 rounded">CatsService</code>는 하나의 속성과 두 개의 메소드가 있는 
            기본 클래스입니다. 유일한 새로운 특징은 <code className="bg-muted px-1 py-0.5 rounded">@Injectable()</code> 데코레이터를 
            사용한다는 것입니다. <code className="bg-muted px-1 py-0.5 rounded">@Injectable()</code> 데코레이터는 
            <code className="bg-muted px-1 py-0.5 rounded">CatsService</code>가 Nest IoC 컨테이너에서 관리할 수 있는 
            클래스라는 메타데이터를 첨부합니다.
          </p>
        </section>

        {/* 인터페이스 */}
        <section>
          <h2 id="interface" className="text-2xl font-semibold mb-4">인터페이스</h2>
          <p className="text-muted-foreground mb-4">
            그런데, 이 예제에서는 <code className="bg-muted px-1 py-0.5 rounded">Cat</code> 인터페이스를 사용하고 있습니다. 
            다음과 같이 보일 것입니다:
          </p>
          
          <CodeBlock language="typescript" title="interfaces/cat.interface.ts">
{`export interface Cat {
  name: string;
  age: number;
  breed: string;
}`}
          </CodeBlock>
        </section>

        {/* 의존성 주입 */}
        <section>
          <h2 id="dependency-injection" className="text-2xl font-semibold mb-4">의존성 주입</h2>
          <p className="text-muted-foreground mb-4">
            이제 서비스 클래스가 있으므로 <code className="bg-muted px-1 py-0.5 rounded">CatsController</code> 안에서 
            사용해보겠습니다:
          </p>
          
          <CodeBlock language="typescript" title="cats.controller.ts">
{`import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            <code className="bg-muted px-1 py-0.5 rounded">CatsService</code>는 클래스 생성자를 통해 <strong>주입</strong>됩니다. 
            <code className="bg-muted px-1 py-0.5 rounded">private</code> 구문의 사용에 주목하세요. 
            이 축약형을 사용하면 같은 위치에서 <code className="bg-muted px-1 py-0.5 rounded">catsService</code> 멤버를 
            즉시 선언하고 초기화할 수 있습니다.
          </p>
        </section>

        {/* 의존성 주입 심화 */}
        <section>
          <h2 id="dependency-injection-deep" className="text-2xl font-semibold mb-4">의존성 주입</h2>
          <p className="text-muted-foreground mb-4">
            Nest는 <strong>의존성 주입</strong>이라고 알려진 강력한 디자인 패턴을 중심으로 구축됩니다. 
            이 개념에 대한 훌륭한 글을 공식 Angular 문서에서 읽어보시길 권합니다.
          </p>
          
          <p className="text-muted-foreground mb-4">
            Nest에서 TypeScript 능력 덕분에, 의존성은 <strong>타입</strong>으로만 해결되기 때문에 의존성을 관리하는 것이 
            매우 쉽습니다. 아래 예제에서 Nest는 <code className="bg-muted px-1 py-0.5 rounded">CatsService</code>의 
            인스턴스를 생성하고 반환하여 <code className="bg-muted px-1 py-0.5 rounded">catsService</code>를 해결할 것입니다 
            (또는, 일반적인 싱글톤의 경우, 다른 곳에서 이미 요청된 경우 기존 인스턴스를 반환합니다).
          </p>

          <CodeBlock language="typescript" title="의존성 주입 예제">
{`constructor(private catsService: CatsService) {}`}
          </CodeBlock>
        </section>

        {/* 스코프 */}
        <section>
          <h2 id="scopes" className="text-2xl font-semibold mb-4">스코프</h2>
          <p className="text-muted-foreground mb-4">
            프로바이더는 보통 애플리케이션 라이프사이클과 동기화된 수명 (&quot;스코프&quot;)을 가집니다. 애플리케이션이 부트스트랩되면,
            모든 의존성이 해결되어야 하므로 모든 프로바이더가 인스턴스화됩니다. 마찬가지로, 애플리케이션이 종료되면, 
            각 프로바이더가 소멸될 것입니다. 그러나 프로바이더 수명을 <strong>요청-스코프</strong>로 만드는 방법도 있습니다. 
            이러한 기술에 대한 자세한 내용은 <strong>여기서</strong> 읽을 수 있습니다.
          </p>
        </section>

        {/* 사용자 정의 프로바이더 */}
        <section>
          <h2 id="custom-providers" className="text-2xl font-semibold mb-4">사용자 정의 프로바이더</h2>
          <p className="text-muted-foreground mb-4">
            Nest에는 프로바이더 간의 관계를 해결하는 내장 제어 역전 (&quot;IoC&quot;) 컨테이너가 있습니다.
            이 기능은 위에서 설명한 의존성 주입 기능의 기초가 되지만, 실제로는 지금까지 설명한 것보다 훨씬 더 강력합니다. 
            프로바이더를 정의하는 몇 가지 방법이 있습니다: 평범한 값, 클래스, 그리고 비동기 또는 동기 팩토리를 사용할 수 있습니다.
          </p>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>더 많은 정보:</strong> 사용자 정의 프로바이더에 대한 자세한 내용은 
              <strong>여기서</strong> 확인할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 선택적 프로바이더 */}
        <section>
          <h2 id="optional-providers" className="text-2xl font-semibold mb-4">선택적 프로바이더</h2>
          <p className="text-muted-foreground mb-4">
            때때로, 반드시 해결될 필요가 없는 의존성이 있을 수 있습니다. 예를 들어, 클래스가 <strong>&quot;구성 객체&quot;</strong>에 
            의존할 수 있지만, 아무것도 전달되지 않으면 기본값이 사용되어야 합니다. 이러한 경우, 
            구성 프로바이더의 부재가 오류로 이어지지 않기 때문에 의존성은 선택적이 됩니다.
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
            위의 예제에서 우리는 사용자 정의 토큰을 사용하고 있다는 점에 주목하세요. 사용자 정의 프로바이더와 
            관련된 토큰에 대한 자세한 내용은 <strong>여기서</strong> 확인하세요.
          </p>
        </section>

        {/* 속성 기반 주입 */}
        <section>
          <h2 id="property-based-injection" className="text-2xl font-semibold mb-4">속성 기반 주입</h2>
          <p className="text-muted-foreground mb-4">
            지금까지 사용한 기법은 생성자 기반 주입이라고 불리는데, 프로바이더가 생성자 메소드를 통해 주입되기 때문입니다. 
            매우 특정한 경우에, <strong>속성 기반 주입</strong>이 유용할 수 있습니다. 예를 들어, 최상위 클래스가 
            하나 또는 여러 프로바이더에 의존하는 경우, 생성자에서 <code className="bg-muted px-1 py-0.5 rounded">super()</code>를 
            호출하여 서브클래스까지 모두 전달하는 것은 매우 지루할 수 있습니다.
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
              <strong>주의:</strong> 클래스가 다른 클래스를 확장하지 않는 경우, 항상 <strong>&quot;생성자 기반&quot;</strong> 주입을 
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
          
          <CodeBlock language="typescript" title="app.module.ts">
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
      </div>

      <PageNavigation
        prev={{
          title: "컨트롤러",
          href: "/controllers",
          description: "HTTP 요청 처리하기"
        }}
        next={{
          title: "모듈",
          href: "/modules",
          description: "애플리케이션 구조와 모듈 시스템에 대해 알아보세요"
        }}
      />
    </div>
  )
}