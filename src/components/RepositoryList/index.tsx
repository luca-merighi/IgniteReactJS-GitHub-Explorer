import { useEffect, useState } from 'react'
import { RepositoryItem } from '../RepositoryItem'

import './styles.scss'

interface Repository {
    name: string,
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/luca-merighi/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <main>
            <div className="container">
                <h2>
                    Lista de Repositórios 
                </h2>
                
                <ul className="repositories-list">
                    {repositories.map(repository => {
                        return <RepositoryItem
                        key={repository.name}
                        repository={repository} /> 
                    })}
                </ul>
            </div>
        </main>
    )
}