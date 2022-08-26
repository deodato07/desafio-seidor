# Teste técnico prático


## Contexto
---
Esse projeto é uma api que visa gerenciar os recursos entre motoristas e automóveis.

Os endPoints existentes estão distribuídos em 3 categorias, são elas:

1. Automóvel
2. Motorista
3. Registro de utilização




### Automóvel
---  
<br>  

* Cadastrar um novo automóvel 
    * URL: localhost:3000/veiculo 
    * Metodo: POST
    * Request Body:
        ```json
            {
                "placa": "dwd9928",
                "cor": "rosa",
                "marca": "Fiat"
            }
        
        ```
    * Response:
        * Code: 200
        ```json
            {
                "placa": "dwd9928",
                "cor": "rosa",
                "marca": "Fiat",
                "id": 1
            }
        
        ```

<br>

* Atualizar um automóvel cadastrado
    * URL: localhost:3000/veiculos/:id 
    * Metodo: PUT
    * Request Body:
        ```json
            {
                "placa": "abc1234",
                "cor": "azul",
                "marca": "Fiat"
            }
        
        ```
    * Response:
        * Code: 200
        ```json
            [
                {
                    "placa": "abc1234",
                    "cor": "azul",
                    "marca": "Chevrolet",
                    "id":2
                }
            ]
        
        ```

<br>

* Excluir um automóvel cadastrado
    * URL: localhost:3000/veiculos/:id 
    * Metodo: DELETE
    * Response:
        * Code: 200
        ```json
            { "message": "O veículo foi deletado"}
        
        ```

<br>

* Recuperar um automóvel cadastrado pelo seu identificador único
    * URL: localhost:3000/veiculos/:id 
    * Metodo: GET
    * Response:
        * Code: 200
            ```json
                {
                    "placa": "abc1234",
                    "cor": "azul",
                    "marca": "Chevrolet",
                    "id": 2
                }
            
            ```


* Listar os automóveis cadastrados. Deve ser possível filtrar a listagem dos automóveis por cor e marca
    * URL: localhost:3000/veiculos?cor=azul&marcha=Chevrolet
    * Metodo: GET
    * Response:
        * Code: 200
            ```json
            [
                {
                    "placa": "abc1234",
                    "cor": "azul",
                    "marca": "Chevrolet",
                    "id": 2
                }
            ]
            
            ```




<br>
<br>


### Motoristas
---  
<br>  

* Cadastrar um novo motorista 
    * URL: localhost:3000/motoristas
    * Metodo: POST
    * Request Body:
        ```json
            {
                "nome": "Deodato"
            }
        
        ```
    * Response:
        * Code: 200
        ```json
            [
                {
                    "id": 1,
                    "nome": "Deodato"
                }
            ]
        
        ```

<br>  

* Atualizar um motorista cadastrado
    * URL: localhost:3000/motoristas/:id
    * Metodo: PUT
    * Request Body:
        ```json
            {
                "nome": "João"
            }
        
        ```
    * Response:
        * Code: 200
        ```json
            [
                {   
                    "id": 1,
                    "nome": "João"
                }
            ]
        
        ```

<br>  

* Excluir um motorista cadastrado
    * URL: localhost:3000/motoristas/:id
    * Metodo: DELETE
    * Response:
        * Code: 200
            ```json
                { "message": "O motorista foi deletado"}
            ```

<br>  

* Recuperar um motorista cadastrado pelo seu identificador único
    * URL: localhost:3000/motoristas/:id
    * Metodo: GET
    * Response:
        * Code: 200
            ```json
                {   
                    "id": 1,
                    "nome": "João"
                }
            ```

* Listar os motoristas cadastrados. Deve ser possível filtrar a listagem dos motoristas por nome
    * URL: localhost:3000/motoristas?nome=João
    * Metodo: GET
    * Response:
        * Code: 200
            ```json
            [
                {   
                    "id": 1,
                    "nome": "João"
                }
            ]
            ```


### Registro de utilização
---  
<br> 

*   Criar um registro que represente a utilização de um automóvel por um motorista, com uma data de início e um texto do motivo de utilização.  
    * URL: localhost:3000/reserva/inicio
    * Metodo: POST
    * Request Body:
        ```json
            {
                "placa": "dwd9929",
                "nome": "Deodato"
            }
        
        ```
    * Response:
        * Code: 200
        ```json
            [
                {
                    "id": 0,
                    "automovel": {
                        "placa": "dwd9929",
                        "cor": "rosa",
                        "marca": "Fiat",
                        "id": 0
                    },
                    "motorista": {
                        "id": 0,
                        "nome": "João"
                    },
                    "inicioDaReserva": "2022-08-26T00:43:25.935Z"
                }
            ]
        
        ```

<br> 


*   Finalizar a utilização de um automóvel por um motorista guardando a data de finalização 
    * URL: localhost:3000/reserva/:id/final
    * Metodo: PUT
    * Response:
        * Code: 200
        ``` json
            [
                {
                    "id": 0,
                    "automovel": {
                        "placa": "dwd9929",
                        "cor": "rosa",
                        "marca": "Fiat",
                        "id": 0
                    },
                    "motorista": {
                        "id": 0,
                        "nome": "João"
                    },
                    "inicioDaReserva": "2022-08-26T00:46:13.588Z",
                    "finalDaReserva": "2022-08-26T00:46:35.075Z"
                }
            ]
        
        ```

<br> 

*   Listar os registros de utilização cadastrados no sistema com o nome do motorista e as informações do automóvel utilizado
    * URL: localhost:3000/reservas/
    * Metodo: GET
    * Response:
        * Code: 200
        ``` json
            [
                {
                    "id": 0,
                    "automovel": {
                        "placa": "dwd9929",
                        "cor": "rosa",
                        "marca": "Fiat",
                        "id": 0
                    },
                    "motorista": {
                        "id": 0,
                        "nome": "João"
                    },
                    "inicioDaReserva": "2022-08-26T00:46:13.588Z",
                    "finalDaReserva": "2022-08-26T00:46:35.075Z"
                }
            ]
        
        ```

<br> 
