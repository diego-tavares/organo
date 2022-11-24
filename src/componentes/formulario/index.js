import CampoTexto from '../CampoTexto'


const Formulario = () => {
    return (
        <section>
            <form>
                <h2></h2>
                 <CampoTexto label="Nome" placeholder='Digite seu nome'/>
                 <CampoTexto label="Cargo" placeholder='Digite seu cargo'/>
                 <CampoTexto label="Imagem" placeholder='Digite o endereço da imagem'/>
            </form>
        </section>
    )
    

}

export default Formulario