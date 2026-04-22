import styles from "./lista-produto.module.css";

import CardProduto from "../card-produto/card-produto";

const ListaProduto = () => {
    return (
        <>
        <article>
            <div className={styles.botao}>
            <button>Filtrar</button>
            
        </div>
            

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

        </article>
        

            <CardProduto />
        </>
    )
}

export default ListaProduto;