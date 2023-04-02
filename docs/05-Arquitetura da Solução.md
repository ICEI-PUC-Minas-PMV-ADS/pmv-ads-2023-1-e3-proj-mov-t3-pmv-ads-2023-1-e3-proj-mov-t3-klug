# Arquitetura da Solução
<!--
<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)
-->

![Imagem do WhatsApp de 2023-03-28 à(s) 21 49 47](https://user-images.githubusercontent.com/16859514/228695826-1e607226-0ce4-4841-b745-3edb0b1e9040.jpg)

## Diagrama de Classes
<!--
O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)
-->

![Imagem do WhatsApp de 2023-03-28 à(s) 22 02 56](https://user-images.githubusercontent.com/16859514/228695867-c7665fdd-a9f8-4d50-a705-bffe3dd08e80.jpg)

## Modelo ER

<!--
O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)
-->

![Imagem do WhatsApp de 2023-03-29 à(s) 15 01 25](https://user-images.githubusercontent.com/16859514/228695941-d469c14b-f219-4055-8cee-d35244484425.jpg)

## Esquema Relacional
<!--
O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)
-->

![image](https://user-images.githubusercontent.com/16859514/228698950-5e007376-3a08-42c0-ac46-0ab839ccfd9b.png)


## Modelo Físico
<!--
Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.
-->

```sql
CREATE TABLE subject (
  ID INTEGER PRIMARY KEY,
  TITLE TEXT
);

CREATE TABLE question (
  ID INTEGER PRIMARY KEY,
  TITLE TEXT,
  SUBJECT_ID INTEGER,
  WRONGALTERNATIVES TEXT,
  CORALTERNATIVE TEXT,
  AVAILABLE BOOLEAN,
  EXPDATE DATE,
  FOREIGN KEY(SUBJECT_ID) REFERENCES subject(ID)
);

CREATE TABLE teacher (
  ID INTEGER PRIMARY KEY,
  FIRSTNAME TEXT,
  LASTNAME TEXT,
  SUBJECT_ID INTEGER,
  USER_ID INTEGER,
  FOREIGN KEY(SUBJECT_ID) REFERENCES subject(ID),
  FOREIGN KEY(USER_ID) REFERENCES user(ID)
);

CREATE TABLE user (
  ID INTEGER PRIMARY KEY,
  NAME TEXT,
  LOGIN TEXT,
  PSWHASH TEXT,
  EXPDATE DATE,
  CURWORKING BOOLEAN,
  ROLE TEXT
);

CREATE TABLE student (
  ID INTEGER PRIMARY KEY,
  FIRSTNAME TEXT,
  LASTNAME TEXT,
  SUBJECTCLASS TEXT,
  APPROVED BOOLEAN,
  RECOVERY BOOLEAN,
  SUSPENDED BOOLEAN,
  USER_ID INTEGER,
  FOREIGN KEY(USER_ID) REFERENCES user(ID)
);

````

## Tecnologias Utilizadas

<!--
Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.
-->

Tecnologias Usadas:
 - React.js
 - React Native
 - React Native Paper
 - JSON
 - VS Code
 - Visual Studio
 - Sqlite

## Hospedagem

<!--
Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
-->

O programa usará a aplicação de JSON SERVER como métodod e hospedagem do back-end da aplicação podendo, a depender da evolução do projeto, ser migrado para uma estrutura de back-end em ASP.NET Core. O planejamento é hospedar o back-end na infraestrutura local de um participante do grupo.

## Qualidade de Software
<!--
Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
-->

De acordo com a norma ISO/IEC 25010:2011, as características de qualidade do software são:

 - Funcionalidade - Atende às necessidades do usuário
 - Confiabilidade - Executa suas funções de forma correta e consistente
 - Usabilidade - Fácil de usar e aprender
 - Eficiência - Desempenho adequado em relação aos recursos utilizados
 - Manutenibilidade - Capacidade de ser modificado e corrigido facilmente
 - Portabilidade - Pode ser utilizado em diferentes ambientes
 - Segurança - Protege informações e funcionalidades contra acesso não autorizado.

Diante disso, nossa aplicação tem como meta de desenvolvimento ser capaz de cumprir todos esses requisitos de qualidade de software para que seus stakeholders sejam corretamente satisfeitos.
