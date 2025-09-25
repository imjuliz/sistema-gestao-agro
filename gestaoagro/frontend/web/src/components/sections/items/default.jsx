import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "@/components/ui/item";
import { Section } from "@/components/ui/section";

export default function Items({
  title = "Como funciona?",
  items = [
    {
      title: "Matriz (Administração Central)",
      description: "Na matriz, você tem um painel consolidado de todas as fazendas e lojas. É possível comparar desempenho entre unidades, acompanhar relatórios financeiros, gerenciar funcionários e até definir permissões de acesso para cada perfil.\nTudo em uma só plataforma, centralizando informações críticas para que sua empresa tome decisões rápidas e assertivas.",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Fazenda (Unidade de Produção)",
      description: "Na fazenda, o sistema registra desde o plantio até a colheita, incluindo irrigação, aplicação de insumos e manejo animal. Cada atividade fica documentada, permitindo controlar custos, aumentar a produtividade e garantir rastreabilidade total.\n Você sabe exatamente o que foi feito, quando e por quem, garantindo mais eficiência e transparência na produção.",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Loja (Unidade de Venda)",
      description:
        "Nas unidades de venda, o sistema funciona como um PDV inteligente, registrando vendas em tempo real e atualizando automaticamente o estoque. É possível ajustar preços por loja, acompanhar despesas locais e visualizar relatórios de desempenho diário, mensal ou anual.\nAssim, cada loja opera de forma independente, mas a matriz continua tendo total visibilidade das operações.",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    // {
    //   title: "Easy to customize",
    //   description: "Flexible options to match your product or brand",
    //   icon: <BlocksIcon className="size-5 stroke-1" />,
    // },
    // {
    //   title: "Top-level performance",
    //   description: "Made for lightning-fast load times and smooth interactions",
    //   icon: <FastForwardIcon className="size-5 stroke-1" />,
    // },
    // {
    //   title: "Production ready",
    //   description: "Thoroughly tested and launch-prepared",
    //   icon: <RocketIcon className="size-5 stroke-1" />,
    // },
    // {
    //   title: "Made for localisation",
    //   description:
    //     "Easy to implement support for multiple languages and regions",
    //   icon: <LanguagesIcon className="size-5 stroke-1" />,
    // },
    // {
    //   title: "CMS friendly",
    //   description:
    //     "Built to work with your any headless content management system",
    //   icon: <SquarePenIcon className="size-5 stroke-1" />,
    // },
  ],
  className,
}) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
        {/* <h2 className="max-w-[224px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight"> */}
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          // <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          <div className="grid auto-rows-fr gap-0 sm:grid-cols-1 sm:gap-4 lg:grid-cols-3">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription className={'text-justify'}>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
