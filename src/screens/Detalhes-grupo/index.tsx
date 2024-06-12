import { Container, Title } from './styles'



interface IGroups {
    id: string,
    Descricao: string,
    status: number,
    imagem: string,
    nome: string,
    valor: string,
    dataRevelacao: string,
}


export function DetailsGroup() {   
    return (
        <Container>
          <Title>Olá, você está no grupo</Title>
        </Container>

    )
}