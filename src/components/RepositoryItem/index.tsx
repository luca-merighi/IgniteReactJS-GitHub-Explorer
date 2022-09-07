import './styles.scss'

interface RepositoryItemProps {
    repository: {
        name: string,
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <a href={props.repository.html_url} target="_blank">
                <strong>
                    {props.repository.name}
                </strong>

                <p>
                    Acessar Repositório
                </p>
            </a>
        </li>
    )
}