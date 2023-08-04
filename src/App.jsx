import './App.css'
import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <> 

      <div className="container">

          <div className="row">
              <Header titulo="Adopta un perrito"></Header>
          </div>

          <div className="row">
              <div className="col-md-4">
                <Card src="/src/assets/procer.jpg" nombre="Procer" descripcion="Procer es un encantador Basset Hound de color marrón con orejas largas y caídas. Es el fiel perro de la familia Simpson y siempre está listo para acompañarlos en sus aventuras." texto="Basset Hound" colorFondo="text-bg-primary"></Card>
              </div>

              <div className="col-md-4">
                <Card src="/src/assets/chuletas.jpg" nombre="Chuletas" descripcion="Chuletas, también conocido como Porkchop en la versión en inglés, es el mejor amigo y compañero canino de Doug Funnie. Es un perro cariñoso y leal que está siempre dispuesto a apoyar a Doug en todas sus aventuras y travesuras." texto="Mestizo de terrier" colorFondo="text-bg-secondary"></Card>
              </div>

              <div className="col-md-4">
                <Card src="/src/assets/pluto.jpg" nombre="Pluto" descripcion="Pluto es un perro amarillo de Disney, leal y juguetón. Es el fiel compañero de Mickey Mouse y siempre está dispuesto a seguirlo en sus aventuras y travesías." texto="Desconocido" colorFondo="text-bg-success"></Card>
              </div>

              <div className="col-md-4">
                <Card src="/src/assets/clifford.jpg" nombre="Clifford" descripcion="Clifford es un adorable perro rojo mucho más grande que los perros normales. Es amigable, cariñoso y siempre busca hacer nuevos amigos y vivir emocionantes aventuras." texto="Gran Danés" colorFondo="text-bg-danger"></Card>
              </div>

              <div className="col-md-4">
                <Card src="/src/assets/bolt.jpg" nombre="Bolt" descripcion="Bolt es un perro blanco con manchas negras que protagoniza una serie de televisión donde cree que tiene superpoderes. Luego descubre la verdad sobre su identidad y comienza una emocionante aventura para reunirse con su dueña." texto="Raza mestiza" colorFondo="text-bg-warning"></Card>
              </div>

              <div className="col-md-4">
                <Card src="/src/assets/spunky.jpg" nombre="Spunky" descripcion="Spunky es el divertido y un poco tonto perro de Rocko en la serie La vida moderna de Rocko. A menudo se mete en situaciones cómicas y siempre está ahí para brindarle apoyo a su dueño." texto="Raza mestiza" colorFondo="text-bg-danger"></Card>
              </div>


          </div>

      </div>
        
      <div className="container-fluid text-center py-4 bg-light">
          <Footer></Footer>
      </div>

        

    </>
  )
}

export default App
