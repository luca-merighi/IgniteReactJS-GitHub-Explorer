import logoImg from '../../images/github-white.svg'

import './styles.scss'

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <img 
                src={logoImg} 
                alt="Logo GitHub Explorer" />
                <h1>
                    GitHub <span>Explorer</span>
                </h1>
            </div>
        </header>
    )
}