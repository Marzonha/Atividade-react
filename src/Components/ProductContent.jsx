
import styles from './ProductContent.module.css'

export function ProductContent() {
  return (
    <>
    <div className={styles.titleProductContent}>


    <h1 className={styles.TP} >Produtos Usados</h1>
    <div>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  className={styles.Pimg} src="https://images.unsplash.com/photo-1589872131197-bdd7256dd867?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className={styles.Pimg}   src="https://segredosdomundo.r7.com/wp-content/uploads/2020/06/apollo-11-origem-e-missao-que-levou-o-homem-a-lua-1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  className={styles.Pimg}  src="https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2013/11/Homem-na-lua_2.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

     {/* Produtos Cards */}



     {/* Produtos Cards */}
    </div>  
</div>
    </>
  )
}


