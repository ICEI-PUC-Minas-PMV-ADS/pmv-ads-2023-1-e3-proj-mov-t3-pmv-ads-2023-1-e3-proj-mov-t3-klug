# Plano de Testes de Software

| **Caso de Teste** 	| **CT-01 – Tela de login** 	|
|:---:	|:---:	|
|	Requisito Associado 	| *RF-001* - Tela de login. |
| Objetivo do Teste 	| Conectar ao perfil do usuário no sistema. |
| Passos 	| - Acessar o app <br> - Informar email e senha<br> - Clicar em "logar" <br>  |
| Critério de Êxito | - Conecta ao sistema com sucesso. |
| Fluxo Alternativo | - Erro de Login (Senha incorreta) |
| Passos 	| - Clicar em "esqueci minha senha" <br> - Preencher com o email cadastrado <br> - Fazer redefinição de senha <br> - Clicar em "OK" <br> - Fazer o Login <br> |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Home page com estatística do aluno**	|
|Requisito Associado | *RF-002*	- Home page com estatística do aluno. |
| Objetivo do Teste 	| Mostrar ao aluno as estatísticas das respostas das questões. |
| Passos 	| - Acessar o app <br> - Fazer login no app como aluno<br> - Clicar no botão de menu |
| Critério de Êxito | - As estatísticas são mostradas com êxito. |
| Fluxo Alternativo | -  |
| Passos 	| -  |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Home page com estatística dos alunos**	|
|Requisito Associado | *RF-003*	- Home page com estatística dos alunos. |
| Objetivo do Teste 	| Mostrar ao professor as estatísticas das respostas das questões. |
| Passos 	| - Acessar o app <br> - Fazer login no app como professor<br> - Clicar no botão de menu |
| Critério de Êxito | - As estatísticas são mostradas com êxito. |
| Fluxo Alternativo | -  |
| Passos 	| -  |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Menu lateral com as matérias disponíveis**	|
|Requisito Associado | *RF-004*	- Menu lateral com as matérias disponíveis. |
| Objetivo do Teste 	| Mostrar ao professor e aos alunos as matérias disponíveis no menu lateral. |
| Passos 	| - Acessar o app <br> - Fazer login no app como professor ou como aluno<br> - Clicar no botão de menu |
| Critério de Êxito | - As Matérias são mostradas com êxito. |
| Fluxo Alternativo | - Matérias não exibidas com êxito (Falha no carregamento) |
| Passos 	| - Clicar no ícone de "refresh" <br> - Caso não carregue, fazer "log-off" <br> - Fazer "login" <br> - Clicar no botão do menu <br> |
| Fluxo Alternativo | - Matérias não exibidas (Erro) |
| Passos 	| -  |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Scroll com as Questões de Multipla Escolha**	|
|Requisito Associado | *RF-005*	- Scroll com as Questões de Multipla Escolha . |
| Objetivo do Teste 	| Mostrar as questões múltipla escolha ao selecionar a matéria. |
| Passos 	| - Acessar o app <br> - Fazer login no app como professor ou como aluno<br> - Clicar no botão de menu <br> - Clicar em uma matéria|
| Critério de Êxito | - As questões são mostradas com êxito. |
| Fluxo Alternativo | - Questão não exibidas (Falha no carregamento) |
| Passos 	| - Clicar no ícone de "refresh" |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Feedback da Resposta da Questão**	|
|Requisito Associado | *RF-006*	-  Feedback da Resposta da Questão. |
| Objetivo do Teste 	| Mostrar as respostas das questões depois de respondidas. |
| Passos 	| - Acessar o app <br> - Fazer login no app como professor ou como aluno<br> - Clicar no botão de menu <br> - Clicar em uma matéria <br> - Responder a questão|
| Critério de Êxito | - As respostas são mostradas com êxito. |
| Fluxo Alternativo | - Falha no envio das questões respondidas  |
| Passos 	| -  |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – CRUD Questões para Professores**	|
|Requisito Associado | *RF-007*	-  CRUD Questões para Professores. |
| Objetivo do Teste 	| Garantir que as questões podem ser postadas pelo professor |
| Passos 	| - Acessar o app <br> - Fazer login no app como professor <br> - Clicar no botão de menu <br> - Clicar em uma matéria <br> - Clicar em adicionar questão|
| Critério de Êxito | - As questões são adicionadas com êxito. |
| Fluxo Alternativo | - Falha no envio de questões postadas |
| Passos 	| -  |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Envio das Questões para Alunos**	|
|Requisito Associado | *RF-005*	- Scroll com as Questões de Multipla Escolha . |
| Objetivo do Teste 	| Garantir ao Aluno o envio das questões |
| Passos 	| - Acessar o app <br> - Fazer login no app como aluno <br> - Clicar no botão de menu <br> - Clicar em uma matéria <br> - Realizar as questões <br> - Após concluir as questões clicar em enviar|
| Critério de Êxito | - Questões enviadas com êxito. |
| Fluxo Alternativo | - Falha no envio das questões |
| Passos 	| -  |
|  	|  	|


 <!--
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
-->
