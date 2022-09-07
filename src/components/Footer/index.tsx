import './styles.scss'

import heartImg from '../../images/heart.svg'

export function Footer() {
    return (
        <footer className="footer">
            <p>
                Desenvolvido com
                
                <img 
                src={heartImg} 
                alt="Ícone de um coração azul" 
                className="heart-icon" />

                por @<span>luca</span>.<span>merighii</span>
            </p>
        </footer>
    )
}