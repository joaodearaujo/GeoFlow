# 📦 GeoFlow — Gerenciamento de Logística em Tempo Real

O *GeoFlow* é um ecossistema completo para gerenciamento de entregas, focado na visualização geográfica de frotas e otimização da distribuição de pedidos para empresas de logística. O sistema permite acompanhar o deslocamento dinâmico de encomendas através de um mapa interativo, integrando um backend transacional robusto a um frontend moderno e reativo.
## 🛠️ Stack Tecnológica

A escolha da stack foi pautada em **segurança de tipos**, **performance** e **escalabilidade**:

* Backend (`Java` & `Spring Boot`): Utilizado para construir uma base sólida e transacional. No DeliveryService, implementei o uso de @Scheduled para simular o movimento das entregas em tempo real, demonstrando controle sobre processos assíncronos.
* Frontend (`React`, `TypeScript` & `Vite`): Adoção de TypeScript para garantir segurança de tipos e reduzir erros em tempo de execução.
* Gerenciamento de Estado (`TanStack Query`): Utilizado no hook useDeliveries para buscar coordenadas de forma eficiente, eliminando a necessidade de boilerplate (como useEffect) e facilitando o cache de dados.
* Validação e UI (`Zod`, `TailwindCSS` & `Shadcn/UI`): Uso do Zod para garantir que os dados recebidos da API estejam em conformidade com o esperado e Tailwind/Shadcn para uma interface moderna e responsiva.
* Geolocalização (`Leaflet`): Integração de mapas para visualização espacial dos dados logísticos.

## 🏗️ Arquitetura e Diferenciais Técnicos

### Simulação de Movimento em Tempo Real
No backend, implementei o `DeliveryService` utilizando a anotação `@Scheduled` do Spring. Este serviço percorre as entregas com status `IN_TRANSIT` e simula o deslocamento geográfico alterando a latitude e a longitude automaticamente a cada 5 segundos. Essa abordagem demonstra domínio sobre processos assíncronos e lógica de negócio contínua.

### Gerenciamento Inteligente de Dados
No frontend, o sistema utiliza o hook customizado `useDeliveries`, que encapsula o **TanStack Query**. Isso permite que as coordenadas das entregas sejam atualizadas de forma performática, eliminando o *boilerplate* de `useEffect` tradicionais e garantindo um cache inteligente que reduz o consumo desnecessário de API.

### Segurança e Robustez
A integração do **TypeScript** no frontend com o **Zod** garante que os dados recebidos da API estejam sempre em conformidade com os contratos definidos, evitando erros silenciosos em tempo de execução. No backend, a estrutura segue o padrão de **Camadas** (Controller, Service, Repository), facilitando a manutenção e a aplicação de princípios **SOLID**.

## 🚀 Como Executar o Projeto

### Pré-requisitos
* Java 17 ou superior.
* Node.js (LTS).
* Maven.

### Passo a Passo
1.  **Backend:** ```bash
    cd geoflow-backend
    ./mvnw spring-boot:run
    ```
2.  **Frontend:**
    ```bash
    cd geoflow-frontend
    npm install
    npm run dev
    ```

---

> **Nota de Desenvolvimento:** Este projeto representa minha evolução na construção de sistemas distribuídos e na integração de tecnologias corporativas com ferramentas de ponta no ecossistema JavaScript.
