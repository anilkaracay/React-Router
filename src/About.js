import logo from "./logo.svg";
import "./App.css";

function About(props) {
  const {setIsAgreement,} = props
  return (
    <div className="App">
      <div class="buttons">
        <a href="/private" onClick={() => {
          localStorage.setItem('isAgreement', true);
          setIsAgreement(true)
        }}  class="btn confirm">
          Kabul et
        </a>
        <a
          href="/about"
          onClick={() =>{
            localStorage.removeItem('isAgreement')
            localStorage.setItem('isAgreement', false)
            setIsAgreement(false)
            alert("Kullanıcı Sözleşmesini Kabul Ediniz.")
          }}
          class="btn refuse"
        >
          Reddet
        </a>
      </div>
    </div>
  );
}

export default About;
