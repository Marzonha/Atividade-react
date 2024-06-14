import styles from "./HomeContent.module.css";

export function HomeContent() {
  return (
    <div className={styles.titleHomeContent}>
      <h3>Conteudo do home</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dignissimos assumenda commodi debitis, odit error laudantium doloremque numquam ullam rerum dolorum voluptatum accusamus. Pariatur consectetur, doloremque impedit harum voluptatibus sint.</p>

   {/* Add a primeira imagem, provavelmente com o tipo de carregamento lento */}
       <div className={styles.timg}>

       <img src="https://images.unsplash.com/photo-1718102696639-451bd772dca4?q=80&w=976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

       </div>
    </div>
  )
}


