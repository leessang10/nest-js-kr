import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Package, Share2, Import, Globe } from 'lucide-react'

export default function ModulesPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '기본 개념', href: '/fundamentals' }, { title: '모듈' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">모듈</h1>
          <p className="text-xl text-muted-foreground mt-4">
            모듈은 <code className="bg-muted px-1 py-0.5 rounded">@Module()</code> 데코레이터로 어노테이션된 클래스입니다. 
            <code className="bg-muted px-1 py-0.5 rounded">@Module()</code> 데코레이터는 Nest가 애플리케이션 구조를 구성하는 데 
            사용하는 메타데이터를 제공합니다.
          </p>
        </div>

        {/* 모듈 개념 시각화 */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Package className="h-12 w-12 mx-auto text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold">애플리케이션 모듈 구조</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Import className="h-6 w-6 mx-auto mb-2 text-green-500" />
                <div className="text-sm font-medium">imports</div>
                <div className="text-xs text-muted-foreground">가져올 모듈</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Package className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                <div className="text-sm font-medium">providers</div>
                <div className="text-xs text-muted-foreground">프로바이더</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Share2 className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                <div className="text-sm font-medium">exports</div>
                <div className="text-xs text-muted-foreground">내보낼 프로바이더</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 개요 */}
        <section>
          <p className="text-muted-foreground mb-4">
            각 애플리케이션에는 최소한 하나의 모듈, 즉 <strong>루트 모듈</strong>이 있습니다. 루트 모듈은 Nest가 
            <strong>애플리케이션 그래프</strong>를 구축하는 데 사용하는 시작점입니다. 애플리케이션 그래프는 Nest가 모듈과 
            프로바이더 관계 및 의존성을 해결하는 데 사용하는 내부 데이터 구조입니다.
          </p>
          
          <p className="text-muted-foreground mb-4">
            이론적으로는 매우 작은 애플리케이션에는 루트 모듈만 있을 수 있지만, 이는 일반적인 경우가 아닙니다. 
            모듈은 컴포넌트를 구성하는 효과적인 방법으로 <strong>강력히 권장</strong>됩니다. 따라서 대부분의 애플리케이션에서, 
            결과 아키텍처는 각각 밀접하게 관련된 <strong>기능</strong> 집합을 캡슐화하는 여러 모듈을 사용할 것입니다.
          </p>
        </section>

        {/* @Module() 데코레이터 */}
        <section>
          <h2 id="module-decorator" className="text-2xl font-semibold mb-4">@Module() 데코레이터</h2>
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">@Module()</code> 데코레이터는 속성이 모듈을 설명하는 
            단일 객체를 받습니다:
          </p>

          <div className="grid gap-4 mb-6">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Import className="h-4 w-4 text-green-500" />
                <code className="font-semibold">providers</code>
              </div>
              <p className="text-sm text-muted-foreground">
                Nest 인젝터에 의해 인스턴스화되고 적어도 이 모듈 전체에서 공유될 수 있는 프로바이더
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Globe className="h-4 w-4 text-blue-500" />
                <code className="font-semibold">controllers</code>
              </div>
              <p className="text-sm text-muted-foreground">
                이 모듈에서 정의된 인스턴스화되어야 하는 컨트롤러 집합
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Import className="h-4 w-4 text-green-500" />
                <code className="font-semibold">imports</code>
              </div>
              <p className="text-sm text-muted-foreground">
                이 모듈에서 필요한 프로바이더를 내보내는 가져온 모듈 목록
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Share2 className="h-4 w-4 text-purple-500" />
                <code className="font-semibold">exports</code>
              </div>
              <p className="text-sm text-muted-foreground">
                이 모듈에서 제공되며 이 모듈을 가져오는 다른 모듈에서 사용할 수 있어야 하는 
                <code className="bg-muted px-1 py-0.5 rounded ml-1">providers</code>의 하위 집합
              </p>
            </div>
          </div>

          <p className="text-muted-foreground">
            모듈은 기본적으로 프로바이더를 <strong>캡슐화</strong>합니다. 이는 현재 모듈의 직접적인 부분이 아니거나 
            가져온 모듈에서 내보내지 않은 프로바이더를 주입하는 것이 불가능함을 의미합니다. 따라서 모듈에서 내보낸 
            프로바이더를 모듈의 공용 인터페이스 또는 API로 간주할 수 있습니다.
          </p>
        </section>

        {/* 기능 모듈 */}
        <section>
          <h2 id="feature-modules" className="text-2xl font-semibold mb-4">기능 모듈</h2>
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">CatsController</code>와 
            <code className="bg-muted px-1 py-0.5 rounded">CatsService</code>는 같은 애플리케이션 도메인에 속합니다. 
            서로 밀접하게 관련되어 있으므로 기능 모듈로 이동하는 것이 합리적입니다. 기능 모듈은 특정 기능과 
            관련된 코드를 간단히 구성하여 코드를 체계적으로 유지하고 명확한 경계를 설정합니다.
          </p>
          
          <p className="text-muted-foreground mb-4">
            애플리케이션과 팀의 크기가 증가함에 따라 SOLID 원칙을 따르고 애플리케이션을 유지하는 데 도움이 됩니다. 
            <code className="bg-muted px-1 py-0.5 rounded">CatsModule</code>을 만들어 보겠습니다:
          </p>

          <CodeBlock language="typescript" title="cats/cats.module.ts">
{`import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> CLI를 사용하여 모듈을 생성하려면 간단히 
              <code className="bg-green-100 px-1 py-0.5 rounded">$ nest g module cats</code> 명령을 실행하세요.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            위에서 <code className="bg-muted px-1 py-0.5 rounded">cats.module.ts</code> 파일에서 
            <code className="bg-muted px-1 py-0.5 rounded">CatsModule</code>을 정의했고, 이 모듈과 관련된 
            모든 것을 <code className="bg-muted px-1 py-0.5 rounded">cats</code> 디렉토리로 이동했습니다. 
            마지막으로 해야 할 일은 이 모듈을 루트 모듈(<code className="bg-muted px-1 py-0.5 rounded">AppModule</code>, 
            <code className="bg-muted px-1 py-0.5 rounded">app.module.ts</code> 파일에 정의됨)로 가져오는 것입니다.
          </p>

          <CodeBlock language="typescript" title="app.module.ts">
{`import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}`}
          </CodeBlock>
        </section>

        {/* 공유 모듈 */}
        <section>
          <h2 id="shared-modules" className="text-2xl font-semibold mb-4">공유 모듈</h2>
          <p className="text-muted-foreground mb-4">
            Nest에서 모듈은 기본적으로 <strong>싱글톤</strong>이므로, 여러 모듈 간에 쉽게 프로바이더의 
            동일한 인스턴스를 공유할 수 있습니다.
          </p>

          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="text-center">
                <Share2 className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <h4 className="font-medium mb-2">공유 모듈 패턴</h4>
                <div className="text-sm text-muted-foreground">
                  모든 모듈은 자동으로 <strong>공유 모듈</strong>입니다. 한 번 생성되면 모든 모듈에서 재사용할 수 있습니다.
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">CatsService</code> 인스턴스를 여러 다른 모듈 간에 
            공유하고 싶다고 가정해보겠습니다. 이를 위해서는 먼저 <code className="bg-muted px-1 py-0.5 rounded">exports</code> 
            배열에 <code className="bg-muted px-1 py-0.5 rounded">CatsService</code> 프로바이더를 추가하여 
            내보내야 합니다:
          </p>

          <CodeBlock language="typescript" title="cats.module.ts">
{`import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            이제 <code className="bg-muted px-1 py-0.5 rounded">CatsModule</code>을 가져오는 모든 모듈은 
            <code className="bg-muted px-1 py-0.5 rounded">CatsService</code>에 액세스할 수 있으며, 
            이를 가져오는 다른 모든 모듈과 동일한 인스턴스를 공유합니다.
          </p>
        </section>

        {/* 모듈 재내보내기 */}
        <section>
          <h2 id="module-re-exporting" className="text-2xl font-semibold mb-4">모듈 재내보내기</h2>
          <p className="text-muted-foreground mb-4">
            위에서 본 것처럼, 모듈은 내부 프로바이더를 내보낼 수 있습니다. 또한, 가져온 모듈을 다시 내보낼 수 있습니다. 
            아래 예제에서 <code className="bg-muted px-1 py-0.5 rounded">CommonModule</code>은 
            <code className="bg-muted px-1 py-0.5 rounded">CoreModule</code>에서 가져오고 내보내므로, 
            이 모듈을 가져오는 다른 모듈에서 사용할 수 있습니다.
          </p>

          <CodeBlock language="typescript" title="모듈 재내보내기 예제">
{`@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}`}
          </CodeBlock>
        </section>

        {/* 의존성 주입 */}
        <section>
          <h2 id="dependency-injection" className="text-2xl font-semibent mb-4">의존성 주입</h2>
          <p className="text-muted-foreground mb-4">
            모듈 클래스는 프로바이더도 <strong>주입</strong>할 수 있습니다(예: 구성 목적으로):
          </p>

          <CodeBlock language="typescript" title="cats.module.ts">
{`import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {
  constructor(private catsService: CatsService) {}
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            하지만, 모듈 클래스 자체는 <a href="/fundamentals/circular-dependency" className="text-primary hover:underline">순환 의존성</a> 
            때문에 프로바이더로 주입될 수 없습니다.
          </p>
        </section>

        {/* 글로벌 모듈 */}
        <section>
          <h2 id="global-modules" className="text-2xl font-semibold mb-4">글로벌 모듈</h2>
          <p className="text-muted-foreground mb-4">
            같은 모듈 집합을 어디에서나 가져와야 한다면, 지루할 수 있습니다. Angular와 달리 Nest에서는 
            <code className="bg-muted px-1 py-0.5 rounded">providers</code>가 글로벌 범위에 등록됩니다. 
            Angular에서는 <code className="bg-muted px-1 py-0.5 rounded">services</code>가 글로벌 범위에 등록됩니다. 
            일단 정의되면, 어디에서나 사용할 수 있습니다. 그러나 Nest는 모듈 범위 내에서 프로바이더를 캡슐화합니다. 
            캡슐화 모듈을 먼저 가져오지 않고는 다른 곳에서 모듈의 프로바이더를 사용할 수 없습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            어디에서나 사용할 수 있어야 하는 프로바이더 집합(예: 헬퍼, 데이터베이스 연결 등)을 제공하려고 할 때, 
            <code className="bg-muted px-1 py-0.5 rounded">@Global()</code> 데코레이터로 모듈을 <strong>글로벌</strong>로 만들 수 있습니다.
          </p>

          <CodeBlock language="typescript" title="글로벌 모듈 예제">
{`import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            <code className="bg-muted px-1 py-0.5 rounded">@Global()</code> 데코레이터는 모듈을 글로벌 범위로 만듭니다. 
            글로벌 모듈은 <strong>한 번만</strong> 등록되어야 하며, 일반적으로 루트 또는 코어 모듈에서 등록됩니다. 
            위 예제에서 <code className="bg-muted px-1 py-0.5 rounded">CatsService</code> 프로바이더는 어디에나 존재하며, 
            서비스를 주입하려는 모듈은 imports 배열에서 <code className="bg-muted px-1 py-0.5 rounded">CatsModule</code>을 
            가져올 필요가 없습니다.
          </p>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>힌트:</strong> 모든 것을 글로벌로 만드는 것은 좋은 설계 결정이 아닙니다. 
              글로벌 모듈은 필요한 상용구의 양을 줄이는 데 사용할 수 있습니다. 
              <code className="bg-amber-100 px-1 py-0.5 rounded">imports</code> 배열은 일반적으로 소비자가 
              모듈의 API를 사용할 수 있게 만드는 선호되는 방법입니다.
            </p>
          </div>
        </section>

        {/* 동적 모듈 */}
        <section>
          <h2 id="dynamic-modules" className="text-2xl font-semibold mb-4">동적 모듈</h2>
          <p className="text-muted-foreground mb-4">
            Nest 모듈 시스템에는 <strong>동적 모듈</strong>이라는 강력한 기능이 포함되어 있습니다. 
            이 기능을 사용하면 프로바이더를 동적으로 등록하고 구성할 수 있는 사용자 정의 가능한 모듈을 쉽게 만들 수 있습니다. 
            동적 모듈에 대해서는 <a href="/fundamentals/dynamic-modules" className="text-primary hover:underline">여기서</a> 
            자세히 다룹니다. 이 장에서는 모듈 소개를 완성하기 위해 간단한 개요를 제공하겠습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            다음은 <code className="bg-muted px-1 py-0.5 rounded">DatabaseModule</code>에 대한 동적 모듈 정의의 예입니다:
          </p>

          <CodeBlock language="typescript" title="동적 모듈 예제">
{`import { Module, DynamicModule } from '@nestjs/common';
import { createDatabaseProviders } from './database.providers';
import { Connection } from './connection.provider';

@Module({
  providers: [Connection],
})
export class DatabaseModule {
  static forRoot(entities = [], options?): DynamicModule {
    const providers = createDatabaseProviders(options, entities);
    return {
      module: DatabaseModule,
      providers: providers,
      exports: providers,
    };
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> <code className="bg-blue-100 px-1 py-0.5 rounded">forRoot()</code> 메소드는 
              동기적으로 또는 비동기적으로(<code className="bg-blue-100 px-1 py-0.5 rounded">Promise</code>를 통해) 
              동적 모듈을 반환할 수 있습니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            이 모듈은 기본적으로 <code className="bg-muted px-1 py-0.5 rounded">Connection</code> 프로바이더를 
            정의하지만(<code className="bg-muted px-1 py-0.5 rounded">@Module()</code> 데코레이터 메타데이터에서), 
            추가로 - <code className="bg-muted px-1 py-0.5 rounded">forRoot()</code> 메소드에 전달된 
            <code className="bg-muted px-1 py-0.5 rounded">entities</code>와 
            <code className="bg-muted px-1 py-0.5 rounded">options</code> 객체에 따라 - 프로바이더 컬렉션(예: 리포지토리)을 
            노출합니다. 동적 모듈에 의해 반환되는 속성은 <code className="bg-muted px-1 py-0.5 rounded">@Module()</code> 
            데코레이터에서 정의된 기본 모듈 메타데이터를 <strong>재정의</strong>하는 것이 아니라 <strong>확장</strong>한다는 점에 
            유의하세요.
          </p>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "프로바이더",
          href: "/providers",
          description: "의존성 주입과 서비스"
        }}
        next={{
          title: "미들웨어",
          href: "/middleware",
          description: "요청과 응답 사이의 미들웨어 처리"
        }}
      />
    </div>
  )
}