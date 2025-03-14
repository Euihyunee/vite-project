import { Link } from "react-router-dom";
import styles from './header.module.css';
//전역스타일로 적용
//import './header.module.css';
function Logo(){
  return <>
  <section className={styles.logo}>
    <h1>로고</h1>
    <div className="wrap flex align-center">
      <p>
        <Link to={'/'}>HOME</Link>
      </p>
    </div>
  </section>  
  </>;
}

const Gnb=()=>{return <>
  <nav className={styles.gnb}>
    <h1>메인메뉴</h1>
    <div className="wrap flex align-center">
      <ul className="flex">
        <li>
          <Link to={'/post'}>포스트</Link>
        </li>
        <li>
          <Link to={'/'}>메뉴2</Link>
        </li>
        <li>
          <Link to={'/'}>메뉴3</Link>
        </li>
        <li>
          <Link to={'/'}>메뉴4</Link>
        </li>
        <li>
          <Link to={'/'}>메뉴5</Link>
        </li>
      </ul>
    </div>
  </nav>
</>}

const UserMenu=()=>{

  const user=false;

  return <>
  
  <section className={styles.user}>
    <h1>사용자메뉴</h1>
    <div className="wrap">      
      {!user?
      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
      :
      <div>
        <span>이름</span>
        <button>로그아웃</button>
      </div>
      }
    </div>
  </section>
</>}

function Header(){
  return (<>
  <header id="header" >
    <h1>헤더영역</h1>
    <div className={`wrap flex between view-size ${styles.header} `}>
      <Logo />
      <Gnb />
      <UserMenu />
    </div>
  </header>
  </>)
}

export default Header;