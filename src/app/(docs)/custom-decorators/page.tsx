import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Tag, Layers, Code, Zap, User, Key } from 'lucide-react'

export default function CustomDecoratorsPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '기본 개념', href: '/fundamentals' }, { title: '사용자 정의 데코레이터' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">사용자 정의 데코레이터</h1>
          <p className="text-xl text-muted-foreground mt-4">
            Nest는 <strong>데코레이터</strong>라는 언어 기능을 중심으로 구축되었습니다. 
            데코레이터는 많은 일반적으로 사용되는 프로그래밍 언어에서 잘 알려진 개념이지만, 
            JavaScript 세계에서는 여전히 상대적으로 새로운 개념입니다.
          </p>
        </div>

        {/* 데코레이터 개념 시각화 */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Tag className="h-12 w-12 mx-auto text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold">데코레이터의 다양한 활용</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <Code className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="text-sm font-medium mb-1">매개변수 데코레이터</div>
                <div className="text-xs text-muted-foreground">라우트 핸들러 매개변수 처리</div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Layers className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-sm font-medium mb-1">메서드 데코레이터</div>
                <div className="text-xs text-muted-foreground">메서드 레벨 메타데이터</div>
              </div>
              <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <Zap className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <div className="text-sm font-medium mb-1">클래스 데코레이터</div>
                <div className="text-xs text-muted-foreground">클래스 레벨 설정</div>
              </div>
              <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <User className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <div className="text-sm font-medium mb-1">사용자 객체</div>
                <div className="text-xs text-muted-foreground">현재 사용자 정보 추출</div>
              </div>
              <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <Key className="h-8 w-8 mx-auto mb-2 text-red-500" />
                <div className="text-sm font-medium mb-1">역할 메타데이터</div>
                <div className="text-xs text-muted-foreground">권한 기반 접근 제어</div>
              </div>
              <div className="text-center p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <Layers className="h-8 w-8 mx-auto mb-2 text-teal-500" />
                <div className="text-sm font-medium mb-1">조합 데코레이터</div>
                <div className="text-xs text-muted-foreground">여러 데코레이터 결합</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 개요 */}
        <section>
          <p className="text-muted-foreground mb-4">
            데코레이터를 더 잘 이해하기 위해, <strong>이 글</strong>을 읽어보는 것을 권장합니다. 
            간단히 말해서, 데코레이터는 클래스 선언과 멤버에 어노테이션과 메타-프로그래밍 구문을 모두 추가할 수 있는 
            표현식입니다. 아래는 간단한 정의입니다:
          </p>

          <div className="bg-muted p-4 rounded-lg mb-4">
            <p className="text-sm font-mono italic">
              ES2016 데코레이터는 함수를 반환하는 표현식으로, 대상(클래스, 메서드, 접근자, 속성 또는 매개변수)을 
              런타임에 호출할 수 있습니다. 데코레이터는 <code>@expression</code> 형식을 사용하며, 
              여기서 <code>expression</code>은 데코레이팅된 선언에 대한 정보와 함께 런타임에 호출될 함수로 계산되어야 합니다.
            </p>
          </div>
        </section>

        {/* 매개변수 데코레이터 */}
        <section>
          <h2 id="param-decorators" className="text-2xl font-semibold mb-4">매개변수 데코레이터</h2>
          <p className="text-muted-foreground mb-4">
            Nest는 HTTP 라우트 핸들러와 함께 사용할 수 있는 유용한 <strong>매개변수 데코레이터</strong> 집합을 제공합니다. 
            다음은 제공되는 데코레이터와 그들이 나타내는 일반적인 Express (또는 Fastify) 객체 목록입니다:
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 px-4 py-2 text-left">데코레이터</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Express/Fastify 객체</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>@Request(), @Req()</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>req</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>@Response(), @Res()</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>res</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>@Next()</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>next</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>@Session()</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>req.session</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>@Param(key?: string)</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>req.params / req.params[key]</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>@Body(key?: string)</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>req.body / req.body[key]</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>@Query(key?: string)</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>req.query / req.query[key]</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>@Headers(name?: string)</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>req.headers / req.headers[name]</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>@Ip()</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>req.ip</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>@HostParam()</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>req.hosts</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground mb-4">
            추가로, 자신만의 <strong>사용자 정의 데코레이터</strong>를 만들 수 있습니다. 
            이것이 왜 유용할까요?
          </p>

          <p className="text-muted-foreground">
            Node.js 세계에서는, <strong>request</strong> 객체에 속성을 첨부하는 것이 일반적인 관행입니다. 
            그런 다음 각 라우트 핸들러에서 다음과 같은 코드를 사용하여 수동으로 추출합니다:
          </p>

          <CodeBlock language="typescript" title="수동 속성 추출">
{`const user = req.user;`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            코드를 더 읽기 쉽고 투명하게 만들기 위해, <code className="bg-muted px-1 py-0.5 rounded">@User()</code> 
            데코레이터를 만들고 모든 컨트롤러에서 재사용할 수 있습니다.
          </p>

          <CodeBlock language="typescript" title="user.decorator.ts">
{`import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            그러면 요구사항에 맞는 곳 어디서나 간단히 사용할 수 있습니다.
          </p>

          <CodeBlock language="typescript" title="사용자 데코레이터 사용">
{`@Get()
async findOne(@User() user: UserEntity) {
  console.log(user);
}`}
          </CodeBlock>
        </section>

        {/* 데이터 전달 */}
        <section>
          <h2 id="passing-data" className="text-2xl font-semibold mb-4">데이터 전달</h2>
          <p className="text-muted-foreground mb-4">
            데코레이터의 동작이 일부 조건에 따라 달라지는 경우, <code className="bg-muted px-1 py-0.5 rounded">data</code> 매개변수를 
            사용하여 데코레이터의 팩토리 함수에 인수를 전달할 수 있습니다. 한 가지 사용 사례는 키로 request 객체에서 
            속성을 추출하는 사용자 정의 데코레이터입니다. 예를 들어, <strong>인증 레이어</strong>가 요청을 검증하고 
            사용자 엔티티를 request 객체에 첨부한다고 가정해 보겠습니다. 인증된 요청에 대한 사용자 엔티티는 다음과 같을 수 있습니다:
          </p>

          <CodeBlock language="json" title="사용자 객체 예시">
{`{
  "id": 101,
  "firstName": "Alan",
  "lastName": "Turing",
  "email": "alan@email.com",
  "roles": ["admin"]
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            속성 이름을 키로 받고 연관된 값이 존재하는 경우 (또는 사용자 객체가 생성되지 않았거나 context에서 검색되지 않은 경우 undefined) 
            반환하는 데코레이터를 정의해 보겠습니다.
          </p>

          <CodeBlock language="typescript" title="개선된 user.decorator.ts">
{`import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            이제 컨트롤러에서 <code className="bg-muted px-1 py-0.5 rounded">@User()</code> 데코레이터를 통해 
            특정 속성에 접근할 수 있는 방법은 다음과 같습니다:
          </p>

          <CodeBlock language="typescript" title="속성별 사용자 정보 접근">
{`@Get()
async findOne(@User('firstName') firstName: string) {
  console.log(\`Hello \${firstName}\`);
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            다른 키와 함께 이 동일한 데코레이터를 사용하여 다른 속성에 접근할 수 있습니다. 
            <code className="bg-muted px-1 py-0.5 rounded">user</code> 객체가 깊거나 복잡한 경우, 
            이렇게 하면 요청 핸들러 구현을 더 쉽고 읽기 쉽게 만들 수 있습니다.
          </p>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> TypeScript 사용자의 경우, <code className="bg-green-100 px-1 py-0.5 rounded">createParamDecorator&lt;T&gt;()</code>는 
              제네릭입니다. 이것은 타입 안전성을 명시적으로 강화할 수 있음을 의미합니다. 
              예: <code className="bg-green-100 px-1 py-0.5 rounded">createParamDecorator&lt;string&gt;((data, ctx) =&gt; ...)</code>. 
              또는, 팩토리 함수에서 매개변수 타입을 지정할 수 있습니다. 
              예: <code className="bg-green-100 px-1 py-0.5 rounded">createParamDecorator((data: string, ctx) =&gt; ...)</code>. 
              둘 다 생략하면, <code className="bg-green-100 px-1 py-0.5 rounded">data</code>의 타입은 <code className="bg-green-100 px-1 py-0.5 rounded">any</code>가 됩니다.
            </p>
          </div>
        </section>

        {/* 파이프와 함께 작업하기 */}
        <section>
          <h2 id="working-with-pipes" className="text-2xl font-semibold mb-4">파이프와 함께 작업하기</h2>
          <p className="text-muted-foreground mb-4">
            Nest는 사용자 정의 매개변수 데코레이터를 내장된 것들과 같은 방식으로 처리합니다 
            (<code className="bg-muted px-1 py-0.5 rounded">@Body()</code>, <code className="bg-muted px-1 py-0.5 rounded">@Param()</code> 및 
            <code className="bg-muted px-1 py-0.5 rounded">@Query()</code>). 이것은 파이프가 사용자 정의 어노테이션된 매개변수에 대해서도 실행된다는 것을 의미합니다 
            (우리의 예에서는 <code className="bg-muted px-1 py-0.5 rounded">user</code> 인수). 게다가, 사용자 정의 데코레이터에 직접 파이프를 적용할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="사용자 정의 데코레이터에 파이프 적용">
{`@Get()
async findOne(
  @User(new ValidationPipe({ validateCustomDecorators: true }))
  user: UserEntity,
) {
  console.log(user);
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> <code className="bg-blue-100 px-1 py-0.5 rounded">validateCustomDecorators</code> 옵션은 true로 설정되어야 합니다. 
              <code className="bg-blue-100 px-1 py-0.5 rounded">ValidationPipe</code>는 기본적으로 사용자 정의 데코레이터로 어노테이션된 인수를 검증하지 않습니다.
            </p>
          </div>
        </section>

        {/* 데코레이터 조합 */}
        <section>
          <h2 id="decorator-composition" className="text-2xl font-semibold mb-4">데코레이터 조합</h2>
          <p className="text-muted-foreground mb-4">
            Nest는 여러 데코레이터를 조합하는 헬퍼 메서드를 제공합니다. 예를 들어, 인증과 관련된 모든 데코레이터를 
            단일 데코레이터로 조합하려고 한다고 가정해보겠습니다. 이것은 다음 구조로 수행할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="auth.decorator.ts">
{`import { applyDecorators } from '@nestjs/common';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            그러면 이 사용자 정의 <code className="bg-muted px-1 py-0.5 rounded">@Auth()</code> 데코레이터를 다음과 같이 사용할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="조합된 데코레이터 사용">
{`@Get('users')
@Auth('admin')
findAllUsers() {}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            이렇게 하면 네 개의 데코레이터를 모두 단일 선언으로 적용하는 효과가 있습니다.
          </p>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>주의:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">@nestjs/swagger</code> 패키지의 
              <code className="bg-amber-100 px-1 py-0.5 rounded">@ApiHideProperty()</code> 데코레이터는 조합할 수 없으며 
              <code className="bg-amber-100 px-1 py-0.5 rounded">applyDecorators</code> 함수와 제대로 작동하지 않습니다.
            </p>
          </div>
        </section>

        {/* 실제 예제들 */}
        <section>
          <h2 id="practical-examples" className="text-2xl font-semibold mb-4">실제 예제들</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">IP 주소 데코레이터</h3>
              <CodeBlock language="typescript" title="ip.decorator.ts">
{`import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const IpAddress = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.ip;
  },
);`}
              </CodeBlock>
              
              <CodeBlock language="typescript" title="사용 예시">
{`@Get()
async findAll(@IpAddress() ip: string) {
  console.log(\`Request from IP: \${ip}\`);
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">현재 시간 데코레이터</h3>
              <CodeBlock language="typescript" title="timestamp.decorator.ts">
{`import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentTime = createParamDecorator(
  (format: string, ctx: ExecutionContext) => {
    const now = new Date();
    return format === 'iso' ? now.toISOString() : now.getTime();
  },
);`}
              </CodeBlock>

              <CodeBlock language="typescript" title="사용 예시">
{`@Post()
async create(
  @Body() createDto: CreateDto,
  @CurrentTime('iso') timestamp: string
) {
  console.log(\`Created at: \${timestamp}\`);
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">쿠키 데코레이터</h3>
              <CodeBlock language="typescript" title="cookie.decorator.ts">
{`import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Cookie = createParamDecorator(
  (name: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return name ? request.cookies?.[name] : request.cookies;
  },
);`}
              </CodeBlock>

              <CodeBlock language="typescript" title="사용 예시">
{`@Get()
async findAll(@Cookie('sessionId') sessionId: string) {
  console.log(\`Session ID: \${sessionId}\`);
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">역할 검증이 포함된 사용자 데코레이터</h3>
              <CodeBlock language="typescript" title="user-with-roles.decorator.ts">
{`import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const UserWithRoles = createParamDecorator(
  (requiredRoles: string[], ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    
    if (requiredRoles && requiredRoles.length > 0) {
      const hasRole = requiredRoles.some(role => user.roles?.includes(role));
      if (!hasRole) {
        throw new UnauthorizedException('Insufficient privileges');
      }
    }
    
    return user;
  },
);`}
              </CodeBlock>

              <CodeBlock language="typescript" title="사용 예시">
{`@Get('admin')
async getAdminData(@UserWithRoles(['admin']) user: UserEntity) {
  return this.adminService.getData(user.id);
}`}
              </CodeBlock>
            </div>
          </div>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "인터셉터",
          href: "/interceptors",
          description: "요청/응답 인터셉트 및 변환"
        }}
        next={{
          title: "의존성 주입",
          href: "/fundamentals/dependency-injection",
          description: "의존성 주입 심화 이해"
        }}
      />
    </div>
  )
}