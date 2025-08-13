import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Key, Lock, UserCheck } from 'lucide-react'

export default function GuardsPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '기본 개념', href: '/fundamentals' }, { title: '가드' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">가드</h1>
          <p className="text-xl text-muted-foreground mt-4">
            가드는 <code className="bg-muted px-1 py-0.5 rounded">@Injectable()</code> 데코레이터로 어노테이션된 클래스입니다. 
            가드는 <code className="bg-muted px-1 py-0.5 rounded">CanActivate</code> 인터페이스를 구현해야 합니다.
          </p>
        </div>

        {/* 가드 기능 시각화 */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Shield className="h-12 w-12 mx-auto text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold">가드의 단일 책임</h3>
              <p className="text-sm text-muted-foreground mt-2">
                런타임에 존재하는 특정 조건(권한, 역할, ACL 등)에 따라 주어진 요청이 라우트 핸들러에서 처리될지 결정
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <Key className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="text-sm font-medium mb-1">인증 (Authentication)</div>
                <div className="text-xs text-muted-foreground">사용자 신원 확인</div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Lock className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-sm font-medium mb-1">권한 부여 (Authorization)</div>
                <div className="text-xs text-muted-foreground">접근 권한 확인</div>
              </div>
              <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <UserCheck className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <div className="text-sm font-medium mb-1">역할 기반 제어</div>
                <div className="text-xs text-muted-foreground">사용자 역할 검증</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 개요 */}
        <section>
          <p className="text-muted-foreground mb-4">
            가드는 <strong>권한 부여</strong>라고도 하는 단일 책임을 가지고 있습니다. 전통적인 Express 애플리케이션에서, 
            권한 부여(및 인증, 종종 밀접하게 협력)는 일반적으로 <strong>미들웨어</strong>에 의해 처리됩니다. 
            미들웨어는 토큰 검증 및 <code className="bg-muted px-1 py-0.5 rounded">request</code> 객체에 속성을 첨부하는 
            것과 같은 작업에 대한 좋은 선택입니다.
          </p>
          
          <p className="text-muted-foreground mb-4">
            하지만 미들웨어는 본질상 둔합니다. <code className="bg-muted px-1 py-0.5 rounded">next()</code> 함수를 호출한 후 
            어떤 핸들러가 실행될지 알지 못합니다. 반면, <strong>가드</strong>는 <code className="bg-muted px-1 py-0.5 rounded">ExecutionContext</code> 
            인스턴스에 접근할 수 있으므로 다음에 실행될 것이 정확히 무엇인지 알 수 있습니다. 
            예외 필터, 파이프 및 인터셉터와 마찬가지로, 요청/응답 사이클의 정확한 지점에서 처리 로직을 끼워넣고 
            선언적으로 수행할 수 있도록 설계되었습니다. 이는 코드를 건조하고 선언적으로 유지하는 데 도움이 됩니다.
          </p>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> 가드는 모든 미들웨어 <strong>이후</strong>에 실행되지만 인터셉터나 파이프 <strong>이전</strong>에 실행됩니다.
            </p>
          </div>
        </section>

        {/* 인증 가드 */}
        <section>
          <h2 id="authorization-guard" className="text-2xl font-semibold mb-4">권한 부여 가드</h2>
          <p className="text-muted-foreground mb-4">
            언급했듯이, <strong>권한 부여</strong>는 가드의 훌륭한 사용 사례입니다. 왜냐하면 특정 경로는 호출자(일반적으로 특정 인증된 사용자)가 
            충분한 권한을 가질 때만 사용할 수 있어야 하기 때문입니다. 지금 구축할 <code className="bg-muted px-1 py-0.5 rounded">AuthGuard</code>는 
            인증된 사용자를 가정합니다(따라서 토큰이 요청 헤더에 첨부됨). 토큰을 추출하고 검증하며, 추출된 정보를 사용하여 요청이 진행될 수 있는지 결정합니다.
          </p>

          <CodeBlock language="typescript" title="auth.guard.ts">
{`import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

function validateRequest(request: any): boolean {
  // 여기에 인증 로직 구현
  return true;
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> 실제 애플리케이션에서 인증 메커니즘 구현에 대한 더 정교한 예를 찾고 있다면, 
              <strong>이 장</strong>을 방문하세요. 마찬가지로, 더 정교한 권한 부여 예제는 <strong>이 페이지</strong>를 참조하세요.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            <code className="bg-muted px-1 py-0.5 rounded">validateRequest()</code> 함수 내부의 로직은 필요에 따라 간단하거나 정교할 수 있습니다. 
            이 예제의 주요 포인트는 가드가 요청/응답 사이클에 어떻게 맞는지 보여주는 것입니다.
          </p>

          <p className="text-muted-foreground mt-4">
            모든 가드는 <code className="bg-muted px-1 py-0.5 rounded">canActivate()</code> 함수를 구현해야 합니다. 
            이 함수는 현재 요청이 허용되는지 여부를 나타내는 불리언을 반환해야 합니다. 
            응답을 동기적으로 또는 비동기적으로 (<code className="bg-muted px-1 py-0.5 rounded">Promise</code> 또는 
            <code className="bg-muted px-1 py-0.5 rounded">Observable</code>을 통해) 반환할 수 있습니다. 
            Nest는 반환값을 사용하여 다음 동작을 제어합니다:
          </p>

          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">true</code>를 반환하면, 요청이 처리됩니다.
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">false</code>를 반환하면, Nest는 요청을 거부합니다.
            </li>
          </ul>
        </section>

        {/* 실행 컨텍스트 */}
        <section>
          <h2 id="execution-context" className="text-2xl font-semibold mb-4">실행 컨텍스트</h2>
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">canActivate()</code> 함수는 단일 인수, 
            <code className="bg-muted px-1 py-0.5 rounded">ExecutionContext</code> 인스턴스를 받습니다. 
            <code className="bg-muted px-1 py-0.5 rounded">ExecutionContext</code>는 <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code>에서 상속됩니다. 
            위의 예외 필터 장에서 <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code>를 이전에 보았습니다. 
            위 샘플에서, 우리는 <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code>에 정의된 동일한 헬퍼 메서드를 
            사용하여 <code className="bg-muted px-1 py-0.5 rounded">Request</code> 객체에 대한 참조를 얻습니다. 
            이 주제에 대한 자세한 내용은 예외 필터 장의 <strong>Arguments host 섹션</strong>을 다시 참조할 수 있습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">ArgumentsHost</code>를 확장함으로써, 
            <code className="bg-muted px-1 py-0.5 rounded">ExecutionContext</code>는 현재 실행 프로세스에 대한 추가 세부정보를 
            제공하는 몇 가지 새로운 헬퍼 메서드를 추가합니다. 이러한 세부정보는 광범위한 컨트롤러, 메서드 및 실행 컨텍스트에서 
            작동할 수 있는 더 일반적인 가드를 구축하는 데 도움이 될 수 있습니다. <code className="bg-muted px-1 py-0.5 rounded">ExecutionContext</code>에 
            대한 자세한 내용은 <strong>여기서</strong> 확인하세요.
          </p>
        </section>

        {/* 역할 기반 인증 */}
        <section>
          <h2 id="role-based-authentication" className="text-2xl font-semibold mb-4">역할 기반 인증</h2>
          <p className="text-muted-foreground mb-4">
            특정 역할을 가진 사용자에게만 접근을 허용하는 더 기능적인 가드를 구축해보겠습니다. 
            기본 가드 템플릿부터 시작해서 다음 섹션에서 이를 구축해나가겠습니다. 지금은 모든 요청이 진행되도록 허용합니다:
          </p>

          <CodeBlock language="typescript" title="roles.guard.ts">
{`import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}`}
          </CodeBlock>
        </section>

        {/* 가드 바인딩 */}
        <section>
          <h2 id="binding-guards" className="text-2xl font-semibold mb-4">가드 바인딩</h2>
          <p className="text-muted-foreground mb-4">
            파이프와 예외 필터와 마찬가지로, 가드는 <strong>컨트롤러-스코프</strong>, 메서드-스코프, 또는 글로벌-스코프일 수 있습니다. 
            아래에서, <code className="bg-muted px-1 py-0.5 rounded">@UseGuards()</code> 데코레이터를 사용하여 컨트롤러-스코프 가드를 설정합니다. 
            이 데코레이터는 단일 인수를 받을 수도 있고, 쉼표로 구분된 인수 목록을 받을 수도 있습니다. 
            이를 통해 하나의 선언으로 적절한 가드 세트를 쉽게 적용할 수 있습니다.
          </p>

          <CodeBlock language="typescript" title="컨트롤러에 가드 적용">
{`@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> <code className="bg-green-100 px-1 py-0.5 rounded">@UseGuards()</code> 데코레이터는 
              <code className="bg-green-100 px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 가져옵니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            위에서, 우리는 클래스 (인스턴스가 아닌)를 전달했으며, 인스턴스화의 책임을 프레임워크에 맡기고 의존성 주입을 활성화했습니다. 
            파이프 및 예외 필터와 마찬가지로, 인플레이스 인스턴스를 전달할 수도 있습니다:
          </p>

          <CodeBlock language="typescript" title="인스턴스로 가드 적용">
{`@Controller('cats')
@UseGuards(new RolesGuard())
export class CatsController {}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            위의 구성은 이 컨트롤러에서 선언된 모든 핸들러에 가드를 첨부합니다. 가드가 단일 메서드에만 적용되기를 원한다면, 
            <strong>메서드 수준</strong>에서 <code className="bg-muted px-1 py-0.5 rounded">@UseGuards()</code> 데코레이터를 적용합니다.
          </p>

          <p className="text-muted-foreground mt-4">글로벌 가드를 설정하려면, Nest 애플리케이션 인스턴스의 <code className="bg-muted px-1 py-0.5 rounded">useGlobalGuards()</code> 메서드를 사용합니다:</p>

          <CodeBlock language="typescript" title="글로벌 가드 설정">
{`const app = await NestFactory.create(AppModule);
app.useGlobalGuards(new RolesGuard());`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>주의:</strong> 하이브리드 앱의 경우 <code className="bg-amber-100 px-1 py-0.5 rounded">useGlobalGuards()</code> 
              메서드는 게이트웨이와 마이크로 서비스에 대한 가드를 설정하지 않습니다 
              (이 동작을 변경하는 방법에 대한 정보는 <strong>Hybrid application</strong>을 참조). 
              &quot;표준&quot; (비하이브리드) 마이크로서비스 앱의 경우, <code className="bg-amber-100 px-1 py-0.5 rounded">useGlobalGuards()</code>는 
              가드를 전역으로 마운트합니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            글로벌 가드는 전체 애플리케이션에서, 모든 컨트롤러와 모든 라우트 핸들러에 사용됩니다. 
            의존성 주입 측면에서, 모듈 외부에서 등록된 글로벌 가드 (위 예제에서처럼 <code className="bg-muted px-1 py-0.5 rounded">useGlobalGuards()</code>로) 
            는 모듈의 컨텍스트 외부에서 수행되었기 때문에 의존성을 주입할 수 없습니다. 이 문제를 해결하기 위해, 
            다음 구성을 사용하여 모듈에서 직접 가드를 설정할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="모듈에서 글로벌 가드 설정">
{`import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> 가드에 대한 의존성 주입을 수행하기 위해 이 접근법을 사용할 때, 
              이 구조가 사용되는 모듈에 관계없이 가드는 실제로 전역이라는 점에 유의하세요. 
              이는 어디서 수행되어야 할까요? 가드 (<code className="bg-blue-100 px-1 py-0.5 rounded">RolesGuard</code>가 
              위 예제에서)가 정의된 모듈을 선택하세요. 또한, <code className="bg-blue-100 px-1 py-0.5 rounded">useClass</code>가 
              사용자 정의 프로바이더 등록을 처리하는 유일한 방법은 아닙니다. 
              <strong>여기서</strong> 더 알아보세요.
            </p>
          </div>
        </section>

        {/* 핸들러별 역할 설정 */}
        <section>
          <h2 id="setting-roles-per-handler" className="text-2xl font-semibold mb-4">핸들러별 역할 설정</h2>
          <p className="text-muted-foreground mb-4">
            우리의 <code className="bg-muted px-1 py-0.5 rounded">RolesGuard</code>는 작동하지만 아직 가장 스마트하지는 않습니다. 
            우리는 아직 가드의 가장 중요한 기능인 <strong>실행 컨텍스트</strong>를 활용하지 않고 있습니다. 
            아직 역할에 대해 알지 못하거나 각 핸들러에 허용되는 역할을 알지 못합니다. 
            예를 들어, <code className="bg-muted px-1 py-0.5 rounded">CatsController</code>는 서로 다른 경로에 대해 
            서로 다른 권한 스키마를 가질 수 있습니다. 일부는 관리자 사용자만 사용할 수 있고, 
            다른 일부는 모든 사람에게 열려 있을 수 있습니다. 어떻게 유연하고 재사용 가능한 방식으로 역할을 경로에 일치시킬 수 있을까요?
          </p>

          <p className="text-muted-foreground mb-4">
            여기서 <strong>사용자 정의 메타데이터</strong>가 등장합니다 (<strong>여기서</strong> 더 알아보기). 
            Nest는 <code className="bg-muted px-1 py-0.5 rounded">Reflector#createDecorator</code> 정적 메서드를 통해 또는 
            내장된 <code className="bg-muted px-1 py-0.5 rounded">@SetMetadata()</code> 데코레이터를 통해 
            라우트 핸들러에 사용자 정의 <strong>메타데이터</strong>를 첨부하는 기능을 제공합니다.
          </p>

          <CodeBlock language="typescript" title="roles.decorator.ts">
{`import { Reflector } from '@nestjs/core';

export const Roles = Reflector.createDecorator<string[]>();`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            <code className="bg-muted px-1 py-0.5 rounded">Roles</code> 데코레이터는 여기서 <code className="bg-muted px-1 py-0.5 rounded">string[]</code> 
            타입을 받는 함수입니다. 이제 이 데코레이터를 사용하려면, 단순히 핸들러에 어노테이션하기만 하면 됩니다:
          </p>

          <CodeBlock language="typescript" title="cats.controller.ts">
{`@Post()
@Roles(['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}

@Get()
@Roles(['admin'])
async findAll(): Promise<Cat[]> {
  return this.catsService.findAll();
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            또는, 내장된 <code className="bg-muted px-1 py-0.5 rounded">@SetMetadata()</code> 데코레이터를 사용할 수도 있습니다:
          </p>

          <CodeBlock language="typescript" title="@SetMetadata() 사용">
{`@Post()
@SetMetadata('roles', ['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}`}
          </CodeBlock>
        </section>

        {/* 모든 것을 하나로 */}
        <section>
          <h2 id="putting-it-all-together" className="text-2xl font-semibold mb-4">모든 것을 하나로 합치기</h2>
          <p className="text-muted-foreground mb-4">
            이제 다시 돌아가서 <code className="bg-muted px-1 py-0.5 rounded">RolesGuard</code>를 완성해보겠습니다. 
            현재는 단순히 모든 요청에 대해 <code className="bg-muted px-1 py-0.5 rounded">true</code>를 반환하여 
            모든 요청이 진행되도록 허용합니다. 현재 사용자에게 할당된 역할을 처리되는 현재 라우트에서 요구하는 실제 역할과 
            비교하여 반환 값을 조건부로 만들고 싶습니다. 라우트의 역할(사용자 정의 메타데이터)에 접근하기 위해, 
            <code className="bg-muted px-1 py-0.5 rounded">Reflector</code> 헬퍼 클래스를 다시 사용하겠습니다:
          </p>

          <CodeBlock language="typescript" title="roles.guard.ts">
{`import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride(Roles, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> Node.js 세계에서는, 인증된 사용자를 <code className="bg-blue-100 px-1 py-0.5 rounded">request</code> 
              객체에 첨부하는 것이 일반적인 관행입니다. 따라서 위의 샘플 코드에서, 우리는 
              <code className="bg-blue-100 px-1 py-0.5 rounded">request.user</code>가 사용자 인스턴스와 허용된 역할을 
              포함한다고 가정합니다. 앱에서는 사용자 정의 <strong>인증 가드</strong> (또는 미들웨어)에서 이 연관을 만들 것입니다. 
              이 주제에 대한 자세한 내용은 <strong>이 장</strong>을 확인하세요.
            </p>
          </div>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>주의:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">Reflector</code>를 사용자 컨텍스트에서 사용하는 
              방법에 대한 더 많은 세부정보는 <strong>실행 컨텍스트</strong> 장을 확인하세요.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            충분한 권한이 없는 사용자가 엔드포인트를 요청하면, Nest는 자동으로 다음 응답을 반환합니다:
          </p>

          <CodeBlock language="json" title="403 Forbidden 응답">
{`{
  "statusCode": 403,
  "message": "Forbidden resource",
  "error": "Forbidden"
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            가드가 <code className="bg-muted px-1 py-0.5 rounded">false</code>를 반환할 때, 프레임워크는 
            <code className="bg-muted px-1 py-0.5 rounded">ForbiddenException</code>을 발생시킨다는 점에 유의하세요. 
            다른 오류 응답을 반환하려면, 특정 예외를 발생시켜야 합니다. 예를 들어:
          </p>

          <CodeBlock language="typescript" title="사용자 정의 예외">
{`throw new UnauthorizedException();`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            가드에서 발생한 모든 예외는 <strong>예외 레이어</strong> (글로벌 예외 필터 및 현재 컨텍스트에 적용되는 모든 예외 필터)에서 처리됩니다.
          </p>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "파이프",
          href: "/pipes",
          description: "데이터 변환 및 검증"
        }}
        next={{
          title: "인터셉터",
          href: "/interceptors",
          description: "요청/응답 인터셉트 및 변환"
        }}
      />
    </div>
  )
}