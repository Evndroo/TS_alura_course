class NegociacaoController{

    private _inputData:HTMLInputElement;
    private _inputQuantidade:HTMLInputElement;
    private _inputValor:HTMLInputElement;

    constructor(){
        this._inputData = <HTMLInputElement>document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }

    adiciona(event:Event){
        event.preventDefault();

        const data:Date = new Date(this._inputData.value.replace(/-/g,","))
        const quantidade: number = parseInt(this._inputQuantidade.value);
        const valor: number = parseFloat(this._inputValor.value);

        const negociacao = new Negociacao(data, quantidade, valor);
        console.log(negociacao)
    }
}