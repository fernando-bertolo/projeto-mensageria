# Estrutura da Aplicação Angular

## Visão Geral

Esta aplicação Angular foi dividida em uma arquitetura modular seguindo as melhores práticas de desenvolvimento. A estrutura foi organizada para facilitar a manutenção, escalabilidade e reutilização de código.

## Estrutura de Pastas

```
src/app/
├── app.component.ts          # Componente principal da aplicação
├── app.component.html        # Template principal (router-outlet)
├── app.routes.ts            # Configuração das rotas principais
├── features/                # Módulos de funcionalidades
│   ├── dashboard/           # Módulo do Dashboard
│   │   └── dashboard.component.ts
│   ├── produtos/            # Módulo de Produtos
│   │   ├── produtos.module.ts
│   │   └── components/
│   │       ├── produtos-list/
│   │       ├── produto-form/
│   │       └── produto-detail/
│   └── pedidos/             # Módulo de Pedidos
│       ├── pedidos.module.ts
│       └── components/
│           ├── pedidos-list/
│           ├── pedido-form/
│           └── pedido-detail/
└── shared/                  # Componentes e serviços compartilhados (futuro)
```

## Arquitetura Modular

### 1. **Dashboard (Standalone Component)**
- **Localização**: `features/dashboard/`
- **Tipo**: Componente standalone
- **Função**: Página inicial com visão geral do sistema
- **Características**: 
  - Menu lateral de navegação
  - Cards com estatísticas
  - Tabelas resumidas

### 2. **Módulo de Produtos**
- **Localização**: `features/produtos/`
- **Tipo**: Módulo Angular tradicional
- **Componentes**:
  - `ProdutosListComponent`: Listagem de produtos
  - `ProdutoFormComponent`: Formulário de criação/edição
  - `ProdutoDetailComponent`: Visualização detalhada
- **Rotas**:
  - `/produtos` - Listagem
  - `/produtos/novo` - Novo produto
  - `/produtos/editar/:id` - Editar produto
  - `/produtos/:id` - Detalhes do produto

### 3. **Módulo de Pedidos**
- **Localização**: `features/pedidos/`
- **Tipo**: Módulo Angular tradicional
- **Componentes**:
  - `PedidosListComponent`: Listagem de pedidos
  - `PedidoFormComponent`: Formulário de criação/edição
  - `PedidoDetailComponent`: Visualização detalhada
- **Rotas**:
  - `/pedidos` - Listagem
  - `/pedidos/novo` - Novo pedido
  - `/pedidos/editar/:id` - Editar pedido
  - `/pedidos/:id` - Detalhes do pedido

## Benefícios da Divisão Modular

### 1. **Lazy Loading**
- Cada módulo é carregado apenas quando necessário
- Melhora o tempo de carregamento inicial
- Reduz o tamanho do bundle principal

### 2. **Separação de Responsabilidades**
- Cada módulo gerencia apenas sua funcionalidade
- Código mais organizado e fácil de manter
- Facilita o trabalho em equipe

### 3. **Reutilização**
- Componentes podem ser reutilizados entre módulos
- Serviços compartilhados podem ser criados
- Padrões consistentes em toda aplicação

### 4. **Escalabilidade**
- Fácil adição de novos módulos
- Estrutura preparada para crescimento
- Manutenção simplificada

## Rotas da Aplicação

```typescript
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component') },
  { path: 'produtos', loadChildren: () => import('./features/produtos/produtos.module') },
  { path: 'pedidos', loadChildren: () => import('./features/pedidos/pedidos.module') },
  { path: '**', redirectTo: '/dashboard' }
];
```

## Próximos Passos

### 1. **Criar Serviços**
- `ProdutoService` para operações CRUD de produtos
- `PedidoService` para operações CRUD de pedidos
- `DashboardService` para estatísticas

### 2. **Implementar Interceptors**
- `AuthInterceptor` para autenticação
- `ErrorInterceptor` para tratamento de erros
- `LoadingInterceptor` para indicadores de carregamento

### 3. **Adicionar Guards**
- `AuthGuard` para proteção de rotas
- `RoleGuard` para controle de acesso por perfil

### 4. **Criar Componentes Compartilhados**
- `LoadingComponent` para indicadores de carregamento
- `ModalComponent` para diálogos
- `TableComponent` para tabelas reutilizáveis

### 5. **Implementar Pipes Customizados**
- `StatusPipe` para formatação de status
- `CurrencyPipe` para formatação de moeda

## Convenções de Nomenclatura

- **Componentes**: PascalCase (ex: `ProdutoFormComponent`)
- **Módulos**: PascalCase + "Module" (ex: `ProdutosModule`)
- **Serviços**: PascalCase + "Service" (ex: `ProdutoService`)
- **Interfaces**: PascalCase (ex: `Produto`)
- **Arquivos**: kebab-case (ex: `produto-form.component.ts`)

## Tecnologias Utilizadas

- **Angular 17+**: Framework principal
- **TypeScript**: Linguagem de programação
- **Tailwind CSS**: Framework de estilização
- **Angular Router**: Sistema de roteamento
- **Angular Forms**: Formulários reativos
- **Angular Common**: Diretivas e pipes comuns 
