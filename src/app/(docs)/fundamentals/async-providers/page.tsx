import Breadcrumb from '@/components/docs/breadcrumb'
import CodeBlock from '@/components/docs/code-block'
import PageNavigation from '@/components/docs/page-navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Database, Wifi, Settings, Zap, RefreshCw } from 'lucide-react'

export default function AsyncProvidersPage() {
  return (
    <div className="py-6 space-y-8">
      <Breadcrumb items={[{ title: '고급 기법', href: '/fundamentals' }, { title: '비동기 프로바이더' }]} />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">비동기 프로바이더</h1>
          <p className="text-xl text-muted-foreground mt-4">
            때때로 애플리케이션 시작은 하나 이상의 <strong>비동기 작업</strong>이 완료될 때까지 지연되어야 합니다. 
            예를 들어, 데이터베이스와의 연결이 설정될 때까지 요청 수락을 시작하고 싶지 않을 수 있습니다. 
            비동기 프로바이더를 사용하여 이를 달성할 수 있습니다.
          </p>
        </div>

        {/* 비동기 프로바이더 개념 시각화 */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Clock className="h-12 w-12 mx-auto text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold">비동기 프로바이더 사용 사례</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <Database className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="text-sm font-medium mb-1">데이터베이스 연결</div>
                <div className="text-xs text-muted-foreground">DB 연결 대기</div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Wifi className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-sm font-medium mb-1">외부 API 연결</div>
                <div className="text-xs text-muted-foreground">서드파티 서비스 초기화</div>
              </div>
              <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <Settings className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <div className="text-sm font-medium mb-1">설정 로드</div>
                <div className="text-xs text-muted-foreground">원격 설정 파일 로드</div>
              </div>
              <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <Zap className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <div className="text-sm font-medium mb-1">캐시 초기화</div>
                <div className="text-xs text-muted-foreground">Redis 등 캐시 연결</div>
              </div>
              <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <RefreshCw className="h-8 w-8 mx-auto mb-2 text-red-500" />
                <div className="text-sm font-medium mb-1">라이센스 검증</div>
                <div className="text-xs text-muted-foreground">외부 라이센스 서버</div>
              </div>
              <div className="text-center p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <Database className="h-8 w-8 mx-auto mb-2 text-teal-500" />
                <div className="text-sm font-medium mb-1">마이그레이션</div>
                <div className="text-xs text-muted-foreground">DB 스키마 업데이트</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 개요 */}
        <section>
          <p className="text-muted-foreground mb-4">
            이를 수행하는 구문은 <code className="bg-muted px-1 py-0.5 rounded">async/await</code>와 함께 
            <code className="bg-muted px-1 py-0.5 rounded">useFactory</code> 구문을 사용하는 것입니다. 
            팩토리는 <code className="bg-muted px-1 py-0.5 rounded">Promise</code>를 반환하고, 
            팩토리 함수는 비동기 작업을 <code className="bg-muted px-1 py-0.5 rounded">await</code>할 수 있습니다. 
            Nest는 그러한 프로바이더에 의존하는 (주입하는) 클래스를 인스턴스화하기 전에 Promise의 해결을 기다릴 것입니다.
          </p>
        </section>

        {/* 기본 예제 */}
        <section>
          <h2 id="basic-example" className="text-2xl font-semibold mb-4">기본 예제</h2>
          <p className="text-muted-foreground mb-4">
            다음은 비동기 팩토리 프로바이더의 간단한 예제입니다:
          </p>

          <CodeBlock language="typescript" title="비동기 팩토리 프로바이더">
{`{
  provide: 'ASYNC_CONNECTION',
  useFactory: async (): Promise<Connection> => {
    const connection = await createConnection(options);
    return connection;
  },
}`}
          </CodeBlock>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>힌트:</strong> 사용자 정의 프로바이더 구문에 대해 더 알아보려면 
              <strong>여기서</strong> 확인하세요.
            </p>
          </div>
        </section>

        {/* 주입 */}
        <section>
          <h2 id="injection" className="text-2xl font-semibold mb-4">주입</h2>
          <p className="text-muted-foreground mb-4">
            비동기 프로바이더는 다른 컴포넌트에 토큰으로 주입됩니다. 위의 예제에서, 
            <code className="bg-muted px-1 py-0.5 rounded">@Inject(&apos;ASYNC_CONNECTION&apos;)</code> 구성을 사용할 것입니다.
          </p>

          <CodeBlock language="typescript" title="비동기 프로바이더 주입">
{`@Injectable()
export class CatsRepository {
  constructor(
    @Inject('ASYNC_CONNECTION') private connection: Connection,
  ) {}
}`}
          </CodeBlock>
        </section>

        {/* 실제 예제 */}
        <section>
          <h2 id="example" className="text-2xl font-semibold mb-4">예제</h2>
          <p className="text-muted-foreground mb-4">
            <strong>TypeORM</strong>은 비동기 프로바이더의 실제 예제입니다. 
            <code className="bg-muted px-1 py-0.5 rounded">TypeOrmModule.forRoot()</code>는 비동기 프로바이더를 반환합니다. 
            이는 모든 의존 모듈(제공된 엔티티, 연결 옵션 등에 의존하는 모듈)이 인스턴스화되기 전에 Nest가 
            데이터베이스 연결이 설정될 때까지 기다린다는 것을 의미합니다.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">데이터베이스 연결 예제</h3>
              <CodeBlock language="typescript" title="database.providers.ts">
{`import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<Connection> => 
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      }),
  },
];`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Redis 연결 예제</h3>
              <CodeBlock language="typescript" title="redis.providers.ts">
{`import { createClient } from 'redis';

export const redisProviders = [
  {
    provide: 'REDIS_CLIENT',
    useFactory: async (): Promise<RedisClient> => {
      const client = createClient({
        host: 'localhost',
        port: 6379,
      });
      
      await client.connect();
      return client;
    },
  },
];`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">HTTP 클라이언트 예제</h3>
              <CodeBlock language="typescript" title="http-client.providers.ts">
{`import axios from 'axios';

export const httpProviders = [
  {
    provide: 'HTTP_CLIENT',
    useFactory: async (): Promise<AxiosInstance> => {
      // 외부 서비스의 헬스체크 대기
      const healthCheck = async () => {
        try {
          await axios.get('https://api.example.com/health');
          return true;
        } catch (error) {
          return false;
        }
      };

      // 서비스가 사용 가능할 때까지 재시도
      while (!(await healthCheck())) {
        console.log('Waiting for external service...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }

      return axios.create({
        baseURL: 'https://api.example.com',
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  },
];`}
              </CodeBlock>
            </div>
          </div>
        </section>

        {/* 의존성이 있는 비동기 프로바이더 */}
        <section>
          <h2 id="async-providers-with-dependencies" className="text-2xl font-semibold mb-4">의존성이 있는 비동기 프로바이더</h2>
          <p className="text-muted-foreground mb-4">
            비동기 프로바이더도 다른 프로바이더에 의존할 수 있습니다. 
            <code className="bg-muted px-1 py-0.5 rounded">inject</code> 배열을 사용하여 의존성을 주입할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="의존성이 있는 비동기 프로바이더">
{`{
  provide: 'ASYNC_CONNECTION',
  useFactory: async (configService: ConfigService): Promise<Connection> => {
    const options = configService.getDatabaseOptions();
    const connection = await createConnection(options);
    return connection;
  },
  inject: [ConfigService],
}`}
          </CodeBlock>

          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium mb-3">설정 기반 데이터베이스 연결</h3>
              <CodeBlock language="typescript" title="config-database.providers.ts">
{`export const configDatabaseProviders = [
  {
    provide: 'CONFIG_DATABASE_CONNECTION',
    useFactory: async (
      configService: ConfigService,
      loggerService: LoggerService,
    ): Promise<Connection> => {
      const dbConfig = configService.get('database');
      
      try {
        loggerService.log('Connecting to database...');
        
        const connection = await createConnection({
          type: dbConfig.type,
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.name,
          entities: dbConfig.entities,
          synchronize: dbConfig.synchronize,
        });
        
        loggerService.log('Database connection established');
        return connection;
      } catch (error) {
        loggerService.error('Failed to connect to database', error);
        throw error;
      }
    },
    inject: [ConfigService, LoggerService],
  },
];`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">다중 의존성이 있는 캐시 프로바이더</h3>
              <CodeBlock language="typescript" title="cache.providers.ts">
{`export const cacheProviders = [
  {
    provide: 'CACHE_MANAGER',
    useFactory: async (
      configService: ConfigService,
      metricsService: MetricsService,
    ): Promise<CacheManager> => {
      const cacheConfig = configService.get('cache');
      
      // Redis 연결 초기화
      const redisClient = createClient({
        host: cacheConfig.redis.host,
        port: cacheConfig.redis.port,
        password: cacheConfig.redis.password,
      });

      await redisClient.connect();

      // 캐시 매니저 생성
      const cacheManager = new CacheManager(redisClient);

      // 메트릭 수집 설정
      cacheManager.onHit(() => metricsService.increment('cache.hit'));
      cacheManager.onMiss(() => metricsService.increment('cache.miss'));

      return cacheManager;
    },
    inject: [ConfigService, MetricsService],
  },
];`}
              </CodeBlock>
            </div>
          </div>
        </section>

        {/* 모듈에서 사용 */}
        <section>
          <h2 id="using-in-modules" className="text-2xl font-semibold mb-4">모듈에서 사용</h2>
          <p className="text-muted-foreground mb-4">
            비동기 프로바이더를 모듈에서 등록하고 사용하는 방법입니다:
          </p>

          <CodeBlock language="typescript" title="database.module.ts">
{`import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            이제 다른 모듈에서 <code className="bg-muted px-1 py-0.5 rounded">DatabaseModule</code>을 가져와서 
            데이터베이스 연결을 사용할 수 있습니다:
          </p>

          <CodeBlock language="typescript" title="cats.module.ts">
{`import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}`}
          </CodeBlock>

          <CodeBlock language="typescript" title="cats.service.ts">
{`import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private connection: Connection,
  ) {}

  async findAll(): Promise<Cat[]> {
    const repository = this.connection.getRepository(Cat);
    return repository.find();
  }
}`}
          </CodeBlock>
        </section>

        {/* 오류 처리 */}
        <section>
          <h2 id="error-handling" className="text-2xl font-semibold mb-4">오류 처리</h2>
          <p className="text-muted-foreground mb-4">
            비동기 프로바이더에서 발생하는 오류는 애플리케이션 부트스트랩을 중단시킵니다. 
            적절한 오류 처리와 재시도 로직을 구현하는 것이 중요합니다:
          </p>

          <CodeBlock language="typescript" title="오류 처리가 있는 비동기 프로바이더">
{`{
  provide: 'ROBUST_DATABASE_CONNECTION',
  useFactory: async (
    configService: ConfigService,
    loggerService: LoggerService,
  ): Promise<Connection> => {
    const maxRetries = 5;
    const retryDelay = 3000; // 3초
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        loggerService.log(\`Database connection attempt \${attempt}/\${maxRetries}\`);
        
        const connection = await createConnection({
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: false,
          logging: configService.get('NODE_ENV') === 'development',
          connectTimeoutMS: 10000,
          acquireTimeoutMS: 10000,
        });

        loggerService.log('Database connection successful');
        return connection;
        
      } catch (error) {
        loggerService.error(\`Database connection attempt \${attempt} failed:, error\`);
        
        if (attempt === maxRetries) {
          loggerService.error('Max retries reached, application startup failed');
          throw new Error(\`Failed to connect to database after \${maxRetries} attempts\`);
        }
        
        loggerService.log(\`Retrying in \${retryDelay}ms...\`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      }
    }
  },
  inject: [ConfigService, LoggerService],
}`}
          </CodeBlock>
        </section>

        {/* 고급 패턴 */}
        <section>
          <h2 id="advanced-patterns" className="text-2xl font-semibold mb-4">고급 패턴</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">조건부 프로바이더</h3>
              <p className="text-muted-foreground mb-3">
                환경에 따라 다른 프로바이더를 제공할 수 있습니다:
              </p>
              <CodeBlock language="typescript" title="조건부 비동기 프로바이더">
{`{
  provide: 'CONDITIONAL_SERVICE',
  useFactory: async (configService: ConfigService): Promise<any> => {
    const environment = configService.get('NODE_ENV');
    
    if (environment === 'production') {
      // 프로덕션 환경에서는 실제 외부 서비스 연결
      const service = new ExternalApiService();
      await service.connect();
      return service;
    } else if (environment === 'test') {
      // 테스트 환경에서는 모킹된 서비스
      return new MockApiService();
    } else {
      // 개발 환경에서는 로컬 서비스
      const service = new LocalApiService();
      await service.initialize();
      return service;
    }
  },
  inject: [ConfigService],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">연결 풀 관리</h3>
              <p className="text-muted-foreground mb-3">
                데이터베이스 연결 풀과 같은 리소스 관리:
              </p>
              <CodeBlock language="typescript" title="연결 풀 프로바이더">
{`{
  provide: 'DATABASE_POOL',
  useFactory: async (configService: ConfigService): Promise<Pool> => {
    const pool = new Pool({
      connectionString: configService.get('DATABASE_URL'),
      max: 20, // 최대 연결 수
      min: 5,  // 최소 연결 수
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });

    // 연결 테스트
    const client = await pool.connect();
    await client.query('SELECT NOW()');
    client.release();

    // 우아한 종료를 위한 이벤트 리스너 추가
    process.on('SIGINT', async () => {
      await pool.end();
    });

    return pool;
  },
  inject: [ConfigService],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">헬스체크 통합</h3>
              <p className="text-muted-foreground mb-3">
                비동기 프로바이더와 헬스체크 통합:
              </p>
              <CodeBlock language="typescript" title="헬스체크 통합">
{`{
  provide: 'HEALTH_CHECKED_SERVICE',
  useFactory: async (
    configService: ConfigService,
    healthService: HealthService,
  ): Promise<ExternalService> => {
    const service = new ExternalService(configService.get('EXTERNAL_API_URL'));
    
    // 서비스 연결
    await service.connect();
    
    // 헬스체크에 등록
    healthService.addHealthIndicator('external-service', async () => {
      try {
        await service.ping();
        return { status: 'up', service: 'external-service' };
      } catch (error) {
        return { status: 'down', service: 'external-service', error: error.message };
      }
    });

    return service;
  },
  inject: [ConfigService, HealthService],
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        {/* 모범 사례 */}
        <section>
          <h2 id="best-practices" className="text-2xl font-semibold mb-4">모범 사례</h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">✅ 권장사항</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• 적절한 타임아웃과 재시도 로직 구현</li>
                <li>• 상세한 로깅으로 디버깅 용이성 확보</li>
                <li>• 환경별 설정 분리</li>
                <li>• 우아한 종료 처리</li>
                <li>• 헬스체크와 모니터링 통합</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">❌ 주의사항</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• 무한정 대기하는 비동기 작업 피하기</li>
                <li>• 메모리 누수를 일으킬 수 있는 미해제 리소스</li>
                <li>• 너무 많은 동시 연결로 인한 리소스 고갈</li>
                <li>• 오류 발생 시 적절하지 않은 처리</li>
                <li>• 테스트 환경에서 실제 외부 서비스 연결</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <PageNavigation
        prev={{
          title: "의존성 주입",
          href: "/fundamentals/dependency-injection",
          description: "의존성 주입 심화 이해"
        }}
        next={{
          title: "동적 모듈",
          href: "/fundamentals/dynamic-modules",
          description: "런타임에 모듈 구성하기"
        }}
      />
    </div>
  )
}