import objData from "./data.json";
import BackArrow from "./icons/BackArrow";

const Interestings = (): JSX.Element => {
  return (
    <main>
      <BackArrow />
      <div className="padding-left-extra">
        <h1>Ciekawostki</h1>
      </div>
      {objData.CIEKAWOSTKI.map((obj) => {
        return (
          <section className={obj.ZMIENNE.CSSKLAS} key={obj.ZMIENNE.ID}>
            <figure>
              <img
                className="img-sqr"
                src={obj.ZMIENNE.PHOTO}
                alt="zdjecie"
              ></img>
            </figure>
            <div>
              <h1> {obj.ZMIENNE.TYT}</h1>
              <p>{obj.ZMIENNE.TRESC}</p>
              <h2>{obj.ZMIENNE.PODTYT}</h2>
              <h3>{obj.ZMIENNE.LICZBA}</h3>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Interestings;
