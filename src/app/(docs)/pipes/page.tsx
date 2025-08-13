import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Filter, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react'

export default function PipesPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '기본 개념', href: '/fundamentals' }, { title: '파이프' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">파이프</h1>
          <p className="text-xl text-muted-foreground mt-4">
            파이프는 <code className="bg-muted px-1 py-0.5 rounded">@Injectable()</code> 데코레이터로 어노테이션된 클래스입니다. 
            파이프는 <code className="bg-muted px-1 py-0.5 rounded">PipeTransform</code> 인터페이스를 구현해야 합니다.
          </p>
        </div>

        {/* 파이프 기능 시각화 */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Filter className="h-12 w-12 mx-auto text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold">파이프의 두 가지 주요 사용 사례</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="text-sm font-medium mb-1">변환 (Transformation)</div>
                <div className="text-xs text-muted-foreground">
                  입력 데이터를 원하는 형태로 변환<br/>
                  (예: 문자열을 정수로 변환)
                </div>
              </div>
              <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <div className="text-sm font-medium mb-1">검증 (Validation)</div>
                <div className="text-xs text-muted-foreground">
                  입력 데이터가 유효한지 평가<br/>
                  (유효하지 않으면 예외 발생)
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 개요 */}
        <section>
          <p className="text-muted-foreground mb-4">
            두 경우 모두, 파이프는 <strong>컨트롤러 라우트 핸들러</strong>에 의해 처리되는 인수에서 작동합니다. 
            Nest는 메서드가 호출되기 직전에 파이프를 삽입하고, 파이프는 메서드를 위한 인수를 받아 작동합니다. 
            모든 변환 또는 검증 작업이 그 시점에 발생하며, 그 후 라우트 핸들러가 (잠재적으로) 변환된 인수와 함께 호출됩니다.
          </p>
          
          <p className="text-muted-foreground">
            Nest에는 바로 사용할 수 있는 여러 내장 파이프가 함께 제공됩니다. 물론 사용자 정의 파이프를 구축할 수도 있습니다. 
            이 장에서는 내장 파이프를 소개하고 이를 라우트 핸들러에 바인딩하는 방법을 보여드리겠습니다. 
            그런 다음 몇 가지 사용자 정의 파이프를 살펴보고 처음부터 파이프를 구축하는 방법을 보여드리겠습니다.
          </p>
        </section>

        {/* 내장 파이프 */}
        <section>
          <h2 id="built-in-pipes" className="text-2xl font-semibold mb-4">내장 파이프</h2>
          <p className="text-muted-foreground mb-4">
            Nest는 9개의 파이프를 즉시 사용할 수 있도록 함께 제공합니다:
          </p>

          <div className="grid gap-3 mb-6">
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-blue-600">ValidationPipe</code>
              <p className="text-sm text-muted-foreground mt-1">입력 데이터 검증</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-green-600">ParseIntPipe</code>
              <p className="text-sm text-muted-foreground mt-1">문자열을 정수로 변환</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-purple-600">ParseFloatPipe</code>
              <p className="text-sm text-muted-foreground mt-1">문자열을 부동소수점으로 변환</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-orange-600">ParseBoolPipe</code>
              <p className="text-sm text-muted-foreground mt-1">문자열을 불린으로 변환</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-red-600">ParseArrayPipe</code>
              <p className="text-sm text-muted-foreground mt-1">문자열을 배열로 파싱</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-indigo-600">ParseUUIDPipe</code>
              <p className="text-sm text-muted-foreground mt-1">UUID 문자열 검증 및 파싱</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-teal-600">ParseEnumPipe</code>
              <p className="text-sm text-muted-foreground mt-1">열거형 값 검증</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-pink-600">DefaultValuePipe</code>
              <p className="text-sm text-muted-foreground mt-1">기본값 설정</p>
            </div>
            <div className="p-3 border rounded-lg">
              <code className="font-semibold text-gray-600">ParseFilePipe</code>
              <p className="text-sm text-muted-foreground mt-1">파일 업로드 검증</p>
            </div>
          </div>

          <p className="text-muted-foreground">
            이들은 <code className="bg-muted px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 내보내집니다.
          </p>
        </section>

        {/* 파이프 바인딩 */}
        <section>
          <h2 id="binding-pipes" className="text-2xl font-semibold mb-4">파이프 바인딩</h2>
          <p className="text-muted-foreground mb-4">
            파이프를 사용하려면 파이프 클래스의 인스턴스를 적절한 컨텍스트에 바인딩해야 합니다. 
            <code className="bg-muted px-1 py-0.5 rounded">ParseIntPipe</code> 예제에서, 파이프를 특정 라우트 핸들러 메서드와 
            연결하고 메서드가 호출되기 전에 실행되도록 하려고 합니다. 다음 구조로 이를 수행하며, 
            이를 매개변수 수준에서 파이프를 바인딩하는 것이라고 합니다:
          </p>

          <CodeBlock language="typescript" title="cats.controller.ts">
{`@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.catsService.findOne(id);
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            이렇게 하면 다음 두 조건 중 하나가 참인지 확인할 수 있습니다: 
            <code className="bg-muted px-1 py-0.5 rounded">findOne()</code> 메서드에서 받는 매개변수가 숫자이거나 
            (우리가 기대하는 대로), 라우트 핸들러가 호출되기 전에 예외가 발생합니다.
          </p>

          <p className="text-muted-foreground mt-4">
            예를 들어, 라우트가 다음과 같이 호출된다고 가정해보겠습니다:
          </p>

          <CodeBlock language="bash" title="HTTP 요청">
{`GET localhost:3000/abc`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            Nest는 다음과 같은 예외를 발생시킵니다:
          </p>

          <CodeBlock language="json" title="에러 응답">
{`{
  "statusCode": 400,
  "message": "Validation failed (numeric string is expected)",
  "error": "Bad Request"
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            예외는 <code className="bg-muted px-1 py-0.5 rounded">findOne()</code> 메서드의 본문이 실행되지 않도록 방지합니다.
          </p>

          <p className="text-muted-foreground mt-4">
            위 예제에서는 클래스(<code className="bg-muted px-1 py-0.5 rounded">ParseIntPipe</code>)를 전달하며, 
            인스턴스화의 책임을 프레임워크에 맡기고 의존성 주입을 활성화합니다. 파이프 및 가드와 마찬가지로, 
            대신 인플레이스 인스턴스를 전달할 수 있습니다. 인플레이스 인스턴스를 전달하는 것은 옵션을 전달하여 
            내장 파이프의 동작을 사용자 정의하려는 경우 유용합니다:
          </p>

          <CodeBlock language="typescript" title="파이프 옵션 사용">
{`@Get(':id')
async findOne(
  @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
  id: number,
) {
  return this.catsService.findOne(id);
}`}
          </CodeBlock>
        </section>

        {/* 사용자 정의 파이프 */}
        <section>
          <h2 id="custom-pipes" className="text-2xl font-semibold mb-4">사용자 정의 파이프</h2>
          <p className="text-muted-foreground mb-4">
            언급했듯이 사용자 정의 파이프를 구축할 수 있습니다. Nest는 강력한 내장 
            <code className="bg-muted px-1 py-0.5 rounded">ParseIntPipe</code> 및 
            <code className="bg-muted px-1 py-0.5 rounded">ValidationPipe</code>를 제공하지만, 
            사용자 정의 파이프가 어떻게 구성되는지 보기 위해 각각의 간단한 사용자 정의 버전을 처음부터 구축해보겠습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            간단한 <code className="bg-muted px-1 py-0.5 rounded">ValidationPipe</code>부터 시작하겠습니다. 
            처음에는 입력 값을 받아서 즉시 같은 값을 반환하여 항등 함수처럼 동작하도록 하겠습니다.
          </p>

          <CodeBlock language="typescript" title="validation.pipe.ts">
{`import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> <code className="bg-blue-100 px-1 py-0.5 rounded">PipeTransform&lt;T, R&gt;</code>은 
              모든 파이프가 구현해야 하는 제네릭 인터페이스입니다. 제네릭 인터페이스는 
              <code className="bg-blue-100 px-1 py-0.5 rounded">T</code>를 사용하여 입력 
              <code className="bg-blue-100 px-1 py-0.5 rounded">value</code>의 타입을 나타내고, 
              <code className="bg-blue-100 px-1 py-0.5 rounded">R</code>을 사용하여 
              <code className="bg-blue-100 px-1 py-0.5 rounded">transform()</code> 메서드의 반환 타입을 나타냅니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            모든 파이프는 <code className="bg-muted px-1 py-0.5 rounded">PipeTransform</code> 인터페이스 계약을 
            충족하기 위해 <code className="bg-muted px-1 py-0.5 rounded">transform()</code> 메서드를 구현해야 합니다. 
            이 메서드에는 두 개의 매개변수가 있습니다:
          </p>

          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">value</code>: 현재 처리된 메서드 인수 
              (라우트 핸들링 메서드에서 수신되기 전)
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">metadata</code>: 현재 처리된 메서드 인수의 메타데이터
            </li>
          </ul>
        </section>

        {/* 스키마 기반 검증 */}
        <section>
          <h2 id="schema-based-validation" className="text-2xl font-semibold mb-4">스키마 기반 검증</h2>
          <p className="text-muted-foreground mb-4">
            검증 파이프를 더 유용하게 만들어 보겠습니다. 
            <code className="bg-muted px-1 py-0.5 rounded">CatsController</code>의 
            <code className="bg-muted px-1 py-0.5 rounded">create()</code> 메서드를 자세히 살펴보면, 
            서비스 메서드를 실행하기 전에 게시물 본문 객체가 유효한지 확인하고 싶을 것입니다.
          </p>

          <CodeBlock language="typescript" title="cats.controller.ts">
{`@Post()
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            본문 매개변수 <code className="bg-muted px-1 py-0.5 rounded">createCatDto</code>에 집중해봅시다. 
            이것의 타입은 <code className="bg-muted px-1 py-0.5 rounded">CreateCatDto</code>입니다:
          </p>

          <CodeBlock language="typescript" title="create-cat.dto.ts">
{`export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            create 메서드로 들어오는 모든 요청이 유효한 본문을 포함하도록 보장하고 싶습니다. 
            따라서 <code className="bg-muted px-1 py-0.5 rounded">createCatDto</code> 객체의 세 멤버를 검증해야 합니다. 
            라우트 핸들러 메서드 내에서 이를 수행할 수 있지만, 그렇게 하면 <strong>단일 책임 원칙</strong>(SRP)을 위반하게 됩니다.
          </p>

          <p className="text-muted-foreground mt-4">
            또 다른 접근법은 <strong>검증기 클래스</strong>를 생성하고 그곳에 작업을 위임하는 것입니다. 
            이것은 각 메서드의 시작 부분에서 이 검증기를 호출해야 한다는 단점이 있습니다.
          </p>

          <p className="text-muted-foreground mt-4">
            검증 미들웨어를 생성하는 것은 어떨까요? 이것은 작동할 수 있지만, 안타깝게도 전체 애플리케이션의 모든 컨텍스트에서 
            사용할 수 있는 <strong>제네릭 미들웨어</strong>를 만드는 것은 불가능합니다. 
            이는 미들웨어가 <strong>실행 컨텍스트</strong>를 인식하지 못하기 때문입니다. 
            여기에는 호출될 핸들러와 그 매개변수가 포함됩니다.
          </p>

          <p className="text-muted-foreground">
            이것이 바로 파이프가 설계된 사용 사례입니다. 그러므로 검증 파이프를 개선해 보겠습니다.
          </p>
        </section>

        {/* 객체 스키마 검증 */}
        <section>
          <h2 id="object-schema-validation" className="text-2xl font-semibold mb-4">객체 스키마 검증</h2>
          <p className="text-muted-foreground mb-4">
            객체 검증을 깔끔하고 <strong>DRY</strong> 방식으로 수행하는 데 사용할 수 있는 몇 가지 접근법이 있습니다. 
            일반적인 접근법 중 하나는 <strong>스키마 기반</strong> 검증을 사용하는 것입니다. 
            <strong>Joi</strong> 라이브러리를 사용하여 이 접근법을 시도해보겠습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            Joi 라이브러리를 사용하면 읽기 쉬운 API를 사용하여 간단한 방법으로 스키마를 생성할 수 있습니다. 
            Joi 기반 스키마를 사용하는 검증 파이프를 구축해보겠습니다.
          </p>

          <p className="text-muted-foreground mb-4">필요한 패키지를 설치하는 것부터 시작합니다:</p>

          <CodeBlock language="bash" title="패키지 설치">
{`$ npm install --save joi
$ npm install --save-dev @types/joi`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">아래 코드 샘플에서, 스키마를 <code className="bg-muted px-1 py-0.5 rounded">constructor</code> 인수로 받는 간단한 클래스를 생성합니다. 그런 다음 제공된 스키마에 대해 들어오는 인수를 검증하는 <code className="bg-muted px-1 py-0.5 rounded">schema.validate()</code> 메서드를 적용합니다.</p>

          <CodeBlock language="typescript" title="joi-validation.pipe.ts">
{`import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}`}
          </CodeBlock>
        </section>

        {/* 파이프 사용 */}
        <section>
          <h2 id="binding-validation-pipes" className="text-2xl font-semibold mb-4">검증 파이프 바인딩</h2>
          <p className="text-muted-foreground mb-4">
            앞서 변환 파이프(예: <code className="bg-muted px-1 py-0.5 rounded">ParseIntPipe</code> 및 나머지 
            <code className="bg-muted px-1 py-0.5 rounded">Parse*</code> 파이프)를 바인딩하는 방법을 살펴봤습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            검증 파이프 바인딩도 매우 간단합니다. 이 경우, 메서드 호출 수준에서 파이프를 바인딩하려고 합니다. 
            현재 예제에서, <code className="bg-muted px-1 py-0.5 rounded">JoiValidationPipe</code>를 사용하려면 
            다음을 수행해야 합니다:
          </p>

          <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
            <li><code className="bg-muted px-1 py-0.5 rounded">JoiValidationPipe</code>의 인스턴스 생성</li>
            <li>파이프의 클래스 생성자에 컨텍스트별 Joi 스키마 전달</li>
            <li>파이프를 메서드에 바인딩</li>
          </ol>

          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">@UsePipes()</code> 데코레이터를 사용하여 이를 수행합니다:
          </p>

          <CodeBlock language="typescript" title="파이프 사용 예제">
{`@Post()
@UsePipes(new JoiValidationPipe(createCatSchema))
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>힌트:</strong> <code className="bg-green-100 px-1 py-0.5 rounded">@UsePipes()</code> 데코레이터는 
              <code className="bg-green-100 px-1 py-0.5 rounded">@nestjs/common</code> 패키지에서 가져옵니다.
            </p>
          </div>
        </section>

        {/* 클래스 검증기 */}
        <section>
          <h2 id="class-validator" className="text-2xl font-semibold mb-4">클래스 검증기</h2>
          <p className="text-muted-foreground mb-4">
            <strong>주의:</strong> 이 섹션의 기법들은 TypeScript가 필요하며, JavaScript로 앱을 작성하는 경우 사용할 수 없습니다.
          </p>

          <p className="text-muted-foreground mb-4">
            검증 기법의 대안적인 구현을 살펴보겠습니다. Nest는 <strong>class-validator</strong> 라이브러리와 잘 작동합니다. 
            이 강력한 라이브러리를 사용하면 데코레이터 기반 검증을 사용할 수 있습니다. 
            데코레이터 기반 검증은 처리된 속성의 메타타입에 접근할 수 있기 때문에 Nest의 파이프 기능과 결합할 때 매우 강력합니다.
          </p>

          <p className="text-muted-foreground mb-4">시작하기 전에 필요한 패키지를 설치해야 합니다:</p>

          <CodeBlock language="bash" title="클래스 검증기 설치">
{`$ npm i --save class-validator class-transformer`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            이것들이 설치되면, <code className="bg-muted px-1 py-0.5 rounded">CreateCatDto</code> 클래스에 
            몇 가지 데코레이터를 추가할 수 있습니다. 여기서 이 기법의 중요한 장점을 볼 수 있습니다: 
            <code className="bg-muted px-1 py-0.5 rounded">CreateCatDto</code> 클래스는 Post body 객체의 단일 진실 소스로 유지됩니다 
            (별도의 검증 클래스를 만들 필요가 없음).
          </p>

          <CodeBlock language="typescript" title="create-cat.dto.ts">
{`import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> class-validator 데코레이터에 대해 더 읽어보려면 
              <strong>여기를</strong> 참조하세요.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">이제 이러한 어노테이션을 사용하는 <code className="bg-muted px-1 py-0.5 rounded">ValidationPipe</code> 클래스를 생성할 수 있습니다:</p>

          <CodeBlock language="typescript" title="validation.pipe.ts">
{`import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}`}
          </CodeBlock>
        </section>

        {/* 글로벌 스코프 파이프 */}
        <section>
          <h2 id="global-scoped-pipes" className="text-2xl font-semibold mb-4">글로벌 스코프 파이프</h2>
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">ValidationPipe</code>는 가능한 한 일반적으로 작성되었기 때문에, 
            전체 애플리케이션의 모든 라우트 핸들러에 적용되도록 <strong>글로벌 스코프</strong> 파이프로 설정하여 
            유용성을 실현할 수 있습니다.
          </p>

          <CodeBlock language="typescript" title="main.ts">
{`async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>주의:</strong> 하이브리드 앱의 경우 <code className="bg-amber-100 px-1 py-0.5 rounded">useGlobalPipes()</code> 
              메서드는 게이트웨이와 마이크로 서비스에 대한 파이프를 설정하지 않습니다. 
              &quot;표준&quot; (비하이브리드) 마이크로서비스 앱의 경우, <code className="bg-amber-100 px-1 py-0.5 rounded">useGlobalPipes()</code>는 
              파이프를 전역으로 마운트합니다.
            </p>
          </div>

          <p className="text-muted-foreground mt-4">
            글로벌 파이프는 전체 애플리케이션에서, 모든 컨트롤러와 모든 라우트 핸들러에서 사용됩니다.
          </p>

          <p className="text-muted-foreground mt-4">
            의존성 주입 측면에서, 모듈 외부에서 등록된 글로벌 파이프 (위 예제에서처럼 <code className="bg-muted px-1 py-0.5 rounded">useGlobalPipes()</code>로) 
            는 바인딩이 모듈의 컨텍스트 외부에서 수행되었기 때문에 의존성을 주입할 수 없습니다. 
            이 문제를 해결하기 위해, 다음 구성을 사용하여 모든 모듈에서 직접 글로벌 파이프를 설정할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="app.module.ts">
{`import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> 파이프에 대한 의존성 주입을 수행하기 위해 이 접근법을 사용할 때, 
              이 구조가 사용되는 모듈에 관계없이 파이프는 실제로 글로벌이라는 점에 유의하세요. 
              이는 어디서 수행되어야 할까요? 파이프 (<code className="bg-blue-100 px-1 py-0.5 rounded">ValidationPipe</code>가 
              위 예제에서)가 정의된 모듈을 선택하세요. 또한, <code className="bg-blue-100 px-1 py-0.5 rounded">useClass</code>가 
              사용자 정의 프로바이더 등록을 처리하는 유일한 방법은 아닙니다. 
              <strong>여기서</strong> 더 알아보세요.
            </p>
          </div>
        </section>

        {/* 내장 ValidationPipe */}
        <section>
          <h2 id="built-in-validationpipe" className="text-2xl font-semibold mb-4">내장 ValidationPipe</h2>
          <p className="text-muted-foreground mb-4">
            알림으로, <code className="bg-muted px-1 py-0.5 rounded">ValidationPipe</code>를 처음부터 구축할 필요가 없다는 것입니다. 
            왜냐하면 Nest에서 바로 사용할 수 있는 <code className="bg-muted px-1 py-0.5 rounded">ValidationPipe</code>를 제공하기 때문입니다. 
            내장 <code className="bg-muted px-1 py-0.5 rounded">ValidationPipe</code>는 이 장에서 구축한 샘플보다 더 많은 옵션을 제공하며, 
            사용자 정의 파이프 구축의 메카닉을 설명하기 위해 기본적으로 유지되었습니다. 
            많은 세부사항과 예제는 <strong>여기서</strong> 찾을 수 있습니다.
          </p>
        </section>

        {/* 변환 사용 사례 */}
        <section>
          <h2 id="transformation-use-case" className="text-2xl font-semibold mb-4">변환 사용 사례</h2>
          <p className="text-muted-foreground mb-4">
            검증이 파이프의 유일한 사용 사례가 아닙니다. 이 장의 시작 부분에서, 파이프가 입력 데이터를 원하는 형식으로 
            <strong>변환</strong>할 수도 있다고 언급했습니다. 이는 <code className="bg-muted px-1 py-0.5 rounded">transform</code> 함수에서 
            반환된 값이 인수의 이전 값을 완전히 재정의하기 때문에 가능합니다.
          </p>

          <p className="text-muted-foreground mb-4">언제 이것이 유용할까요? 때때로 클라이언트에서 전달된 데이터가 라우트 핸들러 메서드에서 제대로 처리되기 전에 일부 변경을 거쳐야 하는 경우가 있습니다. 예를 들어, 문자열을 정수로 변환하거나, 누락된 사용자 데이터에 기본값을 제공하는 경우입니다. <strong>변환 파이프</strong>는 클라이언트 요청과 요청 핸들러 사이에 처리 함수를 삽입하여 이러한 기능을 수행할 수 있습니다.</p>

          <p className="text-muted-foreground mb-4">
            다음은 문자열을 정수 값으로 구문 분석하는 간단한 <code className="bg-muted px-1 py-0.5 rounded">ParseIntPipe</code>입니다. 
            (위에서 언급했듯이, Nest에는 더 정교한 내장 <code className="bg-muted px-1 py-0.5 rounded">ParseIntPipe</code>가 있습니다; 
            이를 사용자 정의 변환 파이프의 간단한 예로 포함합니다):
          </p>

          <CodeBlock language="typescript" title="parse-int.pipe.ts">
{`import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">그러면 선택된 매개변수에 이 파이프를 바인딩할 수 있습니다:</p>

          <CodeBlock language="typescript" title="파이프 바인딩">
{`@Get(':id')
async findOne(@Param('id', new ParseIntPipe()) id) {
  return this.catsService.findOne(id);
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            또 다른 유용한 변환 사례는 요청에 제공된 사용자 id를 사용하여 데이터베이스에서 <strong>기존 사용자</strong> 엔티티를 
            선택하는 것입니다:
          </p>

          <CodeBlock language="typescript" title="user-by-id.pipe.ts">
{`@Get(':id')
findOne(@Param('id', UserByIdPipe) userEntity: UserEntity) {
  return userEntity;
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            이 파이프의 구현은 독자에게 맡기지만, 다른 모든 변환 파이프와 마찬가지로 입력 값 (an <code className="bg-muted px-1 py-0.5 rounded">id</code>)을 
            받고 출력 값 (a <code className="bg-muted px-1 py-0.5 rounded">UserEntity</code> 객체)을 반환한다는 점에 유의하세요. 
            이렇게 하면 핸들러에서 공통 파이프로 상용구 코드를 추상화하여 코드를 더욱 선언적이고 <strong>DRY</strong>하게 만들 수 있습니다.
          </p>
        </section>

        {/* 기본값 제공 */}
        <section>
          <h2 id="providing-defaults" className="text-2xl font-semibold mb-4">기본값 제공</h2>
          <p className="text-muted-foreground mb-4">
            <code className="bg-muted px-1 py-0.5 rounded">Parse*</code> 파이프는 매개변수 값이 정의될 것으로 예상합니다. 
            그들은 <code className="bg-muted px-1 py-0.5 rounded">null</code> 또는 <code className="bg-muted px-1 py-0.5 rounded">undefined</code> 
            값을 받으면 예외를 발생시킵니다. 엔드포인트가 누락된 쿼리 문자열 매개변수 값을 처리할 수 있도록 하려면, 
            <code className="bg-muted px-1 py-0.5 rounded">Parse*</code> 파이프가 이러한 값에서 작동하기 전에 주입할 기본값을 제공해야 합니다. 
            <code className="bg-muted px-1 py-0.5 rounded">DefaultValuePipe</code>가 그 목적을 제공합니다. 
            관련 <code className="bg-muted px-1 py-0.5 rounded">Parse*</code> 파이프 전에 <code className="bg-muted px-1 py-0.5 rounded">@Query()</code> 
            데코레이터에서 <code className="bg-muted px-1 py-0.5 rounded">DefaultValuePipe</code>를 간단히 인스턴스화하십시오:
          </p>

          <CodeBlock language="typescript" title="기본값 파이프 사용">
{`@Get()
async findAll(
  @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe) activeOnly: boolean,
  @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
) {
  return this.catsService.findAll({ activeOnly, page });
}`}
          </CodeBlock>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "예외 필터",
          href: "/exception-filters",
          description: "예외 처리 및 필터링"
        }}
        next={{
          title: "가드",
          href: "/guards",  
          description: "인증 및 권한 부여"
        }}
      />
    </div>
  )
}