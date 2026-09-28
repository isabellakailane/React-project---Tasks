📝 Gerenciador de Tarefas

Aplicação web para organizar suas tarefas do dia a dia: adicione, conclua, exclua e veja os detalhes de cada uma em uma página dedicada. Feito com React, Vite e Tailwind CSS.


✨ Funcionalidades
➕ Adicionar tarefas com título e descrição
✅ Marcar como concluída com um clique
🗑️ Excluir tarefas
🔍 Página de detalhes para cada tarefa (via rotas)
💾 Persistência local: as tarefas continuam salvas mesmo depois de fechar o navegador
🎨 Interface padronizada com componente de botão reutilizável



🛠️ Tecnologias
Tecnologia	Uso
React	Construção da interface
Vite	Ambiente de desenvolvimento e build
Tailwind CSS	Estilização
React Router	Navegação entre páginas
Lucide React	Ícones
uuid	Geração de IDs únicos para as tarefas

🚀 Como rodar o projeto

Pré-requisito: ter o Node.js instalado.

bash
# 1. Clone o repositório
git clone https://github.com/isabellakailane/React-project---Tasks.git

# 2. Entre na pasta do projeto
cd React-project---Tasks

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

Depois, abra o endereço que aparecer no terminal (geralmente http://localhost:5173).

Outros comandos
bash
npm run build     # gera a versão de produção
npm run preview   # visualiza a build localmente
📁 Estrutura do projeto
src/
├── components/
│   ├── AddTasks.jsx    # Formulário para adicionar tarefas
│   ├── Button.jsx      # Botão reutilizável (padrão de cores)
│   └── Tasks.jsx       # Lista de tarefas
├── Pages/
│   └── Taskpage.jsx    # Página de detalhes da tarefa
├── App.jsx             # Página principal e estado das tarefas
├── main.jsx            # Configuração das rotas
└── index.css           # Estilos globais (Tailwind)
🧭 Rotas
Rota	Página
/	Lista de tarefas e formulário
/tasks?title=...&description=...	Detalhes da tarefa selecionada
💡 O que aprendi
Gerenciamento de estado com useState e efeitos com useEffect
Persistência de dados com localStorage
Navegação com react-router-dom (useNavigate e useSearchParams)
Criação de componentes reutilizáveis
Estilização com Tailwind CSS
🔮 Próximos passos
 Editar tarefas existentes
 Filtrar por concluídas e pendentes
 Modo escuro
 Deploy (Vercel ou Netlify)
 
👩‍💻 Autora

Feito com 💛 por Isabella Kailane 
 LinkedIn: www.linkedin.com/in/isabellakailane
