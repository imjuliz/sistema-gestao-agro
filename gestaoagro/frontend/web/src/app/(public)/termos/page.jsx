//uma página de termos de uso com indice para rapida navegação
export default function TermosDeUso() {
    return (
        <>
            <main className='w-full open-sans flex h-screen w-screen justify-center pt-[200px] bg-stone-950 '>
                <div className="flex flex-col gap-5">
                    <h1 className='archivo-black-regular text-5xl'>Termos de Serviço</h1>
                    <p>Última atualização: 25 de setembro de 2025</p>
                    <div className="conteudo w-180 flex flex-col gap-2">

                        <h2 className="text-xl font-bold">1. Aceitação dos Termos</h2>
                        <p>Ao acessar ou utilizar o sistema de monitoramento agropecuário (“Sistema”), o usuário declara ter lido, compreendido e aceitado integralmente estes Termos de Uso. Se você não concordar com qualquer condição aqui estabelecida, não deverá utilizar o Sistema.</p>

                        <h2 className="text-xl font-bold">2. Definições</h2>
                        <p><b>Sistema:</b> Plataforma digital (web, mobile ou desktop) para monitoramento, gestão e análise de dados agropecuários. <br></br>
                            <b>Usuário:</b> Pessoa física ou jurídica que acessa e utiliza o Sistema.<br></br>
                            <b>Dados:</b> Informações inseridas, coletadas ou geradas pelo uso do Sistema, incluindo dados climáticos, de solo, sensores, produtividade, localização, entre outros.</p>

                        <h2 className="text-xl font-bold">3. Funcionalidade do Sistema</h2>
                        <p>O Sistema oferece funcionalidades como (mas não se limitando a):
                            <ul className="list-disc pl-5">
                                <li>Monitoramento remoto de sensores em áreas agrícolas;</li>
                                <li>Visualização de dados ambientais, climáticos e operacionais;</li>
                                <li>Geração de relatórios e alertas;</li>
                                <li>Armazenamento e histórico de dados de monitoramento.</li></ul>
                            O acesso a algumas funcionalidades pode depender do plano contratado ou da disponibilidade técnica em determinada região.</p>

                            <h2 className="text-xl font-bold">3. Funcionalidade do Sistema</h2>
                    </div>
                </div>

            </main>
        </>
    )
}