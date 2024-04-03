import objData from "./data.json";
import BackArrow from "./icons/BackArrow";
const Ciekawostki = () => {
  return (
    <div>
      <BackArrow />
      <div className="padding-left-h1">
        <h1>Ciekawostki</h1>
      </div>
      {objData.CIEKAWOSTKI.map((obj) => {
        return (
          <div className={obj.ZMIENNE.CSSKLAS} key={obj.ZMIENNE.ID}>
            <img
              className="img-sqr"
              src={obj.ZMIENNE.ZDJECIE}
              alt="zdjecie"
            ></img>
            <div className="ciekawostka-tekst">
              <h1 className="ciekawostki-h1"> {obj.ZMIENNE.TYT}</h1>
              <p className="Padding-left">{obj.ZMIENNE.TRESC}</p>
              <h2>{obj.ZMIENNE.PODTYT}</h2>
              <h3>{obj.ZMIENNE.LICZBA}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ciekawostki;
