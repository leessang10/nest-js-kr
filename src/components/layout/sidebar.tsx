'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, ChevronDown, Book, Code, Shield, Database, Zap, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

interface NavItem {
  title: string
  href?: string
  icon?: React.ReactNode
  badge?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: '소개',
    icon: <Book className="h-4 w-4" />,
    children: [
      { title: '시작하기', href: '/introduction' },
      { title: '첫 번째 단계', href: '/first-steps' },
      { title: 'CLI', href: '/cli' },
    ]
  },
  {
    title: '기본 개념',
    icon: <Code className="h-4 w-4" />,
    children: [
      { title: '컨트롤러', href: '/controllers' },
      { title: '프로바이더', href: '/providers' },
      { title: '모듈', href: '/modules' },
      { title: '미들웨어', href: '/middleware' },
      { title: '예외 필터', href: '/exception-filters' },
      { title: '파이프', href: '/pipes' },
      { title: '가드', href: '/guards' },
      { title: '인터셉터', href: '/interceptors' },
      { title: '데코레이터', href: '/custom-decorators' },
    ]
  },
  {
    title: '고급 기법',
    icon: <Zap className="h-4 w-4" />,
    children: [
      { title: '의존성 주입', href: '/fundamentals/dependency-injection' },
      { title: '비동기 프로바이더', href: '/fundamentals/async-providers' },
      { title: '동적 모듈', href: '/fundamentals/dynamic-modules' },
      { title: '주입 스코프', href: '/fundamentals/injection-scopes' },
      { title: '순환 의존성', href: '/fundamentals/circular-dependency' },
    ]
  },
  {
    title: '보안',
    icon: <Shield className="h-4 w-4" />,
    children: [
      { title: '인증', href: '/security/authentication' },
      { title: '권한 부여', href: '/security/authorization' },
      { title: '암호화 및 해싱', href: '/security/encryption-hashing' },
      { title: 'Helmet', href: '/security/helmet' },
      { title: 'CORS', href: '/security/cors' },
      { title: 'CSRF', href: '/security/csrf' },
      { title: '속도 제한', href: '/security/rate-limiting' },
    ]
  },
  {
    title: '데이터베이스',
    icon: <Database className="h-4 w-4" />,
    children: [
      { title: 'TypeORM', href: '/techniques/database' },
      { title: 'Mongoose', href: '/techniques/mongodb' },
      { title: 'Prisma', href: '/recipes/prisma' },
    ]
  },
  {
    title: '구성',
    icon: <Settings className="h-4 w-4" />,
    children: [
      { title: '구성', href: '/techniques/configuration' },
      { title: '검증', href: '/techniques/validation' },
      { title: '캐싱', href: '/techniques/caching' },
      { title: '로깅', href: '/techniques/logger' },
      { title: '압축', href: '/techniques/compression' },
    ]
  }
]

const Sidebar = () => {
  const pathname = usePathname()
  
  return (
    <div className="w-full lg:w-64">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-auto py-6 px-2 lg:px-4">
        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <NavItemComponent 
              key={index} 
              item={item} 
              pathname={pathname}
              level={0}
            />
          ))}
        </nav>
      </div>
    </div>
  )
}

interface NavItemComponentProps {
  item: NavItem
  pathname: string
  level: number
}

const NavItemComponent = ({ item, pathname, level }: NavItemComponentProps) => {
  const [isOpen, setIsOpen] = useState(() => {
    // 현재 경로가 이 섹션에 포함되어 있으면 열림 상태로 시작
    if (item.children) {
      return item.children.some(child => child.href === pathname)
    }
    return false
  })
  
  const hasChildren = item.children && item.children.length > 0
  const isActive = item.href === pathname
  
  const handleToggle = () => {
    if (hasChildren) {
      setIsOpen(!isOpen)
    }
  }
  
  return (
    <div>
      <div 
        className={cn(
          "flex items-center w-full px-2 py-2 text-sm rounded-md transition-colors",
          level > 0 ? "ml-4" : "",
          isActive 
            ? "bg-accent text-accent-foreground font-medium" 
            : "hover:bg-accent/50",
          hasChildren ? "cursor-pointer" : ""
        )}
        onClick={handleToggle}
      >
        {hasChildren ? (
          <>
            <div className="flex items-center flex-1">
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <span>{item.title}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-auto text-xs">
                  {item.badge}
                </Badge>
              )}
            </div>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 ml-1" />
            ) : (
              <ChevronRight className="h-4 w-4 ml-1" />
            )}
          </>
        ) : (
          <Link href={item.href || '#'} className="flex items-center flex-1">
            {item.icon && <span className="mr-2">{item.icon}</span>}
            <span>{item.title}</span>
            {item.badge && (
              <Badge variant="secondary" className="ml-auto text-xs">
                {item.badge}
              </Badge>
            )}
          </Link>
        )}
      </div>
      
      {hasChildren && isOpen && (
        <div className="mt-1 space-y-1">
          {item.children?.map((child, index) => (
            <NavItemComponent 
              key={index} 
              item={child} 
              pathname={pathname}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Sidebar