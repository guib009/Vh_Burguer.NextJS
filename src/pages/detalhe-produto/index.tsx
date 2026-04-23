import Footer from "@/components/footer/footer";
import Header from "@/components/sub-header/sub-header";
import styles from "./detalhe-produto.module.css";

const DetalheProduto = () => {
    return (
        <>
            <Header />
            <main className={styles.main_background}>
                
                <section className={`${styles.container_banner} layout_guide`}>
                    
                    <h1 className={styles.titulo}>Detalhes do X-Bacon</h1>
                    
                    <img 
                        className={styles.imagem_produto}
                        src="../imgs/HamburguerAlcatraComBacon.png" 
                        alt="Hambúrguer com carne, queijo, salada e bacon" 
                    />

                    <div className={styles.grid_detalhes}>
                        
                       
                        <div className={styles.coluna_esquerda}>
                            <div className={styles.item_detalhe}>
                                <h3>Nome do produto</h3>
                                <p>Monstro</p>
                            </div>

                            <div className={styles.item_detalhe}>
                                <h3>Descrição</h3>
                                <p>Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas, queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada no ponto adocicado, alface fresca, tomate e um molho especial intenso que amarra tudo. Para completar o ataque, uma camada extra de onion rings ou molho defumado que transforma cada mordida numa explosão.</p>
                            </div>
                        </div>

                        
                        <div className={styles.coluna_direita}>
                            <div className={styles.item_detalhe}>
                                <h3>Preço (R$)</h3>
                                <p>
                                    <span className={styles.preco_antigo}>R$45,00</span> 
                                    R$35,00
                                </p>
                            </div>

                            <div className={styles.item_detalhe}>
                                <h3>Categoria</h3>
                                <ul>
                                    <li>Premium</li>
                                    <li>Artesanal</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
                    <Footer />
                </>
    )
}

export default DetalheProduto;