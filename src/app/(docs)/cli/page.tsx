import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Terminal, Zap, Package, FileText, Wrench, Layers } from 'lucide-react'

export default function CliPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '소개', href: '/introduction' }, { title: 'CLI' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">CLI</h1>
          <p className="text-xl text-muted-foreground mt-4">
            Nest CLI는 Nest 애플리케이션을 초기화, 개발 및 유지 관리하는 데 도움이 되는 명령줄 인터페이스 도구입니다. 
            여러 가지 방법으로 도움이 되며, 프로젝트 스캐폴딩, 개발 모드에서 서빙, 프로덕션용 애플리케이션 빌드 및 번들링을 지원합니다.
          </p>
        </div>

        {/* CLI 기능 시각화 */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Terminal className="h-12 w-12 mx-auto text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold">Nest CLI 주요 기능</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <Package className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="text-sm font-medium mb-1">프로젝트 생성</div>
                <div className="text-xs text-muted-foreground">새 Nest 애플리케이션 스캐폴딩</div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <FileText className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-sm font-medium mb-1">코드 생성</div>
                <div className="text-xs text-muted-foreground">컨트롤러, 서비스 등 자동 생성</div>
              </div>
              <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <Zap className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <div className="text-sm font-medium mb-1">개발 서버</div>
                <div className="text-xs text-muted-foreground">핫 리로딩 지원</div>
              </div>
              <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <Wrench className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <div className="text-sm font-medium mb-1">빌드 시스템</div>
                <div className="text-xs text-muted-foreground">프로덕션용 빌드 및 번들링</div>
              </div>
              <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <Layers className="h-8 w-8 mx-auto mb-2 text-red-500" />
                <div className="text-sm font-medium mb-1">모듈 관리</div>
                <div className="text-xs text-muted-foreground">라이브러리와 모노레포 지원</div>
              </div>
              <div className="text-center p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <FileText className="h-8 w-8 mx-auto mb-2 text-teal-500" />
                <div className="text-sm font-medium mb-1">테스트 도구</div>
                <div className="text-xs text-muted-foreground">단위 및 E2E 테스트 지원</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 설치 */}
        <section>
          <h2 id="installation" className="text-2xl font-semibold mb-4">설치</h2>
          <p className="text-muted-foreground mb-4">
            <strong>참고</strong>: 이 가이드에서는 <strong>npm</strong>을 사용하여 패키지를 설치한다고 가정합니다. 
            원한다면 <strong>yarn</strong>을 사용할 수도 있습니다. yarn을 사용하는 경우, 
            해당하는 명령어로 다음 명령어를 바꿔 사용하세요. 또한, <strong>yarn create nest &lt;프로젝트명&gt;</strong>으로 
            새 프로젝트를 초기화할 수 있습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            OS 터미널에서 다음 명령어로 CLI를 설치하세요:
          </p>

          <CodeBlock language="bash" title="전역 설치">
{`$ npm install -g @nestjs/cli`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트</strong>: 또는, <strong>npx @nestjs/cli@latest</strong>를 사용하여 
              전역으로 설치하지 않고 CLI를 실행할 수도 있습니다.
            </p>
          </div>
        </section>

        {/* 기본 워크플로우 */}
        <section>
          <h2 id="basic-workflow" className="text-2xl font-semibold mb-4">기본 워크플로우</h2>
          <p className="text-muted-foreground mb-4">
            설치가 완료되면, OS 명령 줄에서 직접 CLI 명령어를 호출할 수 있습니다. 
            사용 가능한 <strong>nest</strong> 명령어를 확인하려면 다음을 입력하세요:
          </p>

          <CodeBlock language="bash" title="도움말">
{`$ nest --help`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            개별 명령어에 대한 도움말을 보려면 다음 구조를 사용하세요. 
            다음 예제에서 <strong>generate</strong> 명령어 (또는 그 별칭인 <strong>g</strong>)에 대한 도움말과 옵션을 확인하세요:
          </p>

          <CodeBlock language="bash" title="개별 명령어 도움말">
{`$ nest generate --help`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            새 기본 Nest 프로젝트를 생성, 빌드 및 실행하려면 새 프로젝트 폴더로 이동한 후 다음 명령어를 실행하세요:
          </p>

          <CodeBlock language="bash" title="새 프로젝트 생성">
{`$ nest new my-nest-project
$ cd my-nest-project
$ npm run start`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            브라우저에서 <strong>http://localhost:3000</strong>을 열어서 새 애플리케이션이 실행 중인지 확인하세요. 
            앱은 소스 파일이 변경되는 것을 자동으로 감시하고 서버를 다시 시작합니다.
          </p>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트</strong>: 더 빠른 빌드를 위해 (10배 이상), 
              <strong>--builder swc</strong> 플래그를 사용할 수 있습니다. 
              예: <strong>nest new my-nest-project --builder swc</strong>
            </p>
          </div>
        </section>

        {/* 프로젝트 구조 */}
        <section>
          <h2 id="project-structure" className="text-2xl font-semibold mb-4">프로젝트 구조</h2>
          <p className="text-muted-foreground mb-4">
            <strong>nest new</strong>를 실행하면 Nest가 새 폴더를 만들고 초기 핵심 Nest 파일과 지원 모듈로 
            폴더를 채워 프로젝트의 기본 구조를 만듭니다:
          </p>

          <CodeBlock language="text" title="프로젝트 구조">
{`src
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">다음은 이러한 핵심 파일들에 대한 간략한 개요입니다:</p>

          <div className="grid gap-3 mt-4">
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-blue-600">app.controller.ts</code>
              <p className="text-sm text-muted-foreground mt-1">단일 라우트를 가진 기본 컨트롤러</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-green-600">app.controller.spec.ts</code>
              <p className="text-sm text-muted-foreground mt-1">컨트롤러를 위한 단위 테스트</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-purple-600">app.module.ts</code>
              <p className="text-sm text-muted-foreground mt-1">애플리케이션의 루트 모듈</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-orange-600">app.service.ts</code>
              <p className="text-sm text-muted-foreground mt-1">단일 메서드를 가진 기본 서비스</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-red-600">main.ts</code>
              <p className="text-sm text-muted-foreground mt-1">핵심 함수 <code>NestFactory</code>를 사용하여 Nest 애플리케이션 인스턴스를 만드는 애플리케이션 엔트리 파일</p>
            </div>
          </div>

          <p className="text-muted-foreground mt-4">
            <code className="bg-muted px-1 py-0.5 rounded">main.ts</code>는 애플리케이션을 부트스트랩하는 비동기 함수를 포함합니다:
          </p>

          <CodeBlock language="typescript" title="main.ts">
{`import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            Nest 애플리케이션 인스턴스를 생성하기 위해, 우리는 핵심 <code className="bg-muted px-1 py-0.5 rounded">NestFactory</code> 클래스를 사용합니다. 
            <code className="bg-muted px-1 py-0.5 rounded">NestFactory</code>는 애플리케이션 인스턴스를 생성할 수 있는 몇 가지 정적 메서드를 노출합니다. 
            <code className="bg-muted px-1 py-0.5 rounded">create()</code> 메서드는 <code className="bg-muted px-1 py-0.5 rounded">INestApplication</code> 인터페이스를 
            충족하는 애플리케이션 객체를 반환합니다. 이 객체는 다음 장에서 설명할 메서드 집합을 제공합니다. 
            위의 <code className="bg-muted px-1 py-0.5 rounded">main.ts</code> 예제에서는 단순히 HTTP 리스너를 시작하여 
            애플리케이션이 인바운드 HTTP 요청을 기다리도록 합니다.
          </p>
        </section>

        {/* CLI 명령 구문 */}
        <section>
          <h2 id="cli-command-syntax" className="text-2xl font-semibold mb-4">CLI 명령 구문</h2>
          <p className="text-muted-foreground mb-4">
            모든 <strong>nest</strong> 명령어는 동일한 형식을 따릅니다:
          </p>

          <CodeBlock language="bash" title="명령어 구문">
{`nest commandOrAlias requiredArg [optionalArg] [options]`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            예를 들어:
          </p>

          <CodeBlock language="bash" title="예제">
{`$ nest new my-nest-project --dry-run`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            여기서 <strong>new</strong>는 <em>commandOrAlias</em>입니다. 
            <strong>new</strong> 명령어는 <strong>n</strong> 별칭을 가지고 있습니다. 
            <strong>my-nest-project</strong>는 <em>requiredArg</em>입니다. 
            명령어가 <em>requiredArg</em>를 허용하고 제공되지 않으면, <strong>nest</strong>는 입력하라는 메시지를 표시합니다. 
            또한, <strong>--dry-run</strong>에는 동등한 짧은 핸드 형식 <strong>-d</strong>가 있습니다. 
            이를 염두에 두고 다음 명령어는 동등합니다:
          </p>

          <CodeBlock language="bash" title="동등한 명령어들">
{`$ nest new my-nest-project --dry-run
$ nest n my-nest-project -d`}
          </CodeBlock>
        </section>

        {/* 명령 개요 */}
        <section>
          <h2 id="command-overview" className="text-2xl font-semibold mb-4">명령 개요</h2>
          <p className="text-muted-foreground mb-4">
            <strong>nest &lt;command&gt; --help</strong>를 실행하여 모든 명령어에 대한 도움말을 볼 수 있습니다.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 px-4 py-2 text-left">명령어</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">별칭</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>new</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>n</code></td>
                  <td className="border border-gray-300 px-4 py-2">새 표준 모드 애플리케이션을 스캐폴딩합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>generate</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>g</code></td>
                  <td className="border border-gray-300 px-4 py-2">스키매틱을 기반으로 파일을 생성하거나 수정합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>build</code></td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">애플리케이션이나 워크스페이스를 출력 폴더로 컴파일합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>start</code></td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">애플리케이션을 컴파일하고 실행합니다 (또는 워크스페이스의 기본 프로젝트).</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>add</code></td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">외부 라이브러리에 대한 지원을 가져와서 구성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>update</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>u</code></td>
                  <td className="border border-gray-300 px-4 py-2">package.json &quot;dependencies&quot; 목록의 @nestjs/* 종속성을 최신 버전으로 업데이트합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>info</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>i</code></td>
                  <td className="border border-gray-300 px-4 py-2">설치된 nest 패키지 및 기타 유용한 시스템 정보를 표시합니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Generate 명령어 */}
        <section>
          <h2 id="generate-command" className="text-2xl font-semibold mb-4">generate 명령어</h2>
          <p className="text-muted-foreground mb-4">
            <strong>nest generate</strong> 명령어는 다양한 유형의 코드 아티팩트를 생성합니다. 
            다음 표는 사용 가능한 스키매틱을 보여줍니다:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 px-4 py-2 text-left">스키매틱</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">별칭</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>app</code></td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">모노레포 내에 새 애플리케이션을 생성합니다 (모노레포로 변환).</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>library</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>lib</code></td>
                  <td className="border border-gray-300 px-4 py-2">모노레포 내에 새 라이브러리를 생성합니다 (모노레포로 변환).</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>class</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>cl</code></td>
                  <td className="border border-gray-300 px-4 py-2">새 클래스를 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>controller</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>co</code></td>
                  <td className="border border-gray-300 px-4 py-2">컨트롤러 선언을 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>decorator</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>d</code></td>
                  <td className="border border-gray-300 px-4 py-2">사용자 정의 데코레이터를 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>filter</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>f</code></td>
                  <td className="border border-gray-300 px-4 py-2">필터 선언을 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>gateway</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>ga</code></td>
                  <td className="border border-gray-300 px-4 py-2">게이트웨이 선언을 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>guard</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>gu</code></td>
                  <td className="border border-gray-300 px-4 py-2">가드 선언을 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>interceptor</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>in</code></td>
                  <td className="border border-gray-300 px-4 py-2">인터셉터 선언을 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>middleware</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>mi</code></td>
                  <td className="border border-gray-300 px-4 py-2">미들웨어 선언을 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>module</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>mo</code></td>
                  <td className="border border-gray-300 px-4 py-2">모듈 선언을 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>pipe</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>pi</code></td>
                  <td className="border border-gray-300 px-4 py-2">파이프 선언을 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>provider</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>pr</code></td>
                  <td className="border border-gray-300 px-4 py-2">프로바이더 선언을 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>resolver</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>r</code></td>
                  <td className="border border-gray-300 px-4 py-2">리졸버 선언을 생성합니다.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>service</code></td>
                  <td className="border border-gray-300 px-4 py-2"><code>s</code></td>
                  <td className="border border-gray-300 px-4 py-2">서비스 선언을 생성합니다.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground mt-4">예시:</p>

          <CodeBlock language="bash" title="서비스 생성">
{`$ nest generate service users
$ nest g s users`}
          </CodeBlock>
        </section>

        {/* 개발 워크플로우 */}
        <section>
          <h2 id="development-workflow" className="text-2xl font-semibold mb-4">개발 워크플로우</h2>
          <p className="text-muted-foreground mb-4">
            개발하는 동안, 일반적으로 컴파일과 재로드의 반복적인 사이클로 애플리케이션을 실행하게 됩니다. 
            다행히 Nest는 개발 과정에서 애플리케이션을 크게 가속화하는 몇 가지 유용한 도구를 제공합니다.
          </p>

          <div className="grid gap-3">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">개발 모드 (감시 모드)</h4>
              <CodeBlock language="bash">
{`$ npm run start:dev`}
              </CodeBlock>
              <p className="text-sm text-muted-foreground mt-2">
                파일 변경을 감시하고 자동으로 서버를 재시작합니다.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">디버그 모드</h4>
              <CodeBlock language="bash">
{`$ npm run start:debug`}
              </CodeBlock>
              <p className="text-sm text-muted-foreground mt-2">
                디버그 정보와 함께 감시 모드로 실행합니다.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">프로덕션 모드</h4>
              <CodeBlock language="bash">
{`$ npm run build
$ npm run start:prod`}
              </CodeBlock>
              <p className="text-sm text-muted-foreground mt-2">
                최적화된 프로덕션 빌드를 생성하고 실행합니다.
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>성능 팁</strong>: SWC 빌더를 사용하면 10배 더 빠른 빌드가 가능합니다. 
              <code className="bg-amber-100 px-1 py-0.5 rounded">nest start --builder swc</code> 또는 
              <code className="bg-amber-100 px-1 py-0.5 rounded">nest start --builder swc --watch</code>를 사용하세요.
            </p>
          </div>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "첫 번째 단계",
          href: "/first-steps",
          description: "NestJS 프로젝트 기본 구조 이해하기"
        }}
        next={{
          title: "컨트롤러",
          href: "/controllers",
          description: "HTTP 요청 처리하기"
        }}
      />
    </div>
  )
}