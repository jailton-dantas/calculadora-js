# calculadora-js
Calculadora criada para testes com Jasmine


Passo a passo para criaçao e configuração do ambiente*

1) jasmine: npm install --save-dev jasmine (Instalação do jasmine e garantir que a pasta node_modules foi criada) verificar o pacote jasmine em devDependencies do package.json jasmine init verificar se o diretório spec foi criado

2) Integrando o karma: npm install --save-dev karma npm install --save-dev karma-jasmine npm install --save-dev karma-firefox-launcher Execução do assistente do karma: karma init karm.conf.js Resposta as questões jasmine no firefox spec/**/*Spec.js Digite ENTER yes

3) Integrando o browserify com o karma (Serve para ajudar na conversão do require para ser executado no navegador) npm install --save-dev browserify instalar pacote watchify npm install --save-dev watchify Instalar o pacote de integração do karma com o Browserify npm install --save-dev karma-browserify

4) Edição do arquivo karma.conf.js Em 'frameworks' adicione 'browserify' ficará: frameworks:['jasmine', 'browserify'] Diretorio helpers em files: spec/helpers//*SpecHelper.js Em preprocessors spec//*Spec.js:['browserify']

5) Integrando o script de teste no package.json: Editar a entrada scripts e adicione tres novas entradas que seguem: "teste-jasmine": "jasmine" "teste-dev": "karma-start" "teste: "karma start--single-run"

6) Executar o teste em modo desenvolvimento para verificar se esta funcionamento corretamente =: npm run test-dev

7) Criação do arquivo de configuração TravisCI Criar o arquivo oculto .travis.yml na raiz do projeto. adicionar o seguinte conteudo ao arquivo: language: node_js before_install: -"export DISPLAY=.99.0" -"sh -e /etc/init.d/xvfb start" node_js: -'node'
